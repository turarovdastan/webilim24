import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper'
import main from "./reducers/main";
import masterClass from "./reducers/master-class";
import course from "./reducers/course";
import mentor from "./reducers/mentor";
import webinar from "./reducers/webinar";
import article from "./reducers/article";
import faq from "./reducers/faq";



const store = configureStore({
    reducer: {
        main,
        course,
        masterClass,
        webinar,
        mentor,
        article,
        faq
    }, middleware:[]
})
const makeStore = () => store
export const wrapper = createWrapper(makeStore)


