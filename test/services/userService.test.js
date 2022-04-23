const userService = require ('./../../app/services/userService')

//REQ 1: Crea un nuevo usuario con lo definido en el sprint anterior
// agregando una clase llamada USERSERVICE
// debera tener un metodo create, que se puede usar sin instanciar (static method)
// recibe solo el id, username y name
describe ("Tests for userServices", () =>{
    test ("1. Create a new user using the userService", () =>{
        const user = userService.create (1,"danielazavala","dany")
        expect (user.username).toBe("danielazavala")
        expect (user.name).toBe("dany")
        expect (user.id).toBe(1)
        expect (user.bio).not.toBeUndefined()

    })
})

// REQ 2: Prueba de unidad
//Agregar metodo estatico en userService llamado getInfo
test ("2. Get all user data in a list", () =>{
    const user = userService.create (1, "danielazavala","dany")
    const userInfoList = userService.getInfo (user)
    expect (userInfoList [0]).toBe (1)
    expect (userInfoList [1]).toBe ("danielazavala")
    expect (userInfoList [2]).toBe ("dany")
    expect (userInfoList [3]).toBe ("Sin bio")
})

//REQ 3:
test ("3. Update username", () =>{
    const user = userService.create(1,"danielazavala","dany")
    userService.updateUserUsername(user,"danielaz")
    expect (user.username).toBe("danielaz")
})

// REQ 4
test ("4. Given a list os users give me the list of username",  () => {
    const user1 = userService.create(1,"danielazavala","dany")
    const user2 = userService.create(1,"danielazavala2","dany")
    const user3 = userService.create(1,"danielazavala3","dany")
    const usernames = userService.getAllUsernames([user1,user2,user3])
    expect (usernames).toContain("danielazavala")
    expect (usernames).toContain("danielazavala2")
    expect (usernames).toContain("danielazavala3")

})