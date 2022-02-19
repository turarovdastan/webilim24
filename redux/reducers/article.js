import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    articleList: null,
    article: null,
}


const article = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setArticleList(state, action) {
            state.articleList = action.payload
        },
        setArticle(state, action){
            state.article = action.payload;
        }
    }
})

export const {
    setArticleList,
    setArticle
} = article.actions;

export default article.reducer
