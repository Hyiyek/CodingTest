function solution(price, money, count) {
  // 필요한 총 금액 계산
  let totalCost = 0;
  for (let i = 1; i <= count; i++) {
    totalCost += price * i;
  }

  // 부족한 금액 계산
  const shortage = totalCost - money;

  // 부족한 금액이 0보다 작으면 0을 반환, 그렇지 않으면 부족한 금액 반환
  return shortage > 0 ? shortage : 0;
}

// 예시 사용
const price = 100; // 원래 이용료
const money = 250; // 가지고 있는 금액
const count = 4; // 이용할 횟수

const result = solution(price, money, count);
console.log(result); // 결과 출력
