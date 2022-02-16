import HomeLayout from "../../components/HomeLayout";
import {Field, Form, Formik} from "formik";
import PhoneInput from "react-phone-number-input";
import {useState} from "react";
import ImgW from '../../assets/img/img_2.png'
import Image from "next/image"


export default function SignUpCourse() {
    const [value, setValue] = useState()

    return (
        <HomeLayout>
            <div className="container mx-auto pt-[40px]">
                <div className='my-10'>
                    <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">ЗАРЕГИСТРИРОВАТЬСЯ НА КУРС</h1>
                </div>
                <div className="grid lg:grid-cols-2  my-8">
                    <div>
                        <div className="p-4 bg-white rounded-[15px]">
                            <div className=" border-b-2 border-[#9099A3] py-4">
                                <span className="text-[#9099A3] text-[16px] font-light">курс</span>
                                <h1 className="text-[2C3E50] text-[20px] font-bold mt-3">Командообразование</h1>
                                <p className="capitalize text-[2C3E50] text-[17px] font-light sm:w-[51.5%] mt-2">Как правильно строить команду
                                    и эффективно ею управлять,
                                    чтобы  достигать  все  поставленные
                                    цели.</p>
                            </div>
                            <div className="grid sm:grid-cols-2">
                                <div className="mt-4">
                                    <div className="border-b-2 b  order-[#9099A3] py-4">
                                        <span className="text-[#9099A3] text-[16px] font-light ">курс</span>
                                        <p className="text-[2C3E50] text-[17px] font-light ">Маргулан Сейсембаев</p>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-[#9099A3] text-[16px] font-light ">В курс входит</span>
                                        <p className="text-[2C3E50] text-[17px] font-light ">43 материала *</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={ImgW}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[100%] p-5">
                        <p className="text-[#9099A3] sm:w-[60%] font-light">Чтобы зарегистрироваться, пожалуйста,
                            укажите ваши данные</p>
                        <div className="relative ">
                            <Formik
                                initialValues={{name: "", email: ""}}
                                onSubmit={async (values) => {
                                    await new Promise((resolve) => setTimeout(resolve, 500));
                                    alert(JSON.stringify(values, null, 2));
                                }}
                            >
                                <Form>
                                    <div className="mt-4">
                                        <p className="text-[#9099A3] text-[14px] font-light">ФИО *</p>
                                        <Field name="name" type="text"
                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                               placeholder="Name"/>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-[#9099A3] text-[14px] font-light">Номер телефона *</p>
                                        <PhoneInput
                                            international
                                            countryCallingCodeEditable={false}
                                            defaultCountry="RU"
                                            value={value}
                                            onChange={setValue}/>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-[#9099A3] text-[14px] font-light">E-mail *</p>
                                        <Field name="nsaame" type="email"
                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                               placeholder="E-mail"/>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-[#9099A3] text-[14px] font-light">Промокод *</p>
                                        <Field name="aman" type="text"
                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                               placeholder="###"/>
                                    </div>
                                </Form>
                            </Formik>
                            <div className="mt-6">
                                <button
                                    className="mt-4 text-white font-bold w-[95%] flex justify-center items-center pt-3 pb-3  bg-[#1A5CFF] rounded-[15px] box-shadow: 0px 5px 8px rgba(26, 92, 255, 0.2)">Оплатить
                                    -225,00 $/год
                                </button>
                            </div>

                        </div>
                        <p className="text-[#9099A3] sm:w-[80%] mt-6 font-light">После регистрации наш менеджер свяжется с
                            вами
                            и уточнит все детали.</p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}