const express = require('express');



class PitchRouter {
    constructor(service){
        this.service = service;
    }


    router(){
        let router = express.Router();
        
        router.get('/entrepneurs', this.getEn.bind(this));
        router.get('/entrepneurs/summury', this.getEnS.bind(this));
        router.get('/summury/:id', this.getEnSI.bind(this));
        router.get('/entrepneurs/product', this.getEnP.bind(this));
        router.get('/product/:id', this.getEnPI.bind(this));
        router.get('/entrepneurs/advantage', this.getEnAD.bind(this));
        router.get('/advantage/:id', this.getEnADI.bind(this));
        router.get('/entrepneurs/motivation', this.getEnM.bind(this));
        router.get('/motivation/:id', this.getEnMI.bind(this));
        router.get('/entrepneurs/toInvestors', this.getEnT.bind(this));
        router.get('/toInvestors/:id', this.getEnTI.bind(this));
        router.get('/entrepneurs/about', this.getEnAB.bind(this));
        router.get('/:id', this.get.bind(this));
        router.get('/in', this.getIn.bind(this));
        
        return router;
    }

    get(req, res){
        return this.service.getList(req.params)
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err));
    }
    
    getEn(req, res){
        return this.service.list()
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err));
    }

    getEnS(req, res){
        return this.service.listS()
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnSI(req, res){
        return this.service.listSI(req.params)
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnP(req, res){
        return this.service.listP()
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnPI(req, res){
        return this.service.listPI(req.params)
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnAD(req, res){
        return this.service.listAD()
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnADI(req, res){
        return this.service.listADI(req.params)
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnM(req, res){
        return this.service.listM()
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnMI(req, res){
        return this.service.listMI(req.params)
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnT(req, res){
        return this.service.listT()
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnTI(req, res){
        return this.service.listTI(req.params)
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }
    getEnAB(req, res){
        return this.service.listAB()
            .then((results)=> res.json(results))
            .catch((err)=>res.status(500).json(err))
    }

    getIn(req, res){
        return this.service.listIn()
            .then((results)=>res.json(results))
            .catch((err)=>res.status(500).json(err));
    }

}

module.exports = PitchRouter;
