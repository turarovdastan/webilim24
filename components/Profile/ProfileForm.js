import {Formik, Field, Form} from 'formik';
import api from "../axiosAPI/api";

export default function ProfileForm() {
    return (
        <div className="relative w-[100%] ">
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}

                onSubmit={
                    async (values, actions) => {
                        try {
                            await api.post('ru/api/v2/login/', values)
                        } catch (e) {
                            actions.setStatus('Мындай аккаунт жок')
                        }

                    }}
            >
                <Form className="flex justify-center items-center flex-col ">
                    <Field
                        className="bg-transparent sm:w-[40%]  w-[100%]  border-2 rounded-lg p-2  mb-4 text-white"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        type="email"
                    />
                    <input
                        className="bg-transparent  sm:w-[40%] w-[100%] border-2 rounded-lg p-2 mb-4 text-white"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Пароль"

                    />
                    <div>
                        <button type="submit" className="btn2 pt-2 pb-2 px-12">Войти</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
