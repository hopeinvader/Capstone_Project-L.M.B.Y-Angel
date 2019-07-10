const jwt = require("jwt-simple");
const config = require('../config');


class Pitch {
    constructor(knex){
        this.knex = knex;
    }

     getList(params){
        console.log(params.id)
        let query = this.knex.select().from('entrepneurs')
            .where({"entrepneurs_id":params.id})
            return query
    }

     list(){
        let query =  this.knex('entrepneurs')
            .innerJoin('summury', 'entrepneurs.summury', 'summury.id')
            .orderBy('timestamp', 'desc')
            return query.then((rows)=>{
                console.log(rows)
                return rows
            })
    }

    listIn(){
        console.log('firing?')
        let query = this.knex.select()
            .from('investors')
            .orderBy('timestamp', 'desc');
                return query
    }


     listS(){
        let query =  this.knex('entrepneurs')
            .innerJoin('summury', 'entrepneurs.summury', 'summury.id')
            return query.then((rows)=>{
                console.log(rows)

                return rows.map(r => ({
                    id: r.id,
                    entrepneurs_id: r.entrepneurs_id,
                    header: r.header,
                    body: r.body
                }))
            })
    }
     listSI(params){
        console.log('working here?')
        console.log(params)
        let query = this.knex.select('header', 'body').from('summury').where({"id":params.id})
        return query
    }

     listP(){
        let query =  this.knex('entrepneurs')
            .innerJoin('product', 'entrepneurs.product', 'product.id')
            return query.then((rows)=>{
                console.log(rows)
                return rows.map(r => ({
                    id: r.id,
                    entrepneurs_id: r.entrepneurs_id,
                    header: r.header,
                    body: r.body
                }))            
            })
    }

    listPI(params){
        console.log('working here?')
        console.log(params)
        let query = this.knex.select('header', 'body').from('product').where({"id":params.id})
        return query
    }

     listAD(){
        let query =  this.knex('entrepneurs')
            .innerJoin('advantage', 'entrepneurs.advantage', 'advantage.id')
            return query.then((rows)=>{
                console.log(rows)
                return rows.map(r => ({
                    id: r.id,
                    entrepneurs_id: r.entrepneurs_id,
                    header: r.header,
                    body: r.body
                }))            
            })
    }

    listADI(params){
        console.log('working here?')
        console.log(params)
        let query = this.knex.select('header', 'body').from('advantage').where({"id":params.id})
        return query
    }

     listM(){
        let query =  this.knex('entrepneurs')
            .innerJoin('motivation', 'entrepneurs.motivation', 'motivation.id')
            return query.then((rows)=>{
                console.log(rows)
                return rows.map(r => ({
                    id: r.id,
                    entrepneurs_id: r.entrepneurs_id,
                    header: r.header,
                    body: r.body
                }))            
            })
    }

    listMI(params){
        console.log('working here?')
        console.log(params)
        let query = this.knex.select('header', 'body').from('motivation').where({"id":params.id})
        return query
    }

     listT(){
        let query =  this.knex('entrepneurs')
            .innerJoin('toInvestors', 'entrepneurs.toInvestors', 'toInvestors.id')
            return query.then((rows)=>{
                console.log(rows)
                return rows.map(r => ({
                    id: r.id,
                    entrepneurs_id: r.entrepneurs_id,
                    header: r.header,
                    body: r.body
                }))            
            })
    }

    listTI(params){
        console.log('working here?')
        console.log(params)
        let query = this.knex.select('header', 'body').from('toInvestors').where({"id":params.id})
        return query
    }
}
    module.exports = Pitch;


