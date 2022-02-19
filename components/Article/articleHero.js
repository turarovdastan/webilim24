import Image from "next/image";
import Img23 from "../../assets/img/Кулпу.png";
import Link from "next/link";
import Img24 from "../../assets/img/profile-circle.png";
import imgFile from "../../assets/img/file-text 1.png";
import Img21 from "../../assets/img/To_be_youself 1.png";

import {useSelector} from "react-redux";


export default function ArticleHero() {
    const article = useSelector(state => state.article.article)

    return (
        <section  className="pt-[40px]">
            <div className="container">
                <div className="Investment   py-2 relative ">
                    <div className="flex items-center">
                        <div className="w-[25px] h-[30px] relative mx-4"><Image src={imgFile} layout="fill"/></div>
                        <p className="invDesc text-[14px]">Статья</p>
                        <p className="invDesc text-[14px]">26-окт. 2021</p>
                        <p className="invDesc text-[14px]">Новое = 7 мин</p>
                    </div>

                    <div className='mt-10 '>
                        <h1 className="invTitle mb-2 lg:text-[36px] md:text-[30px] text-[24px] md:w-[70%]">
                            Как определить инвестиционные риски?
                            ТОП советов для их снижения</h1>
                        <p className="invDesc2 md:text-[18px]">
                            Какие факторы указывают на проблемные проекты?
                        </p>
                        <div className="flex flex-col md:flex-row md:items-center py-4 my-6">
                            <div className="w-[60px] h-[60px] relative overflow-hidden flex justify-center items-center rounded-[40%]">
                                <Image src={Img21} layout="fill"/>
                            </div>
                            <div className="md:ml-4  md:-mt-2">
                                <h1 className="font-bold text-white  text-[16px]">Дмитрий Карпиловский</h1>
                                <p className="invDesc2  text-[16px]">Идейный вдохновитель и co-founder УкрИнвестКлуб</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="   flex flex-col md:flex-row  bg-white md:items-center md:p-10 p-4 rounded-[15px] justify-between">
                    <div className="flex flex-col md:flex-row md:items-center">
                        <div className="relative w-[55px] h-[60px]">
                            <Image src={Img23} layout="fill"/>
                        </div>
                        <div className="md:ml-8">
                            <h1 className="text-[#2C3E50] sm:text-[24px] text-[17px] font-bold">Оформите подписку,<br/>
                                чтобы посмотреть полную версию</h1>
                            <p className="text-[17px] text-[#9099A3] font-light ">Вы уже подписчик?<span>
                                <Link href="#">
                                <a className="text-[17px] border-b-2 border-[#2C3E50] text-[#2C3E50] font-light  mx-2">Авторизуйтесь</a>
                            </Link>
                            </span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn">Получить доступ за 19,00$</button>
                    </div>
                </div>
                <div>
                    <div className="elips"/>
                    <h1 className="invTitle text-[36px]">
                        Комментарии
                    </h1>
                    <div
                        className="my-4 Investment_block flex flex-col md:flex-row md:items-center md:p-10 p-3 rounded-[15px] ">
                        <div className="relative w-[60px] h-[60px]">
                            <Image src={Img24} layout="fill"/>
                        </div>
                        <div className="md:ml-8 ">
                            <h1 className="font-bold text-white text-[24px] my-2">Вы не авторизованы!</h1>
                            <p className="text-[17px] flex flex-col flex-row text-[#9099A3] font-light">Чтобы оставить
                                комментарий, пожалуйста
                                <span><Link href="#"><a
                                    className="text-[17px] border-b-2 border-[white] text-[white] font-light  md:mx-2 ">aвторизуйтесь</a></Link></span>
                                или
                                <span>
                                    <Link href="#"><a
                                    className="text-[17px] border-b-2 border-[white] text-[white] font-light  md:mx-2">зарегистрируйтесь</a></Link></span>
                            </p>
                        </div>
                    </div>
                    <div className="py-4 my-4 relative w-[100%] h-[300px] overflow-scroll">
                        {article ?(
                                <>
                                    <div className="my-4 py-4 flex flex-col md:flex-row items-start">
                                        <div
                                            className="w-[40px] h-[40px] relative overflow-hidden flex justify-center items-center rounded-[40%]">
                                            <Image src={article.image} layout="fill"/>
                                        </div>
                                        <div className="md:ml-6">
                                            <div className="flex flex-col md:flex-row md:items-center">
                                                <h1 className="text-white text-[18px ] font-bold">{article.title}</h1>
                                                <p className="text-[#9099A3] md:ml-8 text-[14px] font-light">{article.subtitle}</p>
                                            </div>
                                            <p className="text-[white] mt-2 text-[14px] font-light">{article.description}</p>
                                        </div>
                                    </div>
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