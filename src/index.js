
// You should implement your task here.

module.exports = function towelSort (matrix) 
{
  let c = [];
if((typeof matrix)!== "undefined"){ 
  let x = matrix.length;
for(i=0;i<x;i++)
{
  if(i%2==0)
  {
      odd = matrix[i];
      c.push(odd);
  }
  else if(i%2!==0)
  {
      even = matrix[i].reverse();
      c.push(even);
  }
    if((typeof odd) !== "undefined" && (typeof even) !== "undefined" && (typeof c) == "undefined")
    {
    }
}
} 
else{
  return [];
}
b= c.flat(Infinity);
  return b;
}

