class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(mark) {
        if (mark < 0) {
            this._state = 0;
        } else if (mark >= 100) {
            this._state = 100;
        } else {
            this._state = mark;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, );
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

//Задача 2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
            return this.books;
        }
    }
    findBookBy(type, value) {
        let book = null;
        for (let item of this.books) {
            if (item[type] === value) {
                book = item;
            }
        }
        return book;
    }
    giveBookByName(bookName) {
        let book = null;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                book = this.books.splice(i, 1);
                return book[i];
            }
        }
        return book;
    } //Пытался сделать через for..of, но не получилось((
}

//Задача 3

class Student {
    constructor(name) {
        this.name = name;
        this.subject = {};
    }
    addMark(mark, subjectName) {
        if ((mark < 0) || (mark > 5) || (typeof mark !== 'number')) {
            console.log('Сообщение об ошибке: Пожалуйста, проверьте правильность введенных данных.');
        } else if (this.subject[subjectName] === undefined) {
            this.subject[subjectName] = [mark];
        } else {
            this.subject[subjectName].push(mark);
        }
        return this.subject[subjectName];
    }
    getAverageBySubject(subjectName) {
        if (this.subject[subjectName] === undefined) {
            return console.log("Предмет не существует");
        }
        const check = this.subject[subjectName];
        let sum = 0;
        let avg = null;
        for (const item of check) {
            sum += item;
        }
        avg = sum / check.length;
        this.subject[subjectName].avg = avg;
        return avg;
    }
    getAverage() {
        let avg = 0;
        let allSubject;
        const len = Object.keys(this.subject);
        for (let key in this.subject) {
            avg += this.getAverageBySubject(key);
        }
        allSubject = avg / len.length;
        this.avgForAllSubj = allSubject;
        return allSubject;
    }

    exclude(reason) {
        delete this.subject;
        this.excluded = reason;
    }
}


const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(2, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry");
student.getAverageBySubject("algebra");
student.getAverage();
console.log(student);







