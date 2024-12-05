function solution(food) {
  let leftSide = "";
  let rightSide = "";

  // 각 음식의 양을 반으로 나누어 왼쪽과 오른쪽에 추가
  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2); // 각 음식의 양을 2로 나누기
    leftSide += i.toString().repeat(count); // 왼쪽 선수의 음식
    rightSide = i.toString().repeat(count) + rightSide; // 오른쪽 선수의 음식
  }

  // 왼쪽과 오른쪽을 합치고 물을 추가
  return leftSide + "0" + rightSide;
}

// 예시 사용
const food = [0, 3, 4, 6];
console.log(solution(food)); // "1223330333221"
