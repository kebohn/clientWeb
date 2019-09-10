export class Bubble {
    private x: number;
    private y: number;
    readonly id: number;

    public constructor(rowCounter:number, width: number, height: number, radius:number) {
        this.x = this.generateRandomNumber(width, radius);
        this.y = this.generateRandomNumber(height, radius);
        this.id = rowCounter;
    }

    public generateRandomNumber(value:number, radius:number): number {
        return Math.floor(Math.random() * (value - (radius*4))) + (radius*2);
    }

    get XValue (): number {
        return this.x;
    }

    set XValue (value: number) {
        this.x = value;
    }

    get YValue (): number {
        return this.y;
    }

    set YValue (value: number) {
        this.y = value;
    }
}