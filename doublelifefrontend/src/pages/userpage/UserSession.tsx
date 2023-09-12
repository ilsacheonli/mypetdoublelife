export function isUserLoggedIn() {
    const user = sessionStorage.getItem('user');
    return !!user;
  }
  
  export function logoutUser() {
    // 세션에서 사용자 정보를 삭제합니다.
    sessionStorage.removeItem('user');
    // 이후 필요한 리다이렉션 또는 다른 로그아웃 관련 작업을 수행할 수 있습니다.
  }