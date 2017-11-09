import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user";
import { Product } from "./product";
import { Category } from "./category";



@Entity()

export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ref: string;

    @Column()
    dateorder: string;

    @ManyToOne(type => User, user => user.orders)
    user: User;

    @ManyToOne(type => Category, category => category.products)
    category: Category;

    @ManyToMany(type => Product, product => product.orders)
    @JoinTable()
    products: Product[];

}