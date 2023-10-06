import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import  experiences  from "../components/Form/Experience/reducers"
import { titlesReducer } from '../components/Form/Experience/reducers';
import  educations  from "../components/Form/Education/reducers";
import  awards  from "../components/Form/Awards/reducers";
import  interests  from "../components/Form/Interests/reducers";
import  skills  from "../components/Form/Skills/reducers";
import projects from '../components/Form/Projects/reducer';

const allreducers = {
    experiences:experiences,
    educations:educations,
    awards:awards,
    interests:interests,
    skills:skills,
    projects: projects,
    title : titlesReducer
};

const rootReducer = combineReducers(allreducers);

const store=configureStore({reducer: rootReducer});

export default store;