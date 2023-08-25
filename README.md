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
    - petHospitalController.java
    - petHospitalTestController.java
  - repository
    - BoardRepository.java
    - HospitalRepository.java
    - MemberRepository.java
  - service
    - BoardService.java
    - MemberService.java
    - PetHospitalService.java
    - PetHospitalServiceImpl.java
  - vo
    - BoardVO.java
    - MemberVO.java
    - PetHospitalVO.java


- resources
  - mybatis-mapper
    - boardMapper.xml
    - MemberMapper.xml
    - PetHospitalMapper.xml
  - templates
    - FindPetHospital
      - findpethospital.html
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
    - SignIn.html
    - SignUp.html
    

---

(2023-08-22) 

추가/수정된 파일 주석 참고

웹페이지 요청 처리 순서 \
controller -> service -> repository -> mapper.xml -> DB

---

============== 2023-08-25 ==============

백엔드 통일

MyPage
-

테스트 주소 \
http://localhost:8080/signin \
http://localhost:8080/signup 입니다.

/signin -> /mypage -> /mypage/update -> /mypage \
/signup -> /signin

---

PetMunity 
-

테스트 가능한 주소 목록  
<http://localhost:8080/petmunity> 펫뮤니티 페이지  
<http://localhost:8080/petmunity/qna> qna 페이지  
<http://localhost:8080/petmunity/trade> 중고거래 페이지  
<http://localhost:8080/petmunity/walkingmate> 산책메이트 페이지  
<http://localhost:8080/petmunity/qna/writePage> 글작성 페이지  
<http://localhost:8080/board/view?bno=3> 상세글 조회 페이지

펫뮤니티 -> qna/중고거래/산책메이트 페이지로 이동 가능합니다.   
글 작성, 수정, 삭제는 qna 게시판에서만 가능합니다. (중고거래, 산책메이트 게시판은 기능 추가 예정)



---

Findpethospital
-
 
테스트주소 \
http://localhost:8080/findpethospital 입니다.

