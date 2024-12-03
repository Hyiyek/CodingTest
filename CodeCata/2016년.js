function solution(a, b) {
  // 2016년 각 월의 일수 (1월부터 12월까지)
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 2016년 1월 1일은 금요일 (FRI)
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // 1월 1일부터 a월 b일까지의 총 일수 계산
  let totalDays = 0;

  // a월 이전의 모든 월의 일수를 더함
  for (let month = 0; month < a - 1; month++) {
    totalDays += daysInMonth[month];
  }

  // a월의 b일을 더함
  totalDays += b;

  // 2016년 1월 1일이 금요일이므로, 금요일(5)에서 totalDays를 더한 후 7로 나눈 나머지를 구함
  const dayOfWeekIndex = (5 + totalDays) % 7;

  // 해당 인덱스에 맞는 요일 반환
  return daysOfWeek[dayOfWeekIndex];
}

// 예시
console.log(solution(5, 24)); // "TUE"
