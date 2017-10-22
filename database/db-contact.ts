import { createConnection, getConnection, Repository } from "typeorm";
import { Contact } from "../entities/contact";


export class DbContact {
    private getRepo(): Repository<Contact> {
        return getConnection().getRepository(Contact);
    }

    getAllContacts(): Promise<Contact[]> {
        return this.getRepo().find();
    }
    getContactById(id: number) : Promise<Contact> {
        return this.getRepo().findOneById(id);
    }
    addContact(contact: Contact): Promise<Contact> {
        return this.getRepo().save(contact);
    }
    removeContact(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyContact(contact: Contact): Promise<void> {
        return this.getRepo().updateById(contact.id,contact);
    }

}