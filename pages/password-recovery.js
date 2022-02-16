import Image from "next/image";
import LogoImg from "../assets/img/Logo.svg"
import Eye from "../assets/img/img_6.png"
import EyeSlash from "../assets/img/img_7.png"
import {Formik, Field, Form} from "formik";
import Link from  "next/link"

export default function PasswordRecovery() {

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
        <>
            <div className="container mx-auto">
                <div className="flex flex-col items-center w-[100%] ">
                    <div className="sm:w-[70%] relative flex flex-col items-center my-20">

                        <h1 className=" text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">Восстановление пароля</h1>
                        <Formik
                            initialValues={{name: "", email: ""}}
                            onSubmit={async (values) => {
                                await new Promise((resolve) => setTimeout(resolve, 500));
                            }}
                        >
                            <Form className="flex flex-col w-[100%] items-center">
                                <Field name="emailQ" type="email" className="PasswordInput sm:w-[60%] w-[100%]" placeholder="E-mail"/>
                                <div className='flex flex-col w-[100%] items-center PasswordInputPassword '>
                                    <Field name="password2" type="password" className="PasswordInput"
                                           id="EntryInputPassword" /*placeholder="Password"*/ />
                                    <span onClick={InputEyes} className="RecoverPasswordEyes">
                                        <div className="eye"><Image src={Eye} layout="fill" id="eyes1"/></div>
                                        <div className="eye"><Image src={EyeSlash} layout="fill" id="eyes2"/></div>
                                    </span>
                                </div>
                                <button type="EntryBtn" className="btn ">Продолжить</button>
                                <div className="mt-4">
                                    <Link href="/login/">
                                        <a>
                                            <span className="EntryPassword ">Вернуться к авторизации</span>
                                        </a>
                                    </Link>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}
