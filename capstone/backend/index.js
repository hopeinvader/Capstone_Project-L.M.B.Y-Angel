const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jwt-simple');
const axios = require ('axios')
const authClass = require('./auth');
const config = require('./config');

const app = express();
const auth = authClass();

//Upload Modules
const Users = require('./Service/users');
const AuthRouter = require('./Router/authRouter');
const Entrepneurs = require('./Service/entrepneurs');
const EntrepneursRouter = require('./Router/entrepneursRouter');
const Investors = require('./Service/investors');
const InvestorsRouter = require('./Router/investorsRouter');
const Pitch = require('./Service/pitch');
const PitchRouter = require('./Router/pitchRouter');
const fileRouter = require('./Router/uploadRouter')

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const cors = require('cors');

app.use(cors());
app.use(auth.initialize());
app.use(bodyParser.json());

let entrepneurs = new Entrepneurs(knex);
let user = new Users(knex);
let pitch = new Pitch(knex)
let investors = new Investors(knex)


app.get('/', function(req, res){
    res.send('Welcome to Capstone backend')
})

app.use('/api/test/', (new EntrepneursRouter(entrepneurs)).router());
app.use('/api/investors/', (new InvestorsRouter(investors)).router());
app.use('/api/users/', (new AuthRouter(user)).router());
app.use('/api/pitch/', (new PitchRouter(pitch)).router());
app.use('/api/upload/', fileRouter);

app.listen(8080, ()=>{
    console.log('Port number is 8080')
})