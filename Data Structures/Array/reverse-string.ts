function reverse(str: string) {
    if (!(typeof str === 'string')) {
        throw new Error(`Invalid Type`);
    }
    let reverseStr: string = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + `${str[i]}`;
    }
    return reverseStr;
}

console.log(reverse('testing'));
