# mypetdoublelife

---

백엔드 합본

- DB 세팅
    - Oracle
    - MyBatis


- 수정 파일
  - DoublelifebackendApplication.java
  - application.properties.xml
  - build.gradle


- 패키지 혹은 java
  - controller
    - BoardController.java
    - MemberController.java
  - repository
    - BoardRepository.java
    - MemberRepository.java
  - service
    - BoardService.java
    - MemberService.java
  - vo
    - BoardVO.java
    - MemberVO.java
    


- resources
  - mybatis-mapper
    - MemberMapper.xml
  - templates
    - SignIn.html
    - SignUp.html
    - MyPage
      - MyPage.html
      - MyPageUpdate.html
    - PetMunity
      - modify.html
      - petmunity.html
      - qna.html
      - trade.html
      - view.html
      - walkingmate.html
      - write.html
    
  

---
(2023-08-22) 

추가/수정된 파일 주석 참고

웹페이지 요청 처리 순서 \
controller -> service -> repository -> mapper.xml -> DB

컨트롤러에 작동하는 테스트 주소 \
http://localhost:8080/signup 입니다.

---

(2023-08-24)

기본 테스트 주소 \
http://localhost:8080/signin \
http://localhost:8080/signup 입니다.

/signin -> /mypage -> /mypage/update -> /mypage \
/signup -> /signin

---


=======
23-08-25  
테스트 가능한 주소 목록  
<http://localhost:8080/petmunity> 펫뮤니티 페이지  
<http://localhost:8080/petmunity/qna> qna 페이지  
<http://localhost:8080/petmunity/trade> 중고거래 페이지  
<http://localhost:8080/petmunity/walkingmate> 산책메이트 페이지  
<http://localhost:8080/petmunity/qna/writePage> 글작성 페이지  
<http://localhost:8080/board/view?bno=3> 상세글 조회 페이지

펫뮤니티 -> qna/중고거래/산책메이트 페이지로 이동 가능합니다.   
글 작성, 수정, 삭제는 qna 게시판에서만 가능합니다. (중고거래, 산책메이트 게시판은 기능 추가 예정)

