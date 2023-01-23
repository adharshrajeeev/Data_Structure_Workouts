
const cars = ["Saab", "Volvo", "BMW","Banana", "Orange", "Apple", "Mango"];


function search(value){
    for(var i=0;i<cars.length;i++){
        if(cars[i]===value){
            console.log(`item Found at ${i} th Position`);
            return true
        }
    }
    return console.log("Item not found")
}


search("Banana")