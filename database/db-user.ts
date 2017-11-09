import { createConnection, getConnection, Repository } from "typeorm";
import { User } from "../entities/user";
var sha1 = require('sha1');


export class DbUser {
    private getRepo(): Repository<User> {
        return getConnection().getRepository(User);
    }

    getAllUsers(): Promise<User[]> {
        return this.getRepo().find();
    }
    getUserById(id: number) : Promise<User> {
        return this.getRepo().findOneById(id);
    }
    addUser(user: User): Promise<User> {
        return this.getRepo().save(user);
    }
    removeUser(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyUser(user: User): Promise<void> {
        return this.getRepo().updateById(user.id,user);
    }

//     getUserByLogin(pseudo:string, mdp:string):Promise<User>{
//         return this.getRepo().findOne({pseudo:pseudo, mdp:mdp})
//     }

//     getUserByToken(token:string):Promise<User>{
//         return this.getRepo().findOne({token:token})
// }

}