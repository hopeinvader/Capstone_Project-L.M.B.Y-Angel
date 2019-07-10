const express = require('express');

class EntrepneursRouter {
    constructor(service){
        this.service = service;
    }

    router(){
        let router = express.Router();

        router.get('/', this.get.bind(this));
        router.get('/pitch', this.getEv.bind(this));
        router.post('/', this.post.bind(this));
        router.post('/user', this.postU.bind(this));
        router.post('/ucbl', this.postUCBL.bind(this));
        router.post('/product', this.postP.bind(this))
        router.post('/advantage', this.postAD.bind(this))
        router.post('/motivation', this.postM.bind(this))
        router.post('/toInvestors', this.postT.bind(this))
        router.post('/about', this.postAB.bind(this))
        router.delete('/delete', this.delete.bind(this))
        router.delete('/deleteIn', this.deleteIn.bind(this))

        
        return router;
    }

    get(req, res){
        return this.service.list()
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err));
    }

    getEv(req, res){
        return this.service.listEv(req.query.user)
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err));
    }

    post(req, res){
        return this.service.add(req.body)
            .then(()=> this.service.list())
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }

    postU(req, res){
        return this.service.addUser(req.body)
            .then((results) => res.json(results))
            .catch((err)=> res.status(500).json(err))
    }

    postUCBL(req, res){
        return this.service.addUCBL(req.body)
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }

    postP(req, res){
        return this.service.addP(req.body)
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }
    postAD(req, res){
        return this.service.addAD(req.body)
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }
    postM(req, res){
        return this.service.addM(req.body)
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }
    postT(req, res){
        return this.service.addT(req.body)
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }
    postAB(req, res){
        return this.service.addAB(req.body)
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }

    delete(req, res){
        return this.service.delete(req.query.user)
            .then(()=> res.status(200))
            .catch((err)=> res.status(500).json(err))
    }

    deleteIn(req, res){
        return this.service.deleteIn(req.query.user)
            .then(()=> res.status(200))
            .catch((err)=> res.status(500).json(err))
    }


}

module.exports = EntrepneursRouter;
