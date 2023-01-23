
const cars = ["Saab", "Volvo", "BMW","Banana", "Orange", "Apple", "Mango"];


function search(value){
    for(var i=0;i<cars.length;i++){
        if(cars[i]===value){
          
            return   console.log(`item Found at ${i} th Position`);
        }
    }
    return console.log("Item not found")
}


search("Banana")