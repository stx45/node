const fs = require("fs")

// codigo Sincrono

// const first = fs.readFileSync("./data/first.txt", "utf-8") //lee el archivo especificado y lo guarda
// const second = fs.readFileSync("./data/second.txt")

// console.log(first)
// console.log(second.toString())

// const saludo = "Hola, como estas"

// fs.writeFileSync("./data/four.txt", saludo, {
//     flag: 'a'//añade texto a un archivo ya existente
// })

//Codigo asincrono

fs.readFile("./data/first.txt", (error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data.toString())
    }

    fs.readFile("./data/second.txt", (error,data)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(data.toString())
        }

        fs.writeFile("./data/newfile.txt", "archivo creado desde fs", (err, data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data)
            }
            
        })

    })

})
