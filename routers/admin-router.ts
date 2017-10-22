import { Router } from "express";
import { DbAdmin } from "../database/db-admin";


const db = new DbAdmin();

export const routerAdmin = Router();

routerAdmin.get('/', (req, resp) => {
    db.getAllAdmins().then((admins) => resp.json(admins)).catch((error) => resp.status(500).send(error));
});

routerAdmin.get('/:id', (req,resp) => {
    db.getAdminById(req.params.id).then((admin) => resp.json(admin))
    .catch((error) => resp.status(500).send(error));
});