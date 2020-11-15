let person={
    name: 'anon',
    age: 27, 
    sleep:function(){
        console.log('hello');
    }
};


//dot notation
console.log(person);

//bracket notation
let selection='age';
person[selection]=28;


console.log(person);