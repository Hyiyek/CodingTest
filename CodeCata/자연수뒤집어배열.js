function reverseDigits(n) {
    const result = [];
    const str = n.toString();

    for (let i = str.length - 1; i >= 0; i--) {
        result.push(Number(str[i])); 
    }

    return result;
}

const result = reverseDigits(12345);
console.log(result);


// str.length = 배열의 길이에서 -1 즉 i = 4;
// 4 가 0보다 크면은 i 가 줄어든다
// 빈배열 만든공간에 푸쉬한다 str을