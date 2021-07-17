function parseCount(value) {
    let check = Number.parseInt(value);
    if (check !== check) {
        throw new Error("Невалидное значение");
    }
    return check;
}

function validateCount (value) {
    try{
        let result = parseCount(value);
        return result;
    } catch(error) {
        return error;
    }
}


// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter(){
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }
    getArea() {
        let halfPerimeter = 0.5 *(this.a + this.b + this.c);
        let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        area = +area.toFixed(3);
        return area;
    }
}


function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c);
    } catch(error) {
        let fail = {
            getPerimeter(){
                return ("Ошибка! Треугольник не существует");
            },
            getArea(){
                return ("Ошибка! Треугольник не существует");
            }
        };
        return fail;
    }

}

// const trig = new Triangle(1, 3, 100);
// console.log(trig);
// console.log(trig.getPerimeter());
// console.log(trig.getArea());
// console.log(getTriangle(2, 4, 50));
// console.log(getTriangle(2, 4, 111).getArea());




