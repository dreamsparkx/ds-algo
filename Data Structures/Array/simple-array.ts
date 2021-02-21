const arr: string[] = ['Cat', 'Mouse', 'Dog', 'Parrot'];

//lookup
console.log(arr[1]);    //O(1)

//push
arr.push('Elephant');   //O(1)
console.log(arr);

//pop
arr.pop();  //O(1)
console.log(arr);

arr.unshift('Giraffe');
console.log(arr);