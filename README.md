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
### 변경 사항
- REST 방식으로 주소 변경  
(http://localhost:8080/petmunity/qna?1 -> http://localhost:8080/petmunity/qna/1)

---
