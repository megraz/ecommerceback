import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Basket } from './basket';
import { contact } from './contact';
import { order } from './order';

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
    email: number;

    @Column()
    pseudo: string;

    @Column()
    mdp: string;

    @Column("date")
    dateinscription: Date;

    @OneToMany( type => contact, contact => contact.user)
    contact: contact[];

    @OnetoOne( type => Basket, basket => basket.user)
    basket: Basket[];

    @OneToMany( type => order, order => order.user)
    orders: order[];
 
}