import { createConnection, Repository, getConnection } from "typeorm";
import { Order } from "../entities/order";




export class DbOrder {
    private getRepo(): Repository<Order> {
        return getConnection().getRepository(Order);
    }

    getAllOrders(): Promise<Order[]> {
        return this.getRepo().find();
    }
    getOrderById(id: number) : Promise<Order> {
        return this.getRepo().findOneById(id);
    }
    addOrder(order: Order): Promise<Order> {
        return this.getRepo().save(order);
    }
    removeOrder(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyOrder(order: Order): Promise<void> {
        return this.getRepo().updateById(order.id,order);
    }
}