import { createConnection, getConnection, Repository } from "typeorm";
import { product } from "../entities/product";



export class DbProduct {
    private getRepo(): Repository<product> {
        return getConnection().getRepository(product);
    }

    getAllUsers(): Promise<product[]> {
        return this.getRepo().find();
    }
    getUserById(id: number) : Promise<product> {
        return this.getRepo().findOneById(id);
    }
    addUser(user: product): Promise<product> {
        return this.getRepo().save(product);
    }
    removeUser(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyUser(user: product): Promise<void> {
        return this.getRepo().updateById(product.id,product);
    }

}