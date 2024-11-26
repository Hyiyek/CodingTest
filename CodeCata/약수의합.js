function solution(n) {
    let total = 0;
    // 1부터 n까지 반복하여 약수를 찾음
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {  // i가 n의 약수인지 확인
            total += i;
            console.log(total);     // 약수일 경우 total에 더함
        }
    }
    return total;  // 약수의 합을 리턴
}
const n = 12; // 예시로 12를 사용
const result = solution(n);
console.log(`약수의 합: ${result}`); // 결과 출력