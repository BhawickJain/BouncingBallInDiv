        
        // Separation of Concerns. 
        /* You don't store your kitchen stuff in the bedroom */ 
        /*, same things here, keep javascript separate */
        
        
        // Comment
        console.log("Hello World! Hello friends :D");

        // use let instead of var as that is best practice

        let name;

        name = "Bhawick!";
        console.log("Hello " + name);

        // We can declare constants so reassigning 
        // it will cause a read only error.
        const interestRate = 0.3;
        // interestRate = 1;
        // console.log(interestRate);

        // Two Types: Primitives and Reference Types.
        // Primitives: String, Number, Undefined, Null, Boolean, Symbol.
        // Null is use to explicitly say that the variable is empty.
        

        // JS is a Dynamic Language: as Variables can be changed in runtime.
        // JS treats all numbers as numbers there are no doubles and ints.

        // Reference Types: Object, Arrays, Functions
        
        // Example of an object
        let person = {
            age: 3,
            name: 'Todd'
        };

        console.log(person.age);
        // Another way, this is useful when the name of 
        // target property is not known until runtime.
        console.log(person['name']);

        // Example of adding and accessing new properties in runtime.
        let newProperty = 'jklafs';
        person[newProperty] = 'random words';
        console.log('This is a new property: ' + person[newProperty]);

        // Parameter is a variable being supplied to a function
        // An Argument is the value the parameter take at the
        // time of invoking the function.








    