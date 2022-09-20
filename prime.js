function prime(num){
let counter=0;
    for(let i=0;i<=num;i++){
        if(num%i==0){
           counter++;
        }
     }
     if(counter==2){
        return false;
     }
      return true;
}

let answer=prime(13);
if(answer==true){
   console.log("prime");
}
else{
    console.log("Not prime");