/**
 * @jest-environment node
 */

const mongoose = require('mongoose') 
const supertest = require('supertest')
const fs = require('fs')
const app = require('../app')
const Product = require("../models/products")

const api = supertest(app)

/**
 * Load sample data into the database for testing
 * 
 * @param {String} fileName JSON data filename
 */
const sampleData =  (fileName) => {
    const rawData = fs.readFileSync(fileName)
    const data = JSON.parse(rawData)

    data.units.map(async record => { 
        const l = new Product(record)
        await l.save() 
    })
}

describe('api', () => {

    beforeEach(async () => {
        sampleData("server/sample.json")
     })

     test('get request returns JSON', async () => {
        await api.get('/api/products')
                .expect(200)
                .expect('Content-Type', /application\/json/)
    })

    test('there are twelve unit records', async () => {
        const response = await api.get('/api/products')
        expect(response.body).toHaveLength(12)
    })

    test('get request returns single unit', async () => {
        await api.get('/api/products/1')
                .expect(200)
                .expect('Content-Type', /application\/json/)
    })

    afterEach(async () => {
        await Product.deleteMany({})
    })

    afterAll(() => {
        mongoose.connection.close()
    })

})