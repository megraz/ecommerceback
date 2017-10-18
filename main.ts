import 'reflect-metadata';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import {createConnection} from 'typeorm';

createConnection();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));


app.listen(3000, ()=>console.log('listening on port 3000'));