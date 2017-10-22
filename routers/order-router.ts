import { Router } from "express";
import { DbOrder } from "../database/db-order";


const db = new DbOrder();


export const routerOrder = Router();

routerOrder.get('/', (req, resp) => {
    db.getAllOrders().then((orders) => resp.json(orders)).catch((error) => resp.status(500).send(error));
});

routerOrder.get('/:id', (req,resp) => {
    db.getOrderById(req.params.id).then((order) => resp.json(order))
    .catch((error) => resp.status(500).send(error));
});

routerOrder.post('/', (req,resp)=> {
    db.addOrder(req.body).then(order => resp.json(order))
    .catch((error) => resp.status(500).send(error));
});

routerOrder.patch('/', (req,resp)=> {
    db.modifyOrder(req.body).then(order => resp.json(order))
    .catch((error) => resp.status(500).send(error));;
});

routerOrder.delete('/:id', (req,resp)=> {
    db.removeOrder(req.params.id).then(order => resp.json(order))
    .catch((error) => resp.status(500).send(error));;
});