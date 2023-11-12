const os = require("os")

console.log(os.userInfo()) // Informacion de la pc
console.log(os.uptime())  // Tiempo Encendida
console.log(os.platform())  
console.log(os.totalmem())  
console.log(os.freemem())  //memoria libre

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})
