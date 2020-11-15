//object literals

const person={
    height:10,
    weight:5,
    show:function(){
        console.log(this.height +' '+ this.weight);
    }
}

person.show();


//Factory Function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    }
}


const circle=createCircle(1);
circle.draw();

//Constructor Function

function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('Constructor Function');
    }
}

const another=new Circle(3);
another.draw();