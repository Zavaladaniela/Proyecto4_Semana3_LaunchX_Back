const User = require ('./../models/user')

class userService{
    static create(id,username,name){
        return new User (id,username,name,"Sin bio")
    }

    static getInfo(user){
        return Object.values(user)
    }

    static updateUserUsername (user,username){
        user.setUsername = username
    }

    static getAllUsernames (users){
        //Uso de map para recorrer los elementos de una lista y crear una nueva lista
        /*Arrow function and explicit return
            const modifiedArray = arr.map((element,index) => element);
        s*/
        const userUsernames = users.map(user => user.username)
        return userUsernames
    }
}

module.exports = userService