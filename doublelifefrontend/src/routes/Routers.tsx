import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/aboutus/AboutUs';
import Login from '../pages/login/Login';

import MyPet from '../pages/mypet/MyPet';
import MyPetFeed from '../pages/mypet/MyPetFeed';
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

export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <AboutUs /> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/mypet' element={ <MyPet/> }/>
                <Route path='/mypetfeed' element={ <MyPetFeed/> }/>
                <Route path='/mypetmemo' element={ <MyPetMemo/> }/>
                <Route path='/petmaphospital' element={ <PetMapHospital/> }/>
                <Route path='/petmapsalon' element={ <PetMapSalon/> }/>
                <Route path='/petmunity' element={ <Petmunity/> }>
                    <Route path='detail' element={ <PetmunityDetail/> }></Route>
                    <Route path='qna' element={ <PetmunityQna/> }></Route>
                    <Route path='trade' element={ <PetmunityTrade/> }></Route>
                    <Route path='walkingmate' element={ <PetmunityWalkingMate/> }></Route>
                    <Route path='writepage' element={ <PetmunityWritePage/> }></Route>
                </Route>
                <Route path='/petstival' element={ <Petstival/> }/>
                <Route path='/petstivaldetail' element={ <PetstivalDetail/> }/>
                <Route path='/signup' element={ <Signup/> }/>
                <Route path='/signupfinish' element={ <SignupFinish/> }/>
                <Route path='/userpage' element={ <UserPage/> }/>
            </Routes>
        </Router>
    );
}