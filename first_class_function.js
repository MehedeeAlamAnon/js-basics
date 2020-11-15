function hello(age){
    console.log('I have passed through argument and my age is: ' + age);
}

function callMyName(name,callback){
    let myAge=27;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr. ' +name);
}

callMyName('Anon',hello);