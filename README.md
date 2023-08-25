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
