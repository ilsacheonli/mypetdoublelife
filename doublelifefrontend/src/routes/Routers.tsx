import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/aboutus/AboutUs';
import Login from 'pages/login/Login';

import MyPet from '../pages/mypet/MyPet';
import MyPetFeed from '../pages/mypet/MyPetFeed';
import MyPetFeedWrite from '../pages/mypet/MyPetFeedWrite';
import MyPetFeedView from '../pages/mypet/MyPetFeedView';
import MyPetFeedViewUpdate from '../pages/mypet/MyPetFeedViewUpdate'
import MyPetMemo from '../pages/mypet/MyPetMemo';

import PetMapHospital from 'pages/petmap/PetMapHospital';
import PetMapSalon from 'pages/petmap/PetMapSalon';

import PetmunityDetail from 'pages/petmunity/PetmunityDetail';
import PetmunityQna from 'pages/petmunity/PetmunityQna';
import PetmunityTrade from 'pages/petmunity/PetmunityTrade';
import PetmunityWalkingMate from 'pages/petmunity/PetmunityWalkingMate';
import PetmunityWritePage from 'pages/petmunity/PetmunityWritePage';

import Petstival from 'pages/petstival/Petstival';
import PetstivalDetail from 'pages/petstival/PetstivalDetail';

import Signup from 'pages/signup/Signup';
import SignupFinish from 'pages/signup/SignupFinish';

import UserPage from 'pages/userpage/UserPage';
import Petmunity from 'pages/petmunity/Petmunity';
import PetMap from 'pages/petmap/PetMap';
import Errorpage from 'pages/errorpage/Errorpage';
import Errorpagefive from 'pages/errorpage/Errorpagefive';

import PetmunityModify from 'pages/petmunity/PetmunityModify';
import PetmunityWritePageTrade from 'pages/petmunity/PetmunityWritePageTrade';
import PetmunityWritePageWalkingMate from 'pages/petmunity/PetmunityWritePageWalkingMate';

export const Routers = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<AboutUs />} />
				<Route path='/login' element={<Login />} />
				<Route path='/mypet' element={<MyPet />} />
				<Route path='/mypetfeed' element={<MyPetFeed />} />
				<Route path='/mypetfeedwrite' element={<MyPetFeedWrite />} />
				<Route path='/myfeed/:feedNo' element={<MyPetFeedView />} />
				<Route path='/myfeed/update/:feedNo' element={<MyPetFeedViewUpdate />} />
				<Route path='/mypetmemo' element={<MyPetMemo />} />
				<Route path='/petmap' element={<PetMap />}>
					<Route path='hospital' element={<PetMapHospital />} />
					<Route path='salon' element={<PetMapSalon />} />
				</Route>
				<Route path='/petmunity' element={<Petmunity />}>

					<Route path='qna' element={<PetmunityQna />}></Route>
					<Route path='trade' element={<PetmunityTrade />}></Route>
					<Route path='walkingmate' element={<PetmunityWalkingMate />}></Route>
					<Route path='writepage' element={<PetmunityWritePage />}></Route>
					<Route path='writepage2' element={<PetmunityWritePageTrade />}></Route>
					<Route path='writepage3' element={<PetmunityWritePageWalkingMate />}></Route>
				</Route>
				<Route path='/board/view/:id' element={<PetmunityDetail />}></Route>
				<Route path='/board/modify/:id' element={<PetmunityModify />}></Route>
				<Route path='/petstival' element={<Petstival />} />
				<Route path='/petstivaldetail' element={<PetstivalDetail />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/signupfinish' element={<SignupFinish />} />
				<Route path='/userpage' element={<UserPage />} />
                 {/* 404 에러 페이지 */}
                <Route path="*" element={<Errorpage/>} />
                
                {/* 500 에러 페이지 */}
                <Route path="/500" element={<Errorpagefive/>} />
                  {/* 500 에러가 발생하면 /500 페이지로 이동이 왜 안돼?..........?ㅠㅠㅠㅠ */}
                
			</Routes>
		</Router>

	);
}