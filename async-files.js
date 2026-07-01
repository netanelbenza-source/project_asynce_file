import fs from 'fs/promises'

// fs.writeFile('input.txt','Heloo-word','utf8',(err)=> {
//     if (err) return console.log(err)
//     return console.log("The file write succssefuly")

// })

// fs.readFile('input.txt','utf8',(err,data) =>{
//     if (err) return console.log(`error: ${err}`)
//         return console.log(`The data of file is : ${data}`)
// })


// fs.readFile('input.txt','utf8',(err,data) =>{
//     if (err) return console.log(`error: ${err}`)
//     const toapper = data.toUpperCase()
//     fs.writeFile('output-upper.txt',toapper,'utf-8',(err)=>{
//         if (err) return console.log(`error :${err}`)
//             console.log("Everything ended successfully")
//     })   
 
    
// })

// fs.readFile('input.txt','utf8')
// .then((data) => console.log(`The data of file is : ${data}`))
// .catch(err => console.log(`error:${err}`))


// fs.readFile('input.txt','utf8')
// .then((data) =>{
//     const upeerData = data.toUpperCase()
//     return fs.writeFile('output-upper.txt',upeerData)
// })
// .then(()=> console.log("Everything ended successfully"))
// .catch(err => console.log(`error:${err}`))



Promise.all([fs.readFile('input.txt','utf8'),fs.readFile('output-upper.txt','utf8')])
.then(response => console.log(response[0].length , response[1].length))
.catch(err => console.log(`error:${err}`))





