import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { product } from "./product";



@Entity()

export class category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => product, product => product.category)
    products: product[];
}

