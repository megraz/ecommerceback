import { DbProduct } from "../database/db-product";
import { Router } from "express";


const db = new DbProduct();

export const routerProduct = Router();

routerProduct.get('/', (req, resp) => {
    db.getAllProducts().then((products) => resp.json(products)).catch((error) => resp.status(500).send(error));
});

routerProduct.get('/:id', (req,resp) => {
    db.getProductById(req.params.id).then((product) => resp.json(product))
    .catch((error) => resp.status(500).send(error));
});

routerProduct.post('/', (req,resp)=> {
    db.addProduct(req.body).then(product => resp.json(product))
    .catch((error) => resp.status(500).send(error));
});

routerProduct.patch('/', (req,resp)=> {
    db.modifyProduct(req.body).then(product => resp.json(product))
    .catch((error) => resp.status(500).send(error));;
});

routerProduct.delete('/:id', (req,resp)=> {
    db.removeProduct(req.params.id).then(product => resp.json(product))
    .catch((error) => resp.status(500).send(error));;
});