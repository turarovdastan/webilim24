import ProfileForm from "../components/Profile/ProfileForm";

export default function Login() {



    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col items-center w-[100%] ">
                    <div className="sm:w-[70%] w-[100%] relative flex flex-col items-center my-20">
                        <h1 className="text-[36px] text-white font-extrabold my-8 ">ВХОД</h1>
                        <ProfileForm/>
                    </div>
                </div>
            </div>
        </>
    )
}
