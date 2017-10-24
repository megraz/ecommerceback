import 'reflect-metadata';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import {routerUser} from './routers/user-router';
import {createConnection} from 'typeorm';
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

app.use('/user', routerUser);
app.use('/product', routerProduct);
app.use('/order', routerOrder);
app.use('/contact', routerContact);
app.use('/category', routerCategory);
app.use('/author', routerAuthor);
app.use('/admin', routerAdmin);


app.listen(3000, ()=>console.log('listening on port 3000'));