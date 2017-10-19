import 'reflect-metadata';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import {routerUser} from './routers/user-router';
import {createConnection} from 'typeorm';

createConnection();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use('/user', routerUser)
app.listen(3000, ()=>console.log('listening on port 3000'));