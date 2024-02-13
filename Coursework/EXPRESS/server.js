const express = require(`express`);
const app = express();
const session = require(`express-session`);
const bodyParser = require(`body-parser`)

const port = 2024;

app.set(`view engine`, `ejs`)

app.use(express.static(__dirname + `/public`))
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: "your-secret-key", // Change this to a secure random string
    resave: false,
    saveUninitialized: true
}))


app.get("/", (req, res) => {
    res.render(`index`); 
})

app.get("/login", (req, res) => {
    res.render(`login`);
})

app.get("/", (req, res) =>{

})


// POST 

app.post(`/login`, (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;

    const data = {
        Username,
        Password
    }

    console.log(data)
    req.session.data = data;
    res.render("index", {data : data})
    // res.redirect("/");

})

app.listen(port, () => {
    console.log(`Local server running on port ${port}`);
    console.log(`Listening on port ${port}...`);
})

