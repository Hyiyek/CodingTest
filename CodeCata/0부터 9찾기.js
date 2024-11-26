function solution(numbers) {
    let sum = 0; // 
    const foundNumbers = new Set(numbers); 

    
    for (let i = 0; i <= 9; i++) {
        if (!foundNumbers.has(i)) {
            sum += i;
        }
    }

    return sum; 
}