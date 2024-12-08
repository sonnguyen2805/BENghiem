abstract class Shape{
    abstract calculateArea(): number;
}

class Rectangle extends Shape{
    private width: number;
    private height: number;

    constructor(width: number, height: number){
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}


class Circle extends Shape{
    private radius: number;

    constructor(r: number){
        super();
        this.radius = r;
    }
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const main  = ()=>{
    const shapes: Shape[] = [
        new Rectangle(5, 10),
        new Circle(2)
    ]
    for(var val of shapes){
        console.log(`Dien tich hinh ${val.calculateArea().toFixed(2)}`);
    }
}


main();