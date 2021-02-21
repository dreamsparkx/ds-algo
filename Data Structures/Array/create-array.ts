export class CustomArray {
    length: number;
    data: {
        [index: number]: any;
    };
    constructor() {
        this.data = {};
        this.length = 0;
    }
    get(index: number): any {
        return this.data[index];
    }
    push(item: any): number {
        this.data[this.length] = item;
        this.length = this.length + 1;
        return this.length;
    }
    pop(): any {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length = this.length - 1;
        return lastItem;
    }
    delete(index: number) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    private shiftItems(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length = this.length - 1;
    }
};

const newArray = new CustomArray();
newArray.push('hi');
newArray.push('how');
newArray.push('are');
newArray.push('you');
newArray.push('?');
newArray.pop();
newArray.delete(0);
console.log(newArray)