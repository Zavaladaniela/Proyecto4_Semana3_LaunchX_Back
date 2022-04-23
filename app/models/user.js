
class User{
    constructor (id,username,name,bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }

    get getUsername(){
        return this.username
    }
    get getbio(){
        return this.bio

    }
    get getdateCreated (){
        return this.dateCreated
    }
    get getlastUpdate(){
        return this.lastUpdate
    }
    set setUsername (newUserName){
        this.username = newUserName
    }
    set setBio(newBio){
        this.bio = newBio
    }
    

}

module.exports = User