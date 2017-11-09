import { Author } from "../entities/author";
import { createConnection, getConnection, Repository } from "typeorm";


export class DbAuthor {
    private getRepo(): Repository<Author> {
        return getConnection().getRepository(Author);
    }

    getAllAuthors():Promise<Author[]> {
        return this.getRepo().find();
    }
    getAuthorById(id:number) : Promise<Author> {
        return this.getRepo().findOneById(id);
    }
    addAuthor(author:Author): Promise<Author> {
        return this.getRepo().save(author);
    }
    removeAuthor(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyAuthor(author:Author):Promise<void>{
        return this.getRepo().updateById(author.id, author);
}

}