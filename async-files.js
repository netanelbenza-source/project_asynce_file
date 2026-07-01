import fs from 'fs'

fs.writeFile('input.txt','Heloo-word','utf8',(err)=> {
    if (err) return console.log(err)
    return console.log("The file write succssefuly")

})

fs.readFile('input.txt')