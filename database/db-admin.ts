import { createConnection,getConnection, Repository } from "typeorm";
import { Admin } from "../entities/admin";
var sha1 = require('sha1');



export class DbAdmin {
    private getRepo(): Repository<Admin> {
        return getConnection().getRepository(Admin);
    }

    getAllAdmins(): Promise<Admin[]> {
        return this.getRepo().find();
    }
    getAdminById(id: number) : Promise<Admin> {
        return this.getRepo().findOneById(id);
    }
    addAdmin(admin: Admin): Promise<Admin> {
        return this.getRepo().save(admin);
    }
    removeAdmin(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyAdmin(admin: Admin): Promise<void> {
        return this.getRepo().updateById(admin.id,admin);
    }

    getAdminByLogin(pseudo:string, password:string):Admin{
    return
    }

    getAdminByToken(token:string){
        return
    }

}