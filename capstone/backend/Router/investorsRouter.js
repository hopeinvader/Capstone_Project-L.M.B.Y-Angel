const express = require('express');

class InvestorsRouter {
    constructor(service){
        this.service = service;
    }

    router(){
        let router = express.Router();

        router.get('/', this.get.bind(this));
        router.get('/profile', this.getIn.bind(this));
        router.post('/userIn', this.postUI.bind(this));
        router.post('/ucbl', this.postUCBL.bind(this));
        router.post('/about', this.postAB.bind(this));
        router.get('/:id', this.getId.bind(this));
        router.delete('/delete', this.deleteIn.bind(this))

        
        return router;
    }

    get(req, res){
        return this.service.list()
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err));
    }

    getIn(req, res){
        return this.service.listIn(req.query.user)
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err));
    }

    getId(req, res){
        return this.service.getList(req.params)
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err));
    }

    postUI(req, res){
        return this.service.addUserIn(req.body)
            .then((results) => res.json(results))
            .catch((err)=> res.status(500).json(err))
    }

    postUCBL(req, res){
        return this.service.addUCBL(req.body)
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }

    postAB(req, res){
        return this.service.addAB(req.body)
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }

    deleteIn(req, res){
        return this.service.delete(req.query.user)
            .then(()=> res.status(200))
            .catch((err)=> res.status(500).json(err))
    }

}

module.exports = InvestorsRouter;
