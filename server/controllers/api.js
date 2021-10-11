const express = require('express') 
const fs = require("fs") 
const bcrypt = require ("bcrypt")
const jwt = require("jsonwebtoken")
const Product = require("../models/products")

const SECRET = process.env.SECRET
