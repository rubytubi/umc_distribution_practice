export const response = ({isSuccess, code, message}, result) => {
  return {
    isSuccess: isSuccess,  // API 요청 성공 여부 (true, false 값)
        code: code,  // API응답에 대한 상태 코드. (200, 404, 500 등)
        message: message,  // API 응답에 대한 간단한 설명이나 메세지 포함.
                           // (클라이언트가 요청한 작업 결과, 오류 메세지 등)
        result: result  // API 요청 본문(body) 데이터 포함 (사용자 프로필 정보,
                        // 검색 결과 등)
  }
};