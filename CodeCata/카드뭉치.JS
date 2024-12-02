function solution(cards1, cards2, goal) {
  let i = 0; // cards1의 인덱스
  let j = 0; // cards2의 인덱스

  for (let word of goal) {
    if (i < cards1.length && cards1[i] === word) {
      i++; // cards1에서 단어를 사용
    } else if (j < cards2.length && cards2[j] === word) {
      j++; // cards2에서 단어를 사용
    } else {
      return "No"; // 단어를 만들 수 없는 경우
    }
  }

  return "Yes"; // 모든 단어를 성공적으로 만들 수 있는 경우
}

// 예시 사용
const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];
console.log(solution(cards1, cards2, goal)); // "Yes"
