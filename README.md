# Capstone_Project-L.M.B.Y-Angel

This is my last project for 16 weeks bootcamp.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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

* **Jihyup Ryu** - *Initial work* - [PurpleBooth](https://github.com/JihyupRyu)
