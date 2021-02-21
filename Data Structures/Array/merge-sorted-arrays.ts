function mergeSortedArrays(array1: number[], array2: number[]): number[] {
    if (array1.length === 0) {
        return array2;
    } else if (array2.length === 0) {
        return array1;
    };
    const mergedArray: number[] = [];
    let array1Item: number = array1[0];
    let array2Item: number = array2[0];
    let i: number = 1;
    let j: number = 1;
    while ((array1Item === 0 && array2Item === 0) || array1Item || array2Item){
        if(array2Item === undefined || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
   }
   return mergedArray;
};

console.log(mergeSortedArrays([0,1,2,3,4,5,6,7,8,17,23,100], [0, 2,6,10,11,12,19,20,66,92]));