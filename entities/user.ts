import {Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne} from 'typeorm';
// import { Basket } from './basket';
import { Contact } from './contact';
import { Order } from './order';

@Entity()
export class User {
    
    constructor(pseudo:string, email:string, mdp:string){
        this.pseudo = pseudo;
        this.email = email;
        this.mdp = mdp;
}
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;
 
    @Column()
    lastName: string;
 
    @Column()
    address: number;

    @Column()
    phone: number;

    @Column()
    email: string;

    @Column()
    pseudo: string;

    @Column()
    mdp: string;

    @Column("text")
    token: string;

    @Column("date")
    dateinscription: Date;

    @OneToMany( type => Contact, contact => contact.user)
    contact: Contact[];

    // @OneToOne( type => Basket, basket => basket.user)
    // basket: Basket[];

    @OneToMany( type => Order, order => order.user)
    orders: Order[];
 
}