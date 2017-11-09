import { createConnection, Repository, getConnection } from "typeorm";
import { Category } from "../entities/category";
import { Author } from "../entities/author";


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
    modifyCategory(cat:Category):Promise<void>{
        return this.getRepo().updateById(cat.id, cat);
}

}