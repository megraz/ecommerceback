import { createConnection, getConnection, Repository } from "typeorm";
import { Product } from "../entities/product";



export class DbProduct {
    private getRepo(): Repository<Product> {
        return getConnection().getRepository(Product);
    }

    getAllProducts(): Promise<Product[]> {
        return this.getRepo().find();
    }
    getProductById(id: number) : Promise<Product> {
        return this.getRepo().findOneById(id);
    }
    addProduct(product: Product): Promise<Product> {
        return this.getRepo().save(product);
    }
    removeProduct(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyProduct(product: Product): Promise<void> {
        return this.getRepo().updateById(product.id,product);
    }

}