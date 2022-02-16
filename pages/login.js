import Link from 'next/link'
import ProfileForm from "../components/Profile/ProfileForm";


export default function Login () {

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center flex-col">
                <h1 className="w-[100%] flex justify-center items-center text-white font-bold pt-[200px] text-3xl uppercase mb-4">вход</h1>
                <ProfileForm/>
                <Link href={"/"}>
                    <a className="btn2">Вернуться назад</a>
                </Link>
            </div>
        </div>
    )
}
