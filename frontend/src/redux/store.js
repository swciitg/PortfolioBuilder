import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import  experiences  from "../components/Form/Experience/reducers";
import  educations  from "../components/Form/Education/reducers";
import  awards  from "../components/Form/Awards/reducers";
import  interests  from "../components/Form/Interests/reducers";
import  skills  from "../components/Form/Skills/reducers";
const allreducers = {
    experiences:experiences,
    educations:educations,
    awards:awards,
    interests:interests,
    skills:skills,
};

const rootReducer = combineReducers(allreducers);

const store=configureStore({reducer: rootReducer});

export default store;