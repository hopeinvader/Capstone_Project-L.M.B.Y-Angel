const jwt = require("jwt-simple");
const config = require('../config');
const bcrypt = require('../bcrypt')

class Users {
    constructor(knex){
        this.knex = knex;
    }

    list(){
        let query = this.knex.select('id', 'email', 'password', 'entrepneurs_investors')
        // .where('id', id)
            .from('users')
                return query.then((rows)=>{
                    return rows
                });
    }

    async login(email, password){
        if (email && password) {
            var email = email;
            var password = password;
            let users = this.knex.select('id', 'password', 'email', 'entrepneurs_investors').from('users').where({"email": email})


            return await users.then(async(res)=>{
                if (res.length > 0) {
                        let hashResult = await bcrypt.checkPassword(password, res[0].password);
                        if (res[0].email === email && hashResult === true) {
                            var payload = {
                                id: res[0].id,
                                boolean: res[0].entrepneurs_investors
                            };
                            var token = jwt.encode(payload, config.jwtSecret);
                            var boolean = payload.boolean
                            return {token: token, boolean: boolean}
                        }else if(hashResult === false){
                            let passwordWrong = 'Password is Wrong!'
                            return passwordWrong
                        }    
                } else {
                    let emailWrong = 'Email is Wrong!'
                    return emailWrong    
                }
            })

 



            
        } else {
        }
    }

    async signUp(email, password, customBoolean){
        if (email && password) {
            let users = this.knex('users').where({email: email});
          return await users.then(async (res)=>{
                if (res.length > 0) {
                    let user = null
                    return user
                } else {
                    let hash = await bcrypt.hashPassword(password)
                    let  userId = await this.knex('users').insert({"email":email, "password":hash, "entrepneurs_investors":customBoolean}).returning('id');
                    return userId
                }
        })
        }
    }

    contact(body){
        let user = this.knex('contact')
            .insert({"name": body.name, "email": body.email, "message": body.message, "posted_at": 'now()'}).returning('id')
            return user
    }


}

module.exports = Users;