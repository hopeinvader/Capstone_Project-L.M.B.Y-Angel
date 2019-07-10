const express = require('express');
const authClass = require('../auth')
const auth = authClass();


class AuthRouter {
    constructor(service){
        this.service = service;
    }


    router(){
        let router = express.Router();

        router.get('/', this.get.bind(this));
        router.post('/', this.post.bind(this));
        router.post('/signup', this.postS.bind(this))
        router.post('/contact', this.postC.bind(this));

        
        return router;
    }

    get(req, res){
        return this.service.list()
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err));
    }

    post(req, res){
        return this.service.login(req.body.email, req.body.password)
            .then((token)=> res.json(token))
            .catch((err)=> res.status(500).json(err))
    }

    postS(req, res){
        return this.service.signUp(req.body.email, req.body.password, req.body.customBoolean)
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err))
    }

    postC(req, res){
        return this.service.contact(req.body)
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err))
    }

}

module.exports = AuthRouter;
