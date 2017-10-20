import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user";
import { Product } from "./product";



@Entity() 
export class Basket {
    @PrimaryGeneratedColumn()
    id: number;
 
    @OneToOne(type => User)
    @JoinColumn()
    user: User;
 
    @ManyToMany( type => Product, product => product.baskets)
    products: Product[];
}