import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Basket } from './basket';
import { Author } from './author';
import { Category } from './category';
import { Order } from './order';

@Entity()
export class Product {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    author: string;
 
    @Column()
    name: string;
 
    @Column("texte")
    description: string;

    @Column()
    category: number;

    @Column()
    price: number;
    
    @ManyToOne(type => Category, category => category.products)
    Category: Category;

    @ManyToOne(type => Author, author => author.products)
    Author: Author;
    
    @ManyToMany(type => Basket, basket => basket.products)
    @JoinTable()
    baskets: Category[];

    @ManyToMany(type => Order, order => order.products)
    @JoinTable()
    orders: Order[];
}