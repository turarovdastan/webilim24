import {PackageData} from "../components/Package/PackageData";
import HomeLayout from "../components/HomeLayout";
import Faq from "../components/Home/FAQ/FAQ";
import MainForm from "../components/Home/FormReq/Form";
import Link from 'next/link'

export default function Package() {
    return (
        <HomeLayout>
            <section id="package" className="mb-14 pt-[40px]">
                <div className="container mx-auto">
                    <div className="flex justify-center flex-col items-center mt-4">
                        <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mt-10 lg:mb-6">ВЫБЕРИТЕ
                            СВОЙ ПАКЕТ УЧАСТИЯ</h1>
                        <p className="text-center text-white">Присоединяйтесь к международному сообществу учеников Кайдзен Школы и <br/>
                            становитесь эффективными и счастливыми без хронической занятости и выгорания</p>
                    </div>
                    <div className="grid grid-cols-1 gap-1 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-20">
                        {PackageData.map((item) => {
                            return (
                                <div className="package">
                                    <div
                                        className=" w-[100%] h-[720px] px-2 py-0.5 sm:py-1  sm:px-3   lg:py-2  lg:px-4  bg-white rounded-[15px]">
                                        <h1 className="text-[#2C3E50] mt-4 font-bold">{item.nameCard}</h1>
                                        <div className="flex items-end mt-2">
                                            <h2 className="text-[#2C3E50] text-[36px]  leading-[54px] font-bold">{item.price}</h2>
                                            <p className="text-[#9099A3] newPrice ">{item.newPrice}</p>
                                        </div>
                                        <h5 className="text-[12px] text-white rounded-[5px]  bg-[#9099A3] w-[80px] h-[20px] flex justify-center items-center">{item.time}</h5>
                                        <div className="h-[480px] overflow-y-scroll			">
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard1}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard2}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard3}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard4}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard5}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard6}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard6}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard6}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard6}</p>
                                            <p className="text-[#2C3E50] text-[16px] font-light mt-6">{item.descCard6}</p>

                                        </div>
                                            <Link href={`/${item.link}`}>
                                                <button
                                                    className="flex justify-center align-center mx-auto px-8 py-3 md:text-[18px]   bg-[#2C3E50] rounded-[15px] text-white ClubPackage_btn ">Оформить
                                                    подписку
                                                </button>
                                            </Link>

                                    </div>

                                </div>
                            )
                        })}
                    </div>
                    <p className="pt-[20px] text-center text-[#9099A3]">Списания будут автоматическими. Вы всегда можете
                        отменить подписку <br/>
                        в Вашем личном кабинете и больше списаний не будет.</p>
                </div>
            </section>
            <MainForm/>
            <Faq/>
        </HomeLayout>
    )
}

