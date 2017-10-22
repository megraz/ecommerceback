import { createConnection, Repository, getConnection } from "typeorm";
import { Category } from "../entities/category";


export class DbCategory {
    private getRepo(): Repository<Category> {
        return getConnection().getRepository(Category);
    }

    getAllCategorys(): Promise<Category[]> {
        return this.getRepo().find();
    }
    getCategoryById(id: number) : Promise<Category> {
        return this.getRepo().findOneById(id);
    }
    addCategory(category: Category): Promise<Category> {
        return this.getRepo().save(category);
    }
    removeCategory(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }

}