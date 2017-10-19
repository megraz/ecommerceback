import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { product } from "./product";


@Entity()

export class author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany( type => product, product => product.author)
    products: product[];

}