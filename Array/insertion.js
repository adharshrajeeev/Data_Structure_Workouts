var value=[1,3,4,5,5,6];


var thirdMax =  function(value) {
    const mySet=new Set();
    for(var i=0;i<value.length;i++){

        mySet.add(value[i]);
    }
    var thirdHigh=Array.from(mySet)
    return thirdHigh;
};

var third=thirdMax(value);

console.log(third)