import { getConnection, Repository } from "typeorm";
import { Admin } from "../entities/admin";



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
}