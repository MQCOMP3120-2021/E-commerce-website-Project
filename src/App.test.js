/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import fs from 'fs'
import ListOfProducts from './pages/menuScreen'

/**
 * Read sample data for testing
 * 
 * @param {String} fileName JSON data filename
 * @returns {Array} an array of like records
 */
const sampleData =  (fileName) => {
  const rawData = fs.readFileSync(fileName)
  const data = JSON.parse(rawData)

  return data.products
}

describe("Product component", () => {


})