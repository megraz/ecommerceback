import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Basket } from './basket';
import { author } from './author';
import { category } from './category';
import { order } from './order';

@Entity()
export class product {
 
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
    
    @ManyToOne(type => category, category => category.products)
    category: category;

    @ManyToOne(type => author, author => author.products)
    author: author;
    
    @ManyToMany(type => Basket, basket => basket.products)
    @JoinTable()
    baskets: category;

    @ManyToMany(type => order, order => order.products)
    @JoinTable()
    orders: order[];
}