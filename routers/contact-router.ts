import { Router } from "express";
import { DbContact } from "../database/db-contact";


const db = new DbContact();

export const routerContact = Router();

routerContact.get('/', (req, resp) => {
    db.getAllContacts().then((contacts) => resp.json(contacts)).catch((error) => resp.status(500).send(error));
});

routerContact.get('/:id', (req,resp) => {
    db.getContactById(req.params.id).then((contact) => resp.json(contact))
    .catch((error) => resp.status(500).send(error));
});

routerContact.post('/', (req,resp)=> {
    db.addContact(req.body).then(contact => resp.json(contact))
    .catch((error) => resp.status(500).send(error));
});

routerContact.patch('/', (req,resp)=> {
    db.modifyContact(req.body).then(contact => resp.json(contact))
    .catch((error) => resp.status(500).send(error));;
});

routerContact.delete('/:id', (req,resp)=> {
    db.removeContact(req.params.id).then(contact => resp.json(contact))
    .catch((error) => resp.status(500).send(error));;
});