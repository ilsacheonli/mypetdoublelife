마이펫의 이중생활
=================
![image](https://github.com/ilsacheonli/mypetdoublelife/assets/117848278/81c2b54b-9540-4989-b394-08fe21ee15f4)
</br></br></br>

  
1.:dog:프로젝트 소개
----------------------
### 마이펫의 이중생활이란?
#### 사용자들이 반려동물 관련 정보를 쉽게 얻고, 다른 사람들과 소통하며, 편리하게 반려동물의 기록을 관리할 수 있는 복합서비스입니다.
</br>

### 기획의도

#### 배경 및 필요성
- 반려인 인구 증가 및 반려동물 시장의 성장
- 반려동물 관련 서비스에 대한 사용자 요구의 증가

#### 문제 상황 정의
- 건강 관리의 어려움
- 동물 관련 시설 정보 부족
- 소통의 부재

#### 기대효과
- 반려동물 건강 증진
- 시설 정보 접근 용이성
- 지식 공유와 커뮤니티 형성
- 반려동물 산업 활성화
</br></br></br>

2.:cat:개발 도구
-----------------
### Language
|구분|사용 언어|
|----|----|
|Frontend|<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>|
|Backend|<img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=OpenJDK&logoColor=white"/>|
</br>

### Development Environment
|구분|설명|
|----|----|
|Server|<img src="https://img.shields.io/badge/apachetomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white"/>|
|DBMS|<img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=Oracle&logoColor=white"/>|
|Framework|<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/> <img src="https://img.shields.io/badge/mybatis-26241f?style=for-the-badge&logo=mybatis&logoColor=white"/>|
</br>

### Tool
|구분|설명|
|----|----|
|Editor|<img src="https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white"/>|
|Build/Template Engine|<img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"/> <img src="https://img.shields.io/badge/thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white"/>|
|Collaboratvie Software|<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"/> <img src="https://img.shields.io/badge/zoom-0B5CFF?style=for-the-badge&logo=zoom&logoColor=white"/> <img src="https://img.shields.io/badge/googledrive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/> <img src="https://img.shields.io/badge/ALLO-000000?style=for-the-badge&logo=allo&logoColor=white"/>|
</br>

### API/Library
|구분|설명|
|----|----|
|API|kakao developers, 공공데이터포털|
|Library|FullCalendar, <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>|
</br>



# mypetdoublelife

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
(2023-09-11)

feed기능과 관리기록기능 추가와 다른파일 코드정리

관리기록 매핑주소와 필요한 값 

- 날짜별 할일 출력 주소
  - Get , /mytodo/{doDate} -> doDate:날짜(string) 
- 할일 추가 주소
  - Post, /mytodo/insert -> form [ doDate:날짜(string), doContent:내용(string) ]
- 할일 수정 주소
  - Post, /mytodo/update -> form [ doNo:할일 번호(string), doDate:날짜(string), doContent:내용(string) ]
- 할일 삭제 주소
  - Post, /mytodo/delete/{doNo} -> doNo:할일 번호(string)


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
