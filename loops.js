function forLoop(array){
  for (i = 0; i<25;i++){
    if (i == 0) {
      array.push("I am 1 strange loop.")
    } else{
      array.push(`I am ${i} strange loops.`)
    }
  }
}

function whileLoop(num){
  if (num>-1){
    console.log(num)
    num = num-1
  }else{
    return "Done"
  }
}

function doWhileLoop(array){
  do{
    array.splice(0,1)
  }
  while (maybeTrue());
}

function maybeTrue(){
  return Math.random() >= 0.5
}
