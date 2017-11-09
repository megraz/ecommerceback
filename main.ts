import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser'
import {createConnection} from 'typeorm';
import {User} from './entities/user';
import {Product} from './entities/product';
import {routerUser} from './routers/user-router';
import { routerProduct } from './routers/product-router';
import { routerOrder } from './routers/order-router';
import { routerContact } from './routers/contact-router';
import { routerCategory } from './routers/category-router';
import { routerAuthor } from './routers/author-router';
import { routerAdmin } from './routers/admin-router';

createConnection();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});

app.use('/user', routerUser);
app.use('/product', routerProduct);
app.use('/order', routerOrder);
app.use('/contact', routerContact);
app.use('/category', routerCategory);
app.use('/author', routerAuthor);
app.use('/admin', routerAdmin);


app.listen(3000, ()=>console.log('listening on port 3000'));