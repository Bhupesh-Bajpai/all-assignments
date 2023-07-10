const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const path = require('path');

const fs = require ('fs')

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretKey = 'your-secret-key';


const adminFilePath = path.join(__dirname, 'admin.json');

// Middleware to read JSON files
function readJsonFile(filePath) {
  return function(req, res, next) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server Error');
        return;
      }

      req.jsonData = JSON.parse(data);
      next();
    });
  };
}

// Admin routes
app.post('/admin/signup',readJsonFile(adminFilePath), (req, res) => {
  // logic to sign up admin

  const adminsJson = req.jsonData;

  const{username,password} = req.body;
  if(adminsJson.some(admins => admins.username === username)){
    return res.status(400).send("admin already exist");
  }

  bcrypt.genSalt(10,(err,salt)=>{
    if(err){
      return res.status(500).json({
        message : "error in genrating salt"
      })
     
    }
    bcrypt.hash(password,salt,(err,hash)=>{
      if(err){
        return res.status(500).json({
          message : "error in hashing password"
        })
      }
      const admin={
        username,
        password : hash
      };
      adminsJson.push(admin);
  
      const token = jwt.sign({ username, isAdmin: true }, secretKey, { expiresIn: '1h' });
  
        // Return the token to the client
        res.json({ message: 'Admin created successfully', token });
    })
  
  })

});

app.post('/admin/login', (req, res) => {
  // logic to log in admin
});

app.post('/admin/courses', (req, res) => {
  // logic to create a course
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
