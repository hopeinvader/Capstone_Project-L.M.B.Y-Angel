const jwt = require("jwt-simple");
const config = require('../config');


class Investors {
    constructor(knex){
        this.knex = knex;
    }

    list(){
        let query = this.knex.select()
            .from('investors')
            .orderBy('timestamp', 'desc');
                return query
    }

    getList(params){
        let query = this.knex.select().from('investors')
            .where({"investors_id":params.id})
            return query
    }

    async addAB(info){
        var token = info.user
        var decodeToken = jwt.decode(token, config.jwtSecret);
        if(decodeToken.id) {
            let users = this.knex.select("about", "maximum_amount", "minimum_amount").from("investors").where({"investors_id": decodeToken.id})
            return await users.then(async (res) => {
                if(res.length > 0){
                    let user = await this.knex.select('about').from('investors').where({"investors_id": decodeToken.id}).update({"about": info.aboutBody,  "maximum_amount": info.targetAmount, "minimum_amount": info.minimumAmount, "expertise": info.summuryBody, "timestamp":"now()"}).returning('id');
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
            let users = this.knex.select().from("investors").where({"investors_id": decodeToken.id})
            return await users.then( (res) => {
                if(res.length > 0){
                    let user = this.knex.select('name', 'category').from('investors').where({"investors_id": decodeToken.id}).update({"name": info.username, "logo": info.logo, "background_photo": info.bgImg, "timestamp":"now()"}).returning('id');
                    return user
                } else {
                    return
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
        let query = this.knex('investors')
            .where({'investors_id': decodeToken.id})
            .del()
        return query;
    }
}







module.exports = Investors;
