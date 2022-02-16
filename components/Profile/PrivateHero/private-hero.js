import {Formik, Form, Field} from 'formik';
import PhoneInput from "react-phone-number-input";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import Link from "next/link"
import { useState  } from "react";





export default function PrivateHero() {
    const [country, selectCountry] = useState()
    const [region, selectRegion] = useState('')
    const [value, setValue] = useState();


    return (
        <>
            <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E] rounded-[15px]">
                <h1 className="text-white text-[36px] font-bold mt-4">Личные данные</h1>
                <p className="text-white text-[18px] font-bold">Основная информация</p>
                <div className="flex items-center my-8">
                    <div className="w-[80px] h-[80px] bg-[#CFCEDC] rounded-[50%] overflow-hidden"/>
                    <div className="mx-5">
                        <label htmlFor="file" className="btn" >Выбрать фото</label>
                        <input type="file" id="file" name="file" className="hidden" />
                    </div>
                </div>
                <div>
                    <Formik
                        initialValues={{email: '', email1: '', password: ''}}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                                errors.email1 = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <div className="grid md:grid-cols-2 ">
                                    <div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">ФИО *</p>
                                            <Field name="nsdame" type="text"
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
                                            <Field name="email1" type="email"
                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                   placeholder="E-mail"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Компания *</p>
                                            <Field name="nsdasdcme" type="text"
                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                   placeholder="Компания *"/>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Дата рождения </p>
                                            <div className=" grid md:grid-cols-7">
                                                <select id="ice-cream-flavors"
                                                        className="md:col-span-2 my-2 md:my-0 rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]">
                                                    <option value="January">1</option>
                                                    <option value="January">2</option>
                                                    <option value="January">3</option>
                                                    <option value="January">4</option>
                                                    <option value="January">5</option>
                                                    <option value="January">6</option>
                                                    <option value="January">7</option>
                                                    <option value="January">8</option>
                                                    <option value="January">9</option>
                                                    <option value="January">10</option>
                                                    <option value="January">11</option>
                                                    <option value="January">12</option>
                                                    <option value="January">13</option>
                                                    <option value="January" >14</option>
                                                    <option value="January">15</option>
                                                    <option value="January">16</option>
                                                    <option value="January">17</option>
                                                    <option value="January">18</option>
                                                    <option value="January">19</option>
                                                    <option value="January">20</option>
                                                    <option value="January">21</option>
                                                    <option value="January">22</option>
                                                    <option value="January">23</option>
                                                    <option value="January">24</option>
                                                    <option value="January">25</option>
                                                    <option value="January">26</option>
                                                    <option value="January">27</option>
                                                    <option value="January">27</option>
                                                    <option value="January">28</option>
                                                    <option value="January">29</option>
                                                    <option value="January">30</option>
                                                    <option value="January">31</option>

                                                </select>

                                                <select id="ice-cream-flavors"
                                                        className="md:col-span-3 my-2 md:my-0   rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]">
                                                    <option value="January">Январь</option>
                                                    <option value="February">Февраль</option>
                                                    <option value="March">Март</option>
                                                    <option value="April">Апрель</option>
                                                    <option value="May">Май</option>
                                                    <option value="June">Июнь</option>
                                                    <option value="July">Июль</option>
                                                    <option value="August">Август</option>
                                                    <option value="September">Сентябрь</option>
                                                    <option value="October">Октябрь</option>
                                                    <option value="November">Ноябрь</option>
                                                    <option value="December">Декабрь</option>
                                                </select>
                                                <input type="number" min="1900" max="2021" placeholder="Год"  className="md:col-span-2 my-2 md:my-0   rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"/>

                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Пол</p>
                                            <div className="grid md:grid-cols-2 gap-2 mt-3">
                                                <div id="radios" className="flex items-center ">
                                                    <input type="radio" checked={true} className="input" id="input1" name="radio"/>
                                                    <p className="text-[white] ml-[40%]">Мужской</p>
                                                </div>
                                                <div id="radios" className="flex items-center ">
                                                    <input type="radio" className="input" id="input1" name="radio"/>
                                                    <p className="text-[white] ml-[40%]">Женский</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="mt-20">
                    <h1 className="text-white sm:text-[22px] text-[19px] font-bold">Дополнительная информация</h1>
                    <div className="">
                        <div className="grid md:grid-cols-2">
                            <div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light">Страна</p>
                                    <div className="">
                                        <CountryDropdown
                                            value={country}
                                            onChange={selectCountry}
                                            className="col-span-2  rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light">Город</p>
                                    <div className="">
                                        <RegionDropdown
                                            className="col-span-2  rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                            country={country}
                                            value={region}
                                            onChange={selectRegion}
                                            customOptions={['-- Пользовательский вариант 1', '-- Пользовательский вариант 2']} setValue={region}/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light">Часовой пояс</p>
                                    <select name="timezone" id="1" className="col-span-2  rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]">
                                        <option value="bishkek" >(UTC+06:00) Бишкек</option>
                                        <option value="bishkek">(UTC+03:00) Москва</option>
                                        <option value="bishkek">(UTC+03:00) Москва</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <Formik
                                    initialValues={{email: '', email1: '', password: ''}}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Invalid email address';
                                            errors.email1 = 'Invalid email address';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, {setSubmitting}) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {({isSubmitting}) => (
                                        <Form>
                                            <div className="">
                                                <div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Род
                                                            деятельности</p>
                                                        <Field name="sdc" type="text"
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder=""/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Экспертиза</p>
                                                        <Field name="nsdasdme" type="text"
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder=""/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Веб-сайт</p>
                                                        <Field name="nsdamsde" type="text"
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder="https.//example.com"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-span-2 mt-4">
                            <p className="text-[#9099A3] text-[14px] font-light">Экспертиза</p>
                            <textarea id="story" name="story"
                                      rows="5" cols="33"
                                      className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[97.5%]"
                            />
                        </div>
                    </div>
                    <div className="mt-20">
                        <h1 className="text-white text-[22px] font-bold">Социальные сети</h1>
                        <div className="grid md:grid-cols-2">
                            <div>
                                <Formik
                                    initialValues={{email4: '', email14: '', password: ''}}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email4) {
                                            errors.email4 = 'Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email4 = 'Invalid email address';
                                            errors.email14 = 'Invalid email address';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, {setSubmitting}) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {({isSubmitting}) => (
                                        <Form>
                                            <div className="">
                                                <div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Instagram</p>
                                                        <Field name="nsqwdame" type="text"
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder="http.//Instagram.com/user_name"/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Whatsapp</p>
                                                        <Field name="nsdaqwme" type="text"
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder="http.//Whatsapp.com/user_name"/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Linkedin</p>
                                                        <Field name="nsdqwame" type="text"
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder="http.//Linkedin.com/user_name"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                            <div>
                                <Formik
                                    initialValues={{email3: '', email13: '', password: ''}}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email3 = 'Invalid email address';
                                            errors.email13 = 'Invalid email address';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, {setSubmitting}) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {({isSubmitting}) => (
                                        <Form>
                                            <div className="">
                                                <div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Telegram</p>
                                                        <Field name="nsdame" type="text"
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder="http.//Telegram.com/user_name"/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">YouTube</p>
                                                        <Field name="nsdaasdme" type="text"
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder="http.//YouTube.com/user_name"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row mt-8">
                    <div>
                        <button className="btn">Сохранить</button>
                    </div>
                    <div className="sm:ml-4">
                        <Link href={"/profile/forgot-password"}>
                            <a>
                                <button className="btn2">Изменить пароль</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
