function solution(numbers) {
  const sums = new Set(); // 중복을 피하기 위해 Set 사용

  // 두 개의 서로 다른 인덱스의 수를 더하는 이중 루프
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sums.add(numbers[i] + numbers[j]); // 합을 Set에 추가
    }
  }

  // Set을 배열로 변환하고 정렬
  return Array.from(sums).sort((a, b) => a - b);
}

// 예시
console.log(solution([2, 1, 3, 4, 1])); // [2, 3, 4, 5, 6, 7]
console.log(solution([5, 0, 2, 7])); // [2, 5, 7, 9, 12]
