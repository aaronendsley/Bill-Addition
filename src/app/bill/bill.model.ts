export class Bill {
    title: string;
    amount: number;

    constructor(title: string, amount: number) {
        this.title = title;
        this.amount = Number(amount.toFixed(2));
    }


}