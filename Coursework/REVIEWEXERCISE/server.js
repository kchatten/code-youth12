const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const fs = require("fs");

const port = 3000;

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))


app.get("/", (req, res) => {
    res.render(`index`); 
})

app.post("/submitreview", (req, res) =>{

    data = req.body;
    console.log(data);

    fs.readdir(__dirname, (err,files) =>{
        if (err){
            throw err;
        }
        if (files.includes("database.json"))
        {
            console.log(`A database already exists, appending...`)
            AppendFile("database.json", data)

        }
        else {
            WriteFile("database.json", data)
        }
    })  
    res.render("submitreview")
})

app.listen(port, () => {
        console.log(`Server is running on ${port}`);
})


// THIS ASYNCHRONOUS FUNCTION WRITES data OBJECTS TO file PATH. IT RETURNS A PROMISE THAT IT WILL RESOLVE OR REJECT. 
// IT THEN PROCEEDS TO ATTEMPT TO WRITE THE FILE TO THE ROOT DIRECTORY USING __dirname AND ADDS A FILE WITH STRINGIFIED DATA NAMED AFTER ITSELF USING `/${file}`
// IF THERE IS AN ERROR WHILE WRITING IT RETURNS THE PROMISE OF REJECT.
// IF IT IS SUCCESSFUL IT RETURNS THE PROMISE OF RESOLVE.

async function WriteFile(file, data){
    return new Promise((resolve, reject)=>{
        fs.writeFile(__dirname + `/${file}`, JSON.stringify(data), (err)=>{
            if(err){
                reject(err);
            }
            resolve(true);
        })
    })
}

async function AppendFile(file, data){
    return new Promise((resolve, reject)=>{
        fs.appendFile(__dirname + `/${file}`, JSON.stringify(data), (err)=>{
            if(err){
                reject(err);
            }
            resolve(true);
        })
    })
}

// TODO: Add the 1 - 5 rating input to the form.