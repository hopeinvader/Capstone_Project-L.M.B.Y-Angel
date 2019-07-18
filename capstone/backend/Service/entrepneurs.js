const jwt = require("jwt-simple");
const config = require('../config');


class Entrepneurs {
    constructor(knex){
        this.knex = knex;
    }

    list(){
        let query = this.knex.select('header', 'highlights', 'body')
            .from('summury')
                return query.then((rows)=>{
                    return rows.map(r => ({
                        header: r.header,
                        highlights: r.highlights,
                        body: r.body
                    }));
                });
    }

    listEv(params){
        var token = params
        var decodeToken = jwt.decode(token, config.jwtSecret);
        let query = this.knex.select()
            .from('entrepneurs')
            .where({'entrepneurs_id': decodeToken.id})
                return query;
    }


    add(summury){
        var token = summury.user
        var decodeToken = jwt.decode(token, config.jwtSecret);
        let query2 = this.knex
            .insert({
                header: summury.summuryHeader,
                body: summury.summuryBody
            })
            .into('summury')
            .returning('id')
            return query2.then(rows=>{
                return Promise.all(
                    rows.map(row=>{
                        let summuryUser = this.knex('entrepneurs').where({"entrepneurs_id": decodeToken.id}).update({"summury":row, "timestamp":"now()"}).returning('id');
                        return summuryUser
                    })
                )
                
            })
            .catch(err => {
                throw new Error(err);
            })

    }

    addP(product){
        var token = product.user
        var decodeToken = jwt.decode(token, config.jwtSecret);
        let query2 = this.knex
            .insert({
                header: product.productHeader,
                body: product.productBody
            })
            .into('product')
            .returning('id')
            return query2.then(rows=>{
                return Promise.all(
                    rows.map(row=>{
                        let productUser = this.knex('entrepneurs').where({"entrepneurs_id": decodeToken.id}).update({"product":row, "timestamp":"now()"}).returning('id');
                        return productUser
                    })
                )
                
            })
            .catch(err => {
                throw new Error(err);
            })

    }
    addAD(advantage){
        var token = advantage.user
        var decodeToken = jwt.decode(token, config.jwtSecret);
        let query2 = this.knex
            .insert({
                header: advantage.advantageHeader,
                body: advantage.advantageBody
            })
            .into('advantage')
            .returning('id')
            return query2.then(rows=>{
                return Promise.all(
                    rows.map(row=>{
                        let productUser = this.knex('entrepneurs').where({"entrepneurs_id": decodeToken.id}).update({"advantage":row, "timestamp":"now()"}).returning('id');
                        return productUser
                    })
                )
                
            })
            .catch(err => {
                throw new Error(err);
            })

    }
    addM(motivation){
        var token = motivation.user
        var decodeToken = jwt.decode(token, config.jwtSecret);
        let query2 = this.knex
            .insert({
                header: motivation.motivationHeader,
                body: motivation.motivationBody
            })
            .into('motivation')
            .returning('id')
            return query2.then(rows=>{
                return Promise.all(
                    rows.map(row=>{
                        let productUser = this.knex('entrepneurs').where({"entrepneurs_id": decodeToken.id}).update({"motivation":row, "timestamp":"now()"}).returning('id');
                        return productUser
                    })
                )
                
            })
            .catch(err => {
                throw new Error(err);
            })
    }
    addT(messege){
        var token = messege.user
        var decodeToken = jwt.decode(token, config.jwtSecret);
        let query2 = this.knex
            .insert({
                header: messege.toInvestorsHeader,
                body: messege.toInvestorsBody
            })
            .into('toInvestors')
            .returning('id')
            return query2.then(rows=>{
                return Promise.all(
                    rows.map(row=>{
                        let productUser = this.knex('entrepneurs').where({"entrepneurs_id": decodeToken.id}).update({"toInvestors":row, "timestamp":"now()"}).returning('id');
                        return productUser
                    })
                )
                
            })
            .catch(err => {
                throw new Error(err);
            })
    }

    async addAB(info){
        var token = info.user
        console.log(info)
        var decodeToken = jwt.decode(token, config.jwtSecret);
        if(decodeToken.id) {
            let users = this.knex.select("about", "target_amount", "minimum_amount", "facebook_url", "linkedin_url").from("entrepneurs").where({"entrepneurs_id": decodeToken.id})
            return await users.then(async (res) => {
                if(res.length > 0){
                    let user = await this.knex.select('about').from('entrepneurs').where({"entrepneurs_id": decodeToken.id}).update({"about": info.aboutBody,  "target_amount": info.targetAmount, "minimum_amount": info.minimumAmount, "linkedin_url": info.linkedin_url, "facebook_url": info.facebook_url, "timestamp":"now()"}).returning('id');
                    return user
                } else {
                    return
                }
            })
        }
    }

    async addUCBL(info){
        var token = info.userInfo
        var decodeToken = jwt.decode(token, config.jwtSecret);
        if(decodeToken.id) {
            let users = this.knex.select("name", "category").from("entrepneurs").where({"entrepneurs_id": decodeToken.id})
            return await users.then(async (res) => {
                if(res.length > 0){
                    let user = await this.knex.select('name', 'category').from('entrepneurs').where({"entrepneurs_id": decodeToken.id}).update({"name": info.username, "category": info.category, "title": info.title, "logo": info.logo, "background_photo": info.bgImg, "timestamp":"now()"}).returning('id');
                    return user
                } else {
                    return
                }
            })
        }
    }

    async addUser(user_id){
        var token = user_id.user
        var decodeToken = jwt.decode(token, config.jwtSecret);
        if (decodeToken.id) {
            let users = this.knex.select('entrepneurs_id').from('entrepneurs').where({"entrepneurs_id": decodeToken.id})
          return await users.then(async (res)=>{
                if (res.length > 0) {
                    let user = null
                    return user
                } else {
                    let  userId = await this.knex('entrepneurs').insert({"entrepneurs_id":decodeToken.id}).returning('id');
                    return userId
                }
          })
        }
    }

    async addUserIn(user_id){
        var token = user_id.user
        var decodeToken = jwt.decode(token, config.jwtSecret);
        if (decodeToken.id) {
            let users = this.knex.select('investors_id').from('investors').where({"investors_id": decodeToken.id})
          return await users.then(async (res)=>{
                if (res.length > 0) {
                    let user = null
                    return user
                } else {
                    let  userId = await this.knex('investors').insert({"investors_id":decodeToken.id, "timestamp":"now()"}).returning('id');
                    return userId
                }
          })
        }
    }

    delete(params){
        var token = params
        var decodeToken = jwt.decode(token, config.jwtSecret);
        let query = this.knex('entrepneurs')
            .where({'entrepneurs_id': decodeToken.id})
            .del()
    return query;
    }

    deleteIn(params){
        var token = params
        var decodeToken = jwt.decode(token, config.jwtSecret);
        let query = this.knex('investors')
            .where({'investors_id': decodeToken.id})
            .del()
    return query;
    }
}


module.exports = Entrepneurs;
