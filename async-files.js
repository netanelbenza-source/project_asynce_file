import fs from 'fs'

fs.writeFile('input.txt','Heloo-word','utf8',(err)=> {
    if (err) return console.log(err)
    return console.log("The file write succssefuly")

})

fs.readFile('input.txt','utf8',(err,data) =>{
    if (err) return console.log(`error: ${err}`)
        return console.log(`The data of file is : ${data}`)
})




