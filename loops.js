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
  if (num>=0){
    console.log(num)
    num = num-1
  }else{
    return "done"
  }
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
