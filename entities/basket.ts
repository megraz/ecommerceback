import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user";
import { product } from "./product";



@Entity() 
export class Basket {
    @PrimaryGeneratedColumn()
    id: number;
 
    @OneToOne(type => user)
    @JoinColumn()
    user: User;
 
    @ManyToMany( type => product, product => product.baskets)
    products: Product[];
}