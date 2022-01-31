import express from 'express';
const app = express()

const port = 3000;
import xrm from '../src/xrm';


app.get("/", getFirstContactData);
function getFirstContactData(req, res, next) {
    console.log(xrm);
   res.send("Test"); 
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))