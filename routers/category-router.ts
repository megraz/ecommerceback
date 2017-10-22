import { Router } from "express";
import { DbCategory } from "../database/db-category";



const db = new DbCategory();

export const routerCategory = Router();

routerCategory.get('/', (req, resp) => {
    db.getAllCategorys().then((categorys) => resp.json(categorys)).catch((error) => resp.status(500).send(error));
});

routerCategory.get('/:id', (req,resp) => {
    db.getCategoryById(req.params.id).then((category) => resp.json(category))
    .catch((error) => resp.status(500).send(error));
});

routerCategory.post('/', (req,resp)=> {
    db.addCategory(req.body).then(category => resp.json(category))
    .catch((error) => resp.status(500).send(error));
});

routerCategory.delete('/:id', (req,resp)=> {
    db.removeCategory(req.params.id).then(category => resp.json(category))
    .catch((error) => resp.status(500).send(error));;
});