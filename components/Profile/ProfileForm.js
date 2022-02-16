import {Formik, Field, Form} from 'formik';
import Image from "next/image";
import Eye from "../../assets/img/img_6.png";
import EyeSlash from "../../assets/img/img_7.png";
import Link from "next/link";
import api from "../axiosAPI/api";
import React from "react";
import * as yup from "yup";


const validationSchema = yup.object({
    email: yup.string().email('Бул жерге email жазыңыз'),
})

export default function ProfileForm() {
    function InputEyes() {
        const x = document.querySelector("#EntryInputPassword")
        const y = document.querySelector("#eyes1")
        const z = document.querySelector("#eyes2")

        if (x.type === "password") {
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            x.type = "password";
            y.style.display = "none";
            z.style.display = "block";
        }
    }
    return (

            <Formik
                initialValues={{
                    full_name: '',
                    phone: '',
                    email: ''
                }}
                validationSchema={validationSchema}
                onSubmit={ async (values, actions) => {
                    try {
                        await api.post('ru/api/v2/create-help-in-choosing/', values)
                        actions.setStatus('Сиздин буйрутмаңыз ийгиликтүү кетти, жакын арада биздин менеджерлер сизге  байланышат')
                    } catch (e) {
                        actions.setStatus('Серверден ката кетти')
                    }

                }}
            >
                {(formik) => (

                    <Form className="flex flex-col w-[100%] items-center" >
                    <Field name="email" type="email" className="EntryInput" placeholder="E-mail"/>
                    <div className='flex flex-col w-[100%] items-center '>
                        <Field name="password" type="password" className="EntryInput"
                               id="EntryInputPassword" placeholder="Password" />
                        <span onClick={InputEyes} className="EntryInputPasswordEyes">
                                        <div className="eye"><Image src={Eye} layout="fill" id="eyes1"/></div>
                                        <div className="eye"><Image src={EyeSlash} layout="fill" id="eyes2"/></div>

                                    </span>
                        {formik.errors.email && formik.touched.email && formik.errors.email}

                    </div>
                    <button type="EntryBtn" className="btn ">Войти</button>
                    {!!formik.status && (
                        <h1 className="text-white">{formik.status}</h1>
                    )}
                    <div>
                        <Link href="/password-recovery/">
                            <a><span className="EntryPassword mt-4">Забыли пароль?</span></a>
                        </Link>
                    </div>
                </Form>
                )}
            </Formik>

    )
}
