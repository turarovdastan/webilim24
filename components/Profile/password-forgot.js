import {Field, Form, Formik} from "formik";
import Image from "next/image";
import Eye from "../../assets/img/img_6.png";
import EyeSlash from "../../assets/img/img_7.png";
import React from "react";


export default function  PasswordForgot(){
    function InputEyes() {
        const x = document.querySelector("#EntryInputPasswordP")
        const y = document.querySelector("#eyesP")
        const z = document.querySelector("#eyesP2")

        if (x.type === "password"){
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            x.type = "password";
            y.style.display = "none";
            z.style.display = "block";
        }
    }
    function InputEyes2() {
        const x = document.querySelector("#EntryInputPasswordP2")
        const y = document.querySelector("#eyesP2")
        const z = document.querySelector("#eyesP22")

        if (x.type === "password"){
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            x.type = "password";
            y.style.display = "none";
            z.style.display = "block";
        }
    }
    function InputEyes3() {
        const x = document.querySelector("#EntryInputPasswordP3")
        const y = document.querySelector("#eyesP3")
        const z = document.querySelector("#eyesP33")

        if (x.type === "password"){
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            x.type = "password";
            y.style.display = "none";
            z.style.display = "block";
        }
    }
    return(
        <>
            <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E] rounded-[15px]">
                <Formik
                    initialValues={{passwordP: "", email: ""}}
                    onSubmit={async (values) => {
                        await new Promise((resolve) => setTimeout(resolve, 500));
                    }}
                >
                    <Form className=" w-[100%]  ">
                        <div className='w-[100%] mt-4'>
                            <p className="text-[#9099A3] text-[14px] font-light">Старый пароль</p>
                            <Field name="passwordP" type="password" className="EntryInputP"
                                   id="EntryInputPasswordP" />
                            <span onClick={InputEyes} className="EntryInputPasswordEyesP">
                                        <div className="eyeP"><Image src={Eye} layout="fill" id="eyesP"/></div>
                                        <div className="eyeP"><Image src={EyeSlash} layout="fill" id="eyesP2"/></div>
                                    </span>
                        </div>
                        <div className='w-[100%] mt-4'>
                            <p className="text-[#9099A3] text-[14px] font-light">Новый пароль</p>
                            <Field name="passwordP2" type="password" className="EntryInputP"
                                   id="EntryInputPasswordP2" placeholder="" />
                            <span onClick={InputEyes2} className="EntryInputPasswordEyesP">
                                        <div className="eyeP"><Image src={Eye} layout="fill" id="eyesP2"/></div>
                                        <div className="eyeP"><Image src={EyeSlash} layout="fill" id="eyesP22"/></div>
                                    </span>
                        </div>
                        <div className='w-[100%] mt-4'>
                            <p className="text-[#9099A3] text-[14px] font-light">Потвердите новый пароль</p>
                            <Field name="passwordP3" type="password" className="EntryInputP"
                                   id="EntryInputPasswordP3" placeholder="" />
                            <span onClick={InputEyes3} className="EntryInputPasswordEyesP">
                                        <div className="eyeP"><Image src={Eye} layout="fill" id="eyesP3"/></div>
                                        <div className="eyeP"><Image src={EyeSlash} layout="fill" id="eyesP33"/></div>
                                    </span>
                        </div>
                    </Form>
                </Formik>


                <button className="btn">Сохранить</button>
            </div>
        </>
    )
}