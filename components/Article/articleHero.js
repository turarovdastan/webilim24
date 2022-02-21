import Image from "next/image";
import Img23 from "../../assets/img/Кулпу.png";
import Link from "next/link";
import Img24 from "../../assets/img/profile-circle.png";
import imgFile from "../../assets/img/file-text 1.png";
import CommentList from "../Video/comment/comment-list";
import {useSelector,useDispatch} from "react-redux";
import { useState } from "react";
import api from "../axiosAPI/api";
import { useRouter } from "next/router";
import {setArticle} from "../../redux/reducers/article";

import ReactPlayer from "react-player";
import CourseHeroVideoLoader from "../ContentLoaders/courseHeroVideoLoader";

export default function ArticleHero() {
    const article = useSelector(state => state.article.article)
    const access = useSelector(state => state.main.access_token)
    const refresh = useSelector(state => state.main.refresh_token)
    const userID = useSelector(state => state.main.user_id)

    const isAuth = access && refresh && userID
    const [comment,setComment] = useState('')


    const dispatch = useDispatch()

    const router = useRouter()
    const postComment = () => {
        const data = {
            article: router.query.id,
            author: userID,
            text: comment
          }
        api.post('ru/api/v1/add-article-comment/',data,{headers: {
        'Authorization': `Basic ${access}` 
        }}).then(data=>{
            setComment('')
            api.get(`ru/api/v1/article-detail/${id}`).then(data=>{
                dispatch(setArticle(data.data))
            })
        }).catch(error=>{
            console.log(error);
        })

    }


    const renderComments = (article_comments) => {
        const comments = article_comments;
        return comments.map(comment => {
            const {id} = comment
            return (
                <CommentList key={id} comment={comment}/>
            )
        })
    }
    const getTime = (date) => {
        const current = new Date()
        const created = new Date(date)
        const timestamp = current - created
        console.log(timestamp);
        let logic = timestamp > 3600 ? timestamp > 86400 ? `${new Date(new Date(timestamp).getDay() - current.getDay()).getDate() } дней` : `${new Date(timestamp).getHours()} час.` : `${new Date(timestamp).getMinutes()} мин.`  
        return  <p className="invDesc text-[14px]">{ logic }</p>
    }
    return (
        <section  className="pt-[40px]">
            <div className="container">
                <div className="Investment   py-2 relative ">
                    <div className="flex items-center">
                        <div className="w-[25px] h-[30px] relative mx-4"><Image src={imgFile} layout="fill"/></div>
                        <p className="invDesc text-[14px]">Статья</p>
                        <p className="invDesc text-[14px]">{article && article.created_at}</p>
                        {article && getTime(article.created_at)}
                    </div>

                    <div className='mt-10 '>
                        <h1 className="invTitle mb-2 lg:text-[36px] md:text-[30px] text-[24px] md:w-[70%]">
                         {article && article.title}   
                        </h1>
                        <p className="invDesc2 md:text-[18px]">
                        {article && article.subtitle}   
                        </p>
                        {article && (
                            <div className="flex flex-col md:flex-row md:items-center py-4 my-6">
                                <div className="w-[60px] h-[60px] relative overflow-hidden flex justify-center items-center rounded-[40%]">
                                    <Image src={article.author.image} layout="fill"/>
                                </div>
                                <div className="md:ml-4  md:-mt-2">
                                    <h1 className="font-bold text-white  text-[16px]">{article.author.full_name}</h1>
                                    <p className="invDesc2  text-[16px]" dangerouslySetInnerHTML={{__html: article.author.short_bio}}></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {!isAuth ? (<div
                    className="   flex flex-col md:flex-row  bg-white md:items-center md:p-10 p-4 rounded-[15px] justify-between">
                    <div className="flex flex-col md:flex-row md:items-center">
                        <div className="relative w-[55px] h-[60px]">
                            <Image src={Img23} layout="fill"/>
                        </div>
                        <div className="md:ml-8">
                            <h1 className="text-[#2C3E50] sm:text-[24px] text-[17px] font-bold">Оформите подписку,<br/>
                                чтобы посмотреть полную версию</h1>
                            <p className="text-[17px] text-[#9099A3] font-light ">Вы уже подписчик?<span>
                                <Link href="/login">
                                <a className="text-[17px] border-b-2 border-[#2C3E50] text-[#2C3E50] font-light  mx-2">Авторизуйтесь</a>
                            </Link>
                            </span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn">Получить доступ за 19,00$</button>
                    </div>
                </div> ) : 
                article ? (
                            <ReactPlayer
                                controls url={article.video}
                                className="border "
                                width="100%"
                                height="60vh"
                                />
                        ) : (
                            Array(1).fill(0).map((_, i) => (
                                <CourseHeroVideoLoader key={i}/>
                            ))
                )}
                <div>
                    <div className="elips"/>
                    <h1 className="invTitle text-[36px]">
                        Комментарии
                    </h1>
                    {!isAuth ? (<div
                        className="my-4 Investment_block flex flex-col md:flex-row md:items-center md:p-10 p-3 rounded-[15px] ">
                        <div className="relative w-[60px] h-[60px]">
                            <Image src={Img24} layout="fill"/>
                        </div>
                        <div className="md:ml-8 ">
                            <h1 className="font-bold text-white text-[24px] my-2">Вы не авторизованы!</h1>
                            <p className="text-[17px] flex flex-col flex-row text-[#9099A3] font-light">Чтобы оставить
                                комментарий, пожалуйста
                                <span><Link href="/login"><a
                                    className="text-[17px] border-b-2 border-[white] text-[white] font-light  md:mx-2 ">aвторизуйтесь</a></Link></span>
                                или
                                <span>
                                    <Link href="#"><a
                                    className="text-[17px] border-b-2 border-[white] text-[white] font-light  md:mx-2">зарегистрируйтесь</a></Link></span>
                            </p>
                        </div>
                    </div>) : (
                        <div className="container-comment">
                            <textarea onChange={(e)=>setComment(e.target.value)} placeholder="Ваш  комментарий"></textarea>
                            <button className="btn" onClick={postComment}>отправить</button>
                        </div>
                    )
                    }
                    <div className="py-4 my-4 relative w-[100%]">
                        {article && article.article_comments ?(
                                <>
                                    {renderComments(article.article_comments)}
                                </>

                        ): (
                            <h1>loading</h1>
                        )}
                    </div>
                </div>

                {/*<div>*/}
                {/*    <h1 className="invTitle text-[36px]  my-14">Читайте также</h1>*/}
                {/*    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 gap-6 mb-12 ">*/}
                {/*        {article.slice(0, 2).map(item => {*/}
                {/*            return (*/}
                {/*                <Link href={"/"}>*/}
                {/*                    <div className="relative  bg-white art-card cursor-pointer   ">*/}
                {/*                        <div className="backround_img">*/}
                {/*                        </div>*/}
                {/*                        <span className="art-card_status">{item.status}</span>*/}
                {/*                        <div className="flex mb-3">*/}
                {/*                            <Image src={DocsImg}/>*/}
                {/*                            <h5 className="art-card_title text-[#9099A3] font-normal leading-5 text-[15px] md:text-[17px]  lg:text-[18px] ml-2">{item.cardCategory}</h5>*/}
                {/*                        </div>*/}
                {/*                        <h1 className="art-card_title   font-bold leading-7 text-[#2C3E50]  text-[16px] md:text-[18px]  lg:text-[20px]  mb-3">{item.cardTitle}</h1>*/}
                {/*                        <p className="art-card_title  font-bold text-[#9099A3] text-base leading-4 mb-3 text-[15px] md:text-[16px]  lg:text-[18px]">*/}
                {/*                            {item.cardDesc}*/}
                {/*                        </p>*/}
                {/*                        <div className="mb-3">*/}
                {/*                            <span*/}
                {/*                                className="art-card_title  text-[#9099A3] leading-5 font-normal   text-[14px]  lg:text-[16px]">26-окт.  2021</span>*/}
                {/*                            <span*/}
                {/*                                className="art-card_title  text-[#9099A3] leading-5 font-normal  text-[14px] lg:text-[16px] ml-2">{item.cardNew}</span>*/}
                {/*                            <span*/}
                {/*                                className="text-[#9099A3] leading-5 font-normal  text-[14px]  lg:text-[16px]"> ≈ 7 мин</span>*/}
                {/*                        </div>*/}
                {/*                        <div className="art-line mb-3"/>*/}
                {/*                        <div className="flex">*/}
                {/*                            <Image src={Logo}/>*/}
                {/*                            <div className="ml-2">*/}
                {/*                                <h3 className="art-card_title  text-[#9099A3]  text-[16px] md:text-[17px]  lg:text-[18px] font-bold leading-normal">*/}
                {/*                                    Команда Акылбеков Кубаныча*/}
                {/*                                </h3>*/}
                {/*                                <p className="art-card_title  text-[#9099A3] leading-5  text-[14px] md:text-[16px]  lg:text-[16px]">AkylbekySaid.com</p>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </Link>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>

    )
}