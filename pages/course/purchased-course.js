import HomeLayout from "../../components/HomeLayout";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import Lesson from "../../components/Course/lesson";
import {Data} from '../../components/Course/courseProgram/data'
import React, {useState} from "react";
import {useIntl} from "react-intl";
import ReactPlayer from "react-player";

const border = {
    borderRadius: "20px"
}


export default function PurchasedCourse() {

    const {formatMessage} = useIntl()
    const [state, setState] = useState()

    const Program = index => {
        if (state === index) {
            return setState(null)
        }
        return setState(index)
    }
    const Modal = (index) => {
        return index + 1
    }

    return (
        <HomeLayout>
            <div className="container mx-auto pt-[70px]">

                <div className="flex justify-between items-center">
                    <div className="mt-8 lg:w-[70%] md:w-[97%]">
                        <h1 className="title_hero text-white leading-tight mb-3   md:text-[32px] lg:text-[40px] text-[22px]  font-bold"
                        >Бизнес-нолдон</h1>
                        <p className="text-white font-light  leading-[24px]"
                        >Как правильно строить команду и эффективно ею управлять, чтобы достигать все поставленные цели.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-white"> Прогресс по курсу</h1>
                        <div className="bg-[#9099A3] w-[309px] h-[4px]"><span
                            className="bg-[#1A5CFF] w-[73px] h-[4px]"/></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div>
                                <div className="text-[#9099A3]"><span
                                    className="font-bold text-white text-[36px]">0</span>/<span>3</span></div>
                                <h1 className="text-white">Пройдено <br/>
                                    модулей</h1>
                            </div>
                            <div>
                                <div className="text-[#9099A3]"><span
                                    className="font-bold text-white text-[36px]">5</span>/<span>22</span></div>
                                <h1 className="text-white">Пройдено <br/>
                                    материалов</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-[100px] pb-[50px]">
                    <h1 className="font-bold text-white text-[36px]">ПРОГРАММА КУРСА</h1>
                    {
                        Data.map((item, index) => {
                            console.log(item)
                            return (
                                <div className="flex flex-col md:flex-row  md:w-[80%] programCard">
                                    <div className="programCard_modal">
                                        <h1 className="text-white">Модуль<span
                                            className="ml-1">{Modal(index)}</span></h1>
                                    </div>
                                    <div>
                                        <div className="programCard_block" onClick={() => Program(index)}>

                                            <h1 className="flex">{item.title}
                                                <h1>Пройдено материалов: 5/11</h1>
                                                <span className="programCard_block_line">
                                                {index === state ?
                                                    <IoIosArrowUp/> :
                                                    <IoIosArrowDown/>
                                                }

                                            </span>
                                            </h1>

                                        </div>

                                        {state === index ? (
                                            <div className="programCard_block_desc">
                                                {item.lessons.map((el) => {
                                                    return (el.contents.map((el) => {
                                                        return (
                                                           <div id={el.module}>
                                                               <h2>{el.title}</h2>
                                                               <ReactPlayer
                                                                   controls url={el.item.url}
                                                                   style={border}
                                                                   className="border"
                                                                   width="100%"
                                                                   height="60vh"
                                                               />
                                                           </div>
                                                        )
                                                    })
                                                })}

                                            </div>


                                        ) : null}
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>


            </div>


        </HomeLayout>
    )
}