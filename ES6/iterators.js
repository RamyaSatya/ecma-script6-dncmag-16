//Command to compile this file: traceur --out ES5\iterators.js --script ES6\iterators.js

(function(){

    class Shelf{
        constructor(){
            this.books = [];
        }

        addBooks(...bookNames){
            bookNames.forEach(name => {
                this.books.push(name);
            });
        }

        /*[Symbol.iterator](){
            let obj=this;
            let index = 0;
            return {
                next: function(){
                    var result = {value: undefined, done: true};
                    if(index < obj.books.length){
                        result.value = obj.books[index];
                        result.done=false;
                        index += 1;
                    }
                    return result;
                }
            }
        }*/

        *[Symbol.iterator](){
            for(let i=0;i<this.books.length; i++){
                yield this.books[i];
            }
        }
    }

    let sum=0;
    let numbers=[10, 20, 30, 40, 50];

    let iterator = numbers.values();
    let nextNumber = iterator.next();

    while(!nextNumber.done){
        sum += nextNumber.value;
        nextNumber=iterator.next();
        console.log(nextNumber);
    }
    console.log(sum);

    sum = 0;
    for(let n of numbers){
        sum += n;
    }
    console.log(sum);

    var shelf = new Shelf();
    shelf.addBooks('Programming ASP.NET MVC 5','Getting lost in JavaScript','AngularJS in Action','C# 6: What\'s new in the language' );
    for(let book of shelf){
        console.log(book);
    }
}());
