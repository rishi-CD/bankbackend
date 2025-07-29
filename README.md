# BANKING APP
This is an banking website this webcontains frontend and backend and connected data base which stores the users data in database

## Table Of Content

    Installation
    Databaseschema
    Dotenv
    Techs
    explanation

# Installation:

    node version = 16.0.0
    yarn version = 1.22.22
    prostgres sql (database)=16.9
    pgAdmin 4(optional)=9.5

### The procedure to set up the project:
    ##To install the dependencies run the command
    yarn add
    #### To run the server run the command 
    yarn start node.js
    #### To install the psql 
    sudo dnf install postgresql-server postgresql-contrib(fedora)
    sudo apt install postgresql (linux)
# Database schema

## The database schemas used in this task:
   ## User tables:
customerName, bankName, type, password, confirmPassword,customerId
   ## account table
   
  #### sample json
       {
        "customername" : "rishi",
        "bank" : "indian bank",
        "type" : "current",
        "password" : "password",
        "confirmpassword" : "password"
       }
### Dotenv credentials 

    host: 'localhost',
    user: 'database user',
    password: 'password',
    database: 'database',
    port: default port
# Tech
## frontend
- HTML
- CSS
- JAVASCRIPT
## Backend
- node js
- express
## Database
- postgress
- pgadmin
## Tool
- Nodemon

# Explanation:

## login and register
    In this page i have used to api to store the data in the database and get the data from the data and used for verification(/register,/login)
## dashboard
      this page is a normal html and css webpage
## transfer
      In this page i have assigned current and savings value then created a alert messge when it sends

