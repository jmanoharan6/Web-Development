const express = require("express");
const arrayMod = require("./module/arrayDataModule");
const cors = require("cors")
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.engine(".hbs", exphbs({
    extname: ".hbs"
}));

app.set("view engine", ".hbs");

// handling forms
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.urlencoded({extended: true}))

// handling json
//app.use(bodyParser.json());
app.use(express.json());

// CORS
app.use(cors());

// Single Page

app.get("/", (req,res)=>{
    res.render("index", {layout: false});
});

// CREATE 

app.post("/api/names", (req,res)=>{
    arrayMod.addName(req.body);
    res.json({message: `data added successfully`});
});

// READ

app.get("/api/names", (req,res)=>{
    res.json(arrayMod.getAllNames());
});

app.get("/api/names/:index", (req,res)=>{
    res.json(arrayMod.getNameByIndex(req.params.index));
});

// UPDATE

app.put("/api/names/:index", (req,res)=>{
    arrayMod.updateNameByIndex(req.params.index,req.body);
    res.json({message: `name at index ${req.params.index} updated`});
});

// DELETE

app.delete("/api/names/:index", (req,res)=>{
    arrayMod.deleteNameByIndex(req.params.index);
    res.json({message: `name at index ${req.params.index} removed`})
});

app.listen(HTTP_PORT, ()=>{
    console.log(`server listening on: ${HTTP_PORT}`);
})