import HomeLayout from "../../components/HomeLayout";
// import Faq from "../../components/Home/FAQ/FAQ";
import {useDispatch, useSelector} from "react-redux";
import api from "../../components/axiosAPI/api";
import {useEffect} from "react";
import {useRouter} from "next/router";
import ArticleItem from "../../components/Article/articleItem";
import {setArticle, setArticleList} from "../../redux/reducers/article";
import ArticleHero from "../../components/Article/articleHero";


export default function Article() {
    const dispatch = useDispatch()
    const router = useRouter()
    const fetchArticle = async (id) => {
        dispatch(setArticle(null))
        const {data} = await api.get(`/ru/api//v1/article-detail/${id}`)
        dispatch(setArticleList(data))
    }

    useEffect(() => {
        if (router.isReady === false) {
            return;
        }
        fetchArticle(router.query.id);
    }, [router.isReady, router.query]);
    const data = useSelector(state => state.article.article)

    console.log(data)

    return (
        <HomeLayout>
            <ArticleHero/>
        </HomeLayout>
    )
}