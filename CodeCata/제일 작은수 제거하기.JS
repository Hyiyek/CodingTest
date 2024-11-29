function solution(arr) {
  // 배열이 비어있거나 길이가 1인 경우
  if (arr.length === 0 || arr.length === 1) {
    return [-1];
  }

  // 배열에서 가장 작은 수 찾기
  const min = Math.min(...arr);

  // 가장 작은 수를 제거한 배열 생성
  const result = arr.filter((num) => num !== min);

  // 결과 배열이 비어있으면 [-1] 리턴
  return result.length === 0 ? [-1] : result;
}
