import { Router } from "express";
import { DbUser } from "../database/db-user";


const db = new DbUser();

export const routerUser = Router();

routerUser.get('/', (req, resp) => {
    db.getAllUsers().then((users) => resp.json(users)).catch((error) => resp.status(500).send(error));
});

routerUser.get('/:id', (req,resp) => {
    db.getUserById(req.params.id).then((user) => resp.json(user))
    .catch((error) => resp.status(500).send(error));
});

routerUser.post('/', (req,resp)=> {
    db.addUser(req.body).then(user => resp.json(user))
    .catch((error) => resp.status(500).send(error));
});

routerUser.patch('/', (req,resp)=> {
    db.modifyUser(req.body).then(user => resp.json(user))
    .catch((error) => resp.status(500).send(error));;
});

routerUser.delete('/:id', (req,resp)=> {
    db.removeUser(req.params.id).then(user => resp.json(user))
    .catch((error) => resp.status(500).send(error));;
});