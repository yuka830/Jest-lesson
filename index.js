export function add(a, b) {
  return a + b;
}


//Jest-lessons

//Question1
export function addString(a, b) {
  if(typeof a === "string" || typeof b === "string"){
    return a + b;
  } else {
    return -1
  }
}

//Question2
export function toNumber(str) {
  return parseInt(str, 10)
}

//Question3
const fruit = ["orange", "apple", "peach"];

export function filterOrange(arr){
  return arr.filter((e) => e === "orange")
}
