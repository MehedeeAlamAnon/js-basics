function welcome(name){
    return function option(menu){
        console.log("Do you like "+menu+" Mr. "+name);
    }
}

welcome("Anon") ("Coffee");