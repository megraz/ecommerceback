import { Router } from "express";
import { DbAuthor } from "../database/db-author";



const db = new DbAuthor();
export const routerAuthor = Router();

routerAuthor.get('/', (req, resp) => {
    db.getAllAuthors().then((authors) => resp.json(authors)).catch((error) => resp.status(500).send(error));
});

routerAuthor.get('/:id', (req,resp) => {
    db.getAuthorById(req.params.id).then((author) => resp.json(author))
    .catch((error) => resp.status(500).send(error));
});

routerAuthor.post('/', (req,resp)=> {
    db.addAuthor(req.body).then(author => resp.json(author))
    .catch((error) => resp.status(500).send(error));
});

routerAuthor.patch('/', (req, resp)=>{
    db.modifyAuthor(req.body).then((author)=>resp.json(author))
    .catch((error)=>resp.status(500).send(error))
})

routerAuthor.delete('/:id', (req,resp)=> {
    db.removeAuthor(req.params.id).then(author => resp.json(author))
    .catch((error) => resp.status(500).send(error));;
});