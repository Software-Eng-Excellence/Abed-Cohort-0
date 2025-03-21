// SOLID PRINCIPLES:

import logger from "./util/logger";


// S: Single Responsibility Princible(SRP)
// Open Closed Principles (OCP)
// Liskov Substitution Principle (LSP)  
// Interface Segregation Principle (ISP)
// Dependency Inversion Principle (DIP)

export interface Order {
    price: number;
    id: number;
    item: string;
}


export class OrderManagment {
    private orders: Order[] = [];
    constructor(private validator: IValidator, private calculator: ICalculator) {
        logger.debug("OrderManagment instance created");
    }
    getOrders() {
        return this.orders;
    }

    addOrder(item: string, price: number) {
        try {
            const order: Order = { id: this.orders.length + 1, item, price };
            this.validator.validate(order);
            this.orders.push(order);
        } catch (error: any) {
            throw new Error("[OrderManagment] error adding order " + error.message);
        }
    }

    getOrder(id: number) {
        const order = this.getOrders().find(order => order.id === id);
        if (!order) {
            logger.warn(`Order with id ${id} not found`);
        }
        return order;
    }

    getTotalRevenue() {
        return this.calculator.getRevenue(this.orders);
    }
    getAverageBuyPower() {
        return this.calculator.getAverageBuyPower(this.orders);
    }
}

export class PremiumOrderManagment extends OrderManagment {
    getOrder(id: number): Order | undefined {
        console.log("ALRET: Premium order being fetch");
        return super.getOrder(id);
    }
}

interface IValidator {
    validate(order: Order): void;
}

interface IPossibleItems {
    getPossibleItems(): string[];
}

interface ICalculator {
    getRevenue(orders: Order[]): number;
    getAverageBuyPower(orders: Order[]): number;
}


export class Validator implements IValidator {


    constructor(private rules: IValidator[]) {

    }

    validate(order: Order): void {
        this.rules.forEach(rule => rule.validate(order));
    }
}

export class ItemValidator implements IValidator, IPossibleItems {
    getPossibleItems(): string[] {
        return ItemValidator.possibleItems;
    }
    private static possibleItems = [
        "Sponge",
        "Chocolate",
        "Fruit",
        "Red Velvet",
        "Birthday",
        "Carrot",
        "Marble",
        "Coffee",
    ];
    validate(order: Order) {
        if (!ItemValidator.possibleItems.includes(order.item)) {
            throw new Error(`Invalid item. Must be one of: ${ItemValidator.possibleItems.join(", ")}`);
        }
    }
}

export class PriceValidator implements IValidator {
    validate(order: Order) {
        if (order.price <= 0) {
            logger.error(`Price error: ${order.item}`);
            throw new Error("Price must be greater than zero");
        }
    }
}

export class MaxPriceValidator implements IValidator {
    validate(order: Order) {
        if (order.price > 100) {
            throw new Error("Price must be less than 100");
        }
    }
}

export class FinanceCalculator implements ICalculator {
    // calculate total revenue and avarage buy power
    public getRevenue(orders: Order[]) {
        return orders.reduce((total, order) => total + order.price, 0);
    }

    public getAverageBuyPower(orders: Order[]) {
        return orders.length === 0 ? 0 : this.getRevenue(orders) / orders.length;
    }
}
