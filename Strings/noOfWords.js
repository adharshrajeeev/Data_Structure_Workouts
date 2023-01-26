function mostNoOfWords(sentence){
    let s=sentence.trim();
    let count=0
    for(var i=0;i<s.length;i++){
        if(s[i]=== " "){
            count++
        }
    }
   return count+1
}


console.log(mostNoOfWords("alice and bob love leetcode","i think so too","this is great thanks very much"))