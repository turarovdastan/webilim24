import HomeLayout from "../../components/HomeLayout";
import PhoneInput from "react-phone-number-input";
import {useState} from "react";
import {Field, Form, Formik} from "formik";
import Link from 'next/link'


export default function Month() {
    const [value, setValue] = useState()
    return (
        <HomeLayout>
            <div className="container pt-[40px]">
                <div className="flex justify-center">
                    <div className="relative flex flex-col mb-8 items-start w-[616px]">
                        <div className="mt-4">
                            <h1 className=" text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">Месяц</h1>
                        </div>
                        <div className="mb-10 w-[100%]">
                            <div className="relative ">
                                <Formik
                                    initialValues={{ name: "", email: "" }}
                                    onSubmit={async (values) => {
                                        await new Promise((resolve) => setTimeout(resolve, 500));
                                        alert(JSON.stringify(values, null, 2));
                                    }}
                                >
                                    <Form>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">ФИО *</p>
                                            <Field name="cd" type="text" className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                   placeholder="Name" />
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Номер телефона *</p>
                                            <PhoneInput
                                                countryCallingCodeEditable={false}
                                                defaultCountry="KG"
                                                value={value}
                                                onChange={setValue}/>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">E-mail *</p>
                                            <Field name="cdcd" type="email" className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                   placeholder="E-mail" />
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Промокод *</p>
                                            <Field name="#####" type="text" className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                    />
                                        </div>
                                    </Form>
                                </Formik>
                                <div className="mt-6">
                                    <button
                                        className="mt-4 text-white font-bold w-[95%] flex justify-center items-center pt-3 pb-3  btn rounded-[15px] box-shadow: 0px 5px 8px rgba(26, 92, 255, 0.2)">Оплатить  -225,00 $/год
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]">Доступ к новым
                                мастер-классам Кайдзен Школы.</h5>
                            <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]"> Доступ ко всем
                                мастер-классам Кайзден Школы.</h5>
                            <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]"> Доступ к эксклюзивным
                                материалам.</h5>
                            <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]"> 10 вебинар-сессий с
                                Маргуланом в формате вопросы/ответы.</h5>
                            <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]">Другие варианты
                                подписки:</h5>
                            <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]"> доступна на условиях
                                ежегодной подписки.</h5>
                            <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]"> Образовательная
                                платформа Маргулана Сейсембаева</h5>
                            <div className="flex flex-col sm:flex-row items-center">
                                <Link href={'/forms/year'}>
                                    <button
                                        className="btn">
                                        Год
                                        - 225,00 $/год
                                    </button>
                                </Link>
                                <h5 className="text-white font-bold text-[16px] mx-3 leading-[20px]">ИЛИ</h5>
                                <Link href={'/forms/year2'}>
                                <button
                                    className="btn ">Год
                                    + - 585,00 $/год
                                </button>
                                </Link>
                            </div>
                            <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]">Отменить можно в любой
                                момент!</h5>
                            <p className="leading-[22px] text-[#9099A3] text-[15px] sm:text-[16px] my-3 font-light">С Вашей карты автоматически будут списываться 19,00 $/мес, которые
                                являются стандартной ценой участия.</p>
                            <p className="leading-[22px] text-[#9099A3]  text-[15px] sm:text-[16px] my-3 font-light">Вы всегда можете отменить подписку в Вашем личном кабинете
                                и больше списаний не будет.</p>
                        </div>
                    </div>

                </div>
            </div>
        </HomeLayout>
    )
}
