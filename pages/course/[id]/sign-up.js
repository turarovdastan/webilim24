import HomeLayout from "../../../components/HomeLayout";
import {Field, Form, Formik} from "formik";
import PhoneInput from "react-phone-number-input";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux"
import {setCourse} from "../../../redux/reducers/course";
import api from "../../../components/axiosAPI/api";

export default function SignUpCourse() {
    const [value, setValue] = useState()
    const [error, setError] = useState(null)

    const router = useRouter()
    const dispatch = useDispatch()

    const fetchCourse = async (id) => {
        dispatch(setCourse(null))
        const {data} = await api.get(`/ru/api/v2/courses/${id}`)
        dispatch(setCourse(data))
    }

    useEffect(() => {
        if (router.isReady === false) {
            return;
        }
        fetchCourse(router.query.id);
    }, [router.isReady, router.query]);
    const data = useSelector(state => state.course.course)
    const lang = useSelector(state => state.main.locale)

    return (
        <HomeLayout>
            <div className="container mx-auto pt-[40px]">
                <div className='my-10'>
                    <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                        ЗАРЕГИСТРИРОВАТЬСЯ
                        НА КУРС
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2  my-8">
                    <div>
                        <div className="p-4 bg-white rounded-[15px]">
                            <div className=" border-b-2 border-[#9099A3] py-4">
                                <span className="text-[#9099A3] text-[16px] font-light">курс</span>
                                <h1 className="text-[2C3E50] text-[20px] font-bold mt-3">{lang === 'ky' ? data?.title_ky : data?.title_ru}</h1>
                                <p className="capitalize text-[2C3E50] text-[17px] font-light sm:w-[51.5%] mt-2"> {lang === 'ky' ? data?.subtitle_ky : data?.subtitle_ru} </p>
                            </div>
                            <div className="grid sm:grid-cols-2">
                                <div className="mt-4">
                                    <div className="border-b-2 b  order-[#9099A3] py-4">
                                        <span className="text-[#9099A3] text-[16px] font-light ">курс</span>
                                        <p className="text-[2C3E50] text-[17px] font-light "> {data?.mentor.full_name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-[#9099A3] text-[16px] font-light ">В курс входит</span>
                                        <p className="text-[2C3E50] text-[17px] font-light "
                                           dangerouslySetInnerHTML={{
                                               __html: lang === 'ky' ? data?.learning_topics_ky : data?.learning_topics_ru
                                           }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <img src={data?.image}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[100%] p-5">
                        <p className="text-[#9099A3] sm:w-[60%] font-light">Чтобы зарегистрироваться, пожалуйста,
                            укажите ваши данные</p>
                        <div className="relative ">
                            <Formik
                                initialValues={{full_name: "", email: "", promo_code: ""}}
                                onSubmit={async (values) => {
                                    setError(null)
                                    api.post('ru/api/v2/register-request/', {
                                        ...values,
                                        phone: value,
                                        package_membership: router.query.id
                                    })
                                        .then(data => {
                                            window.location.assign(JSON.parse(data.data['payment-data']).payment_page_url).call(this);
                                        })
                                        .catch(e => {
                                            setError(e.response && e.response.data?.email || 'Некоторые поля заполнены не корректно!')
                                        })

                                }}
                            >
                                {(formik) => (
                                    <Form>
                                        {error ? (
                                            <div className="mt-6 text-[#C0392B]">{error}</div>
                                        ) : null}
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">ФИО *</p>
                                            <Field name="full_name" type="text"
                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                   placeholder="Name"/>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Номер телефона *</p>
                                            <PhoneInput
                                                international
                                                countryCallingCodeEditable={false}
                                                defaultCountry="KG"
                                                value={value}
                                                onChange={setValue}/>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">E-mail *</p>
                                            <Field name="email" type="email"
                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                   placeholder="E-mail"/>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-[#9099A3] text-[14px] font-light">Промокод *</p>
                                            <Field name="promo_code" type="text"
                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                   placeholder="###"/>
                                        </div>
                                        <div className="mt-6">
                                            {data?.memberships.map(i => {
                                                return (
                                                    <button
                                                        type="submit"
                                                        className="mt-4 text-white font-bold w-[95%] flex justify-center items-center pt-3 pb-3  btn rounded-[15px] box-shadow: 0px 5px 8px rgba(26, 92, 255, 0.2)">Оплатить
                                                        {i.price.split('.')[0]} сом / {i.membership_type} мес
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </div>
                        <p className="text-[#9099A3] sm:w-[80%] mt-6 font-light">
                            После регистрации наш менеджер свяжется с вами и уточнит все детали.
                        </p>
                    </div>

                </div>
            </div>
        </HomeLayout>
    )
}