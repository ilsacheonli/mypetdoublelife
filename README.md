<<<<<<< HEAD
# mypetdoublelife

백업

---

## 프론트엔드 합본

### npm start

    npm start 로 페이지 시작

### 라이브러리

#### styled-components

    npm install styled-components

#### fullcalendar

    npm install fullcalendar
    npm install --save @fullcalendar/react @fullcalendar/daygrid
    npm install --save "@fullcalendar/interaction"

#### react-router-dom

    npm install react-router-dom --save

### 트리구조(수정예정)

    doublelifefrontend
    ┣ 📂public
    ┗ 📜index.html
    ┣ 📂src
    ┣ 📂component
    ┃ ┣ 📜Mypetcalendar.tsx
    ┃ ┣ 📜Mypetfeed.tsx
    ┃ ┣ 📜Mypetlist.tsx
    ┃ ┣ 📜Mypetlistcreate.tsx
    ┃ ┣ 📜Mypetlistitem.tsx
    ┃ ┣ 📜Mypetprofile.tsx
    ┃ ┣ 📜Mypetrecord.tsx
    ┃ ┣ 📜mypetstyled.ts
    ┃ ┣ 📜Mypetswiper.tsx
    ┃ ┣ 📜Mypetteb.tsx
    ┃ ┣ 📜types.ts
    ┣ 📂components
    ┃ ┣ 📜App.tsx
    ┃ ┣ 📜Footer.tsx
    ┃ ┣ 📜Header.tsx
    ┃ ┣ 📜LinkItems.ts
    ┣ 📂img
    ┣ 📂pages
    ┃ ┣ 📂aboutus
    ┃ ┃ ┣ 📜aboutus.style.ts
    ┃ ┃ ┗ 📜AboutUs.tsx
    ┃ ┣ 📂login
    ┃ ┃ ┣ 📜login.style.ts
    ┃ ┃ ┣ 📜Login.tsx
    ┃ ┣ 📂mypet
    ┃ ┃ ┣ 📜mypet.style.ts
    ┃ ┃ ┣ 📜MyPet.tsx
    ┃ ┃ ┣ 📜MyPetFeed.tsx
    ┃ ┃ ┣ 📜MyPetMemo.tsx
    ┃ ┣ 📂petmap
    ┃ ┃ ┣ 📜petmap.style.ts
    ┃ ┃ ┣ 📜PetMap.tsx
    ┃ ┃ ┣ 📜PetMapContainer.tsx
    ┃ ┃ ┣ 📜PetMapHospital.tsx
    ┃ ┃ ┣ 📜PetMapSalon.tsx
    ┃ ┃ ┣ 📜PetMapSearch.tsx
    ┃ ┣ 📂petmunity
    ┃ ┃ ┣ 📜Dropdown.tsx
    ┃ ┃ ┣ 📜petmunity.style.ts
    ┃ ┃ ┣ 📜Petmunity.tsx
    ┃ ┃ ┣ 📜petmunitydetail.style.ts
    ┃ ┃ ┣ 📜PetmunityDetail.tsx
    ┃ ┃ ┣ 📜PetmunityQna.tsx
    ┃ ┃ ┣ 📜PetmunityTrade.tsx
    ┃ ┃ ┣ 📜PetmunityWalkingMate.tsx
    ┃ ┃ ┣ 📜petmuinitywrite.style.ts
    ┃ ┃ ┣ 📜PetmunityWritePage.tsx
    ┃ ┃ ┣ 📜SearchForm.tsx
    ┃ ┣ 📂petstival
    ┃ ┃ ┣ 📜petstival.style.ts
    ┃ ┃ ┣ 📜Petstival.tsx
    ┃ ┃ ┣ 📜PetstivalDetail.tsx
    ┃ ┣ 📂signup
    ┃ ┃ ┣ 📜signup.style.ts
    ┃ ┃ ┣ 📜Signup.tsx
    ┃ ┃ ┣ 📜SignupFinish.tsx
    ┃ ┣ 📂userpage
    ┃ ┃ ┣ 📜userpage.style.ts
    ┃ ┃ ┣ 📜UserPage.tsx
    ┣ 📂routes
    ┃ ┣ 📜Routers.tsx
    ┣ 📜App.css
    ┣ 📜GlobalStyle.ts
    ┣ 📜Mypet.tsx
    ┗ 📜index.tsx
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

MyPet
---
(2023-08-29)

member 삭제 추가

pet 테이블 생성 (개인 오라클) \
pet 템플릿(임시), mapper, 
  vo, repository, service, controller 추가 

pet 템플릿(임시), controller 수정중

---
(2023-08-30)

pet 테이블 crud 기능 추가

---
(2023-08-31)

/mypet \
pet 테이블 crud 기능 수정 완료

---

=======
>>>>>>> 3987f781262ccfec81f19d94096b25ae94f22f3d
PetMunity 
-
### (23-08-25)  

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
### (23-09-04)

### 추가 사항
- qna, 중고거래, 산책메이트 페이징  
- 글 작성 시 첨부 파일 추가 (현재는 추가만 가능, 조회 기능 추가할 예정)  
파일 추가 전에 저장될 경로를 로컬 환경에서 생성해야 합니다. (기본 경로 -> C:\img)
### 수정 사항
- REST 방식으로 주소 변경  
(http://localhost:8080/petmunity/qna?1 -> http://localhost:8080/petmunity/qna/1)

---
### (23-09-05)
### 추가 사항
- 좋아요 버튼 추가
### 수정 사항
- 글 삭제 후 목록 페이지에서 글번호가 이어지도록 변경
---
### (23-09-06)
### 추가 사항
- 게시글 상세 화면 단일 이미지 조회
- 글 작성, 수정, 삭제 모든 게시판에서 가능
### 테스트 주소
펫뮤니티 홈페이지  
http://localhost:8080/petmunity  
qna 목록 페이지  
http://localhost:8080/petmunity/qna/1   
중고거래 목록 페이지  
http://localhost:8080/petmunity/trade/1  
산책메이트 목록 페이지  
http://localhost:8080/petmunity/walkingmate/1  
글 상세 보기 페이지  
http://localhost:8080/petmunity/qna/view/1  
qna 글작성 페이지  
http://localhost:8080/petmunity/qna/writePage  
중고거래 글작성 페이지  
http://localhost:8080/petmunity/trade/writePage  
산책메이트 글작성 페이지  
http://localhost:8080/petmunity/walkingmate/writePage  
글 수정 페이지  
http://localhost:8080/petmunity/qna/modify/1 