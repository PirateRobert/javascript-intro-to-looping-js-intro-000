function forLoop(array){
  for (i = 0; i<25;i++){
    if (i == 0) {
      array.unshift("I am 1 strange loop.")
    } else{
      array.unshift(`I am ${i} strange loops.`)
    }
  }
}

function whileLoop(n){
  while (n>0){
    console.log(n);
    n = n-1
  }
  return("done")
}

function doWhileLoop(array){
  do{
    array.splice(0,1)
  }
  while (maybeTrue() && array.length > 0);
  return array
}

function maybeTrue(){
  return Math.random() >= 0.5
}
