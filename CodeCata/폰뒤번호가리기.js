function solution(phone_number) {
    // 전화번호의 길이
    const length = phone_number.length;
    
    // 뒷 4자리 제외한 부분을 '*'로 대체하고, 뒷 4자리를 붙임
    const maskedPart = '*'.repeat(length - 4);
    const visiblePart = phone_number.slice(-4);
    const result = maskedPart + visiblePart;
    
    return result;
}