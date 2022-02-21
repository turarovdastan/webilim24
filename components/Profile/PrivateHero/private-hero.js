import {useEffect} from 'react'
import {Formik, Form, Field} from 'formik';
import PhoneInput from "react-phone-number-input";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import Link from "next/link"
import {useState} from "react";
import api from "../../axiosAPI/api";
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';

const monthList = [
    ['Январь', 'January'],
    ['Февраль', 'February'],
    ['Март', 'March'],
    ['Апрель', 'April'],
    ['Май', 'May'],
    ['Июнь', 'June'],
    ['Июль', 'July'],
    ['Август', 'August'],
    ['Сентябрь', 'September'],
    ['Октябрь', 'October'],
    ['Ноябрь', 'November'],
    ['Декабрь', 'December']
]


export default function PrivateHero() {
    const [country, selectCountry] = useState()
    const [region, selectRegion] = useState('')
    const [form, setForm] = useState({})
    const [date, setDate] = useState()
    const [error, setError] = useState(null)
    const router = useRouter()
    const userId = useSelector(state => state.main.user_id)
    const updateProfile = () => {
        console.log(new Date(date));
        api.put('ru/api/v2/user-profile/' + userId, {...form, date_of_birth: new Date(date).toISOString().slice(0, 10)})
            .then(data => {
                setForm(data.data)
                setDate(data.data.date_of_birth || '2022-02-18')
                window.scrollTo({top: 200, behavior: 'smooth'})
            })
            .catch(e => {
                const vals = e.response && Object.entries(e.response.data)
                setError(vals)
                window.scrollTo({top: 200, behavior: 'smooth'})
            })
    }
    useEffect(() => {
        if (!userId) return router.push('/login')
        api.get('ru/api/v2/user-profile/' + userId)
            .then(data => {
                setDate(data.data.date_of_birth || new Date())
                setForm(data.data)
            })
    }, [])
    const blobToBase64 = blob => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });


    return (
        <>
            <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E] rounded-[15px]">
                <h1 className="text-white text-[36px] font-bold mt-4">Личные данные</h1>
                <p className="text-white text-[18px] font-bold">Основная информация</p>
                {error && (<p className="text-white my-8 text-[14px] text-[#C70039] font-bold">
                    {error.map(i => <span>{i[0]} : {i[1]}</span>)}
                </p>)}

                <div className="flex items-center my-8">
                    {form.avatar ? (
                        <img className="w-[80px] object-cover h-[80px] bg-[#CFCEDC]  rounded-[50%] overflow-hidden"
                             src={form.avatar} alt="аватар"/>) : (
                        <div className="w-[80px] h-[80px] bg-[#CFCEDC] rounded-[50%] overflow-hidden"/>)}
                    <div className="mx-5">
                        <label htmlFor="file" className="btn">Выбрать фото</label>
                        <input onChange={(e) => {
                            blobToBase64(e.target.files[0]).then(data => {
                                setForm({...form, avatar: data})
                            })
                        }} type="file" id="file" name="file" className="hidden"/>
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
                                                   placeholder="Name"
                                                   value={form.full_name}
                                                   onChange={(e) => setForm({...form, full_name: e.target.value})}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Номер телефона *</p>

                                            <PhoneInput
                                                name="phone"
                                                enableAreaCodes={true}
                                                dropdownClass="dropdown-class"
                                                international
                                                countryCallingCodeEditable={true}
                                                defaultCountry="KG"
                                                value={form.phone}
                                                onChange={(phone) => setForm({...form, phone: phone})}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">E-mail *</p>
                                            <Field name="email1" type="email"
                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                   placeholder="E-mail"
                                                   value={form.email}
                                                   onChange={(e) => setForm({...form, email: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Компания *</p>
                                            <Field name="nsdasdcme" type="text"
                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                   placeholder="Компания *"
                                                   value={form.company}
                                                   onChange={(e) => setForm({...form, company: e.target.value})}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Дата рождения </p>
                                            <div className=" grid md:grid-cols-7">
                                                <select
                                                    onChange={(e) => {
                                                        setDate(new Date(date).setDate(e.target.value))
                                                    }}
                                                    id="ice-cream-flavors"
                                                    className="md:col-span-2 my-2 md:my-0 rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]">
                                                    {[...Array(31)].map((i, k) => {
                                                        return <option
                                                            selected={date && +(new Date(date).getDate()) === (k + 1)}
                                                            value={k + 1}>{k + 1}</option>
                                                    })}

                                                </select>

                                                <select
                                                    id="ice-cream-flavors"
                                                    onChange={(e) => {
                                                        setDate(new Date(date).setMonth(e.target.value))
                                                    }}
                                                    className="md:col-span-3 my-2 md:my-0   rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]">
                                                    {monthList.map((i, k) => {
                                                        return <option
                                                            selected={date && k == new Date(date).getMonth()}
                                                            key={k} value={k}>{i[0]}</option>
                                                    })}
                                                </select>
                                                <input onChange={(e) => {
                                                    setDate(new Date(date).setYear(e.target.value))
                                                }}
                                                       value={new Date(date).getFullYear()}
                                                       type="number" min="1900" max="2021" placeholder="Год"
                                                       className="md:col-span-2 my-2 md:my-0   rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"/>

                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Пол</p>
                                            <div className="grid md:grid-cols-2 gap-2 mt-3">
                                                <div id="radios" className="flex items-center ">
                                                    <input
                                                        type="radio"
                                                        onChange={(e) => setForm({...form, gender: e.target.value})}
                                                        checked={form.gender === "male" ? true : false}
                                                        className="input"
                                                        id="input1"
                                                        name="radio"
                                                        value={'male'}
                                                    />
                                                    <p className="text-[white] ml-[40%]">Мужской</p>
                                                </div>
                                                <div id="radios" className="flex items-center ">
                                                    <input
                                                        type="radio"
                                                        checked={form.gender !== "male" ? true : false}
                                                        className="input"
                                                        id="input1"
                                                        name="radio"
                                                        onChange={(e) => setForm({...form, gender: e.target.value})}
                                                        value={'female'}

                                                    />
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
                                            value={form.country || country}
                                            onChange={(e) => {
                                                selectCountry()
                                                setForm({...form, country: e})
                                            }}
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
                                            value={form.city || region}
                                            onChange={(e) => {
                                                selectRegion()
                                                setForm({...form, city: e})
                                            }}
                                            customOptions={['-- Пользовательский вариант 1', '-- Пользовательский вариант 2']}
                                            setValue={region}/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light">Часовой пояс</p>
                                    <select value={form.timezone}
                                            onChange={(e) => setForm({...form, timezone: e.target.value})}
                                            name="timezone" id="1"
                                            className="col-span-2  rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]">
                                        <option value="bishkek">(UTC+06:00) Бишкек</option>
                                        <option value="moscow">(UTC+03:00) Москва</option>
                                        <option value="newYork">(UTC+03:00) NewYork</option>
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
                                                               value={form.occupation}
                                                               onChange={(e) => setForm({
                                                                   ...form,
                                                                   occupation: e.target.value
                                                               })}
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder=""/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Экспертиза</p>
                                                        <Field name="nsdasdme" type="text"
                                                               value={form.expertise}
                                                               onChange={(e) => setForm({
                                                                   ...form,
                                                                   expertise: e.target.value
                                                               })}
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder=""/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Веб-сайт</p>
                                                        <Field name="nsdamsde" type="text"
                                                               value={form.web_site}
                                                               onChange={(e) => setForm({
                                                                   ...form,
                                                                   web_site: e.target.value
                                                               })}
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
                                      value={form.expertise_description}
                                      onChange={(e) => setForm({...form, expertise_description: e.target.value})}
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
                                                               value={form.instagram}
                                                               onChange={(e) => setForm({
                                                                   ...form,
                                                                   instagram: e.target.value
                                                               })}
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder="http.//Instagram.com/user_name"/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Whatsapp</p>
                                                        <Field name="nsdaqwme" type="text"
                                                               value={form.whatsapp}
                                                               onChange={(e) => setForm({
                                                                   ...form,
                                                                   whatsapp: e.target.value
                                                               })}
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder="http.//Whatsapp.com/user_name"/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">Linkedin</p>
                                                        <Field name="nsdqwame" type="text"
                                                               value={form.linkedin}
                                                               onChange={(e) => setForm({
                                                                   ...form,
                                                                   linkedin: e.target.value
                                                               })}
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
                                                               value={form.telegram}
                                                               onChange={(e) => setForm({
                                                                   ...form,
                                                                   telegram: e.target.value
                                                               })}
                                                               className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                               placeholder="http.//Telegram.com/user_name"/>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-[#9099A3] text-[14px] font-light">YouTube</p>
                                                        <Field name="nsdaasdme" type="text"
                                                               value={form.youtube}
                                                               onChange={(e) => setForm({
                                                                   ...form,
                                                                   youtube: e.target.value
                                                               })}
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
                        <button onClick={updateProfile} className="btn">Сохранить</button>
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
