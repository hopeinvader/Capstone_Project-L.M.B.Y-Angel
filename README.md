# Capstone_Project-L.M.B.Y-Angel

L.M.B.Y(Let Me Be Your) Angel is my last project for 16 weeks bootcamp.

## Getting Started

You need to install Node.js and Knex.js in globally your machine. [Node.js](https://nodejs.org/en/) and [Knex.js](https://knexjs.org/)

You also need to start Postgres in your machine as well.
Create data base in postgres, then go to backend folder, in terminal run
```
knex migrate:latest
```
This command help you to migrate tables.
and
Inside of backend folder, there is  extraCommand.sql file.
Copy and paste everything to postgres, then you will have all of the tables and column you need.

### Installing

To run this code, need to do npm install in frontend and backend folder first.

inside of frontend and backend folder
```
npm install or yarn install
```

create .env file to put the server of back-end in frontend folder.

```
REACT_APP_API_SERVER=localhost:8080
# HTTPS=true
```

and then in frontend folder

```
npm start or yarn start
```

in back-end also need to create .env file to put DB name, username and password. For upload function, need to put AccessKey, secret access key and bucket of AWS S3 as well.

```
DB_NAME=''
DB_USERNAME=''
DB_PASSWORD=''

ACCESSKEY=''
SECRETACCESSKEY=''
BUCKET=''
```

and then in backend folder

```
node index.js
```

the front-end server must run at localhost:3000 back-end in localhost:8080

## Authors

* **Jihyup Ryu** - *Initial work* - [Jihyup Ryu](https://github.com/JihyupRyu)
