import Link from "next/link";
import {useRouter} from "next/router";


export default function PrivateHeader() {
    const router = useRouter()
    function Links(el) {

        return (
            <div className={el.links}>
                <Link href={el.links}><a
                    onClick={() => router.replace(`${el.links}`)}
                    className="text-[#8C8C8C] font-bold text-[17px] hover:text-white hover:ease-in-out	"
                >{el.name}</a>
                </Link>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col PrivateHeader">
                <div className="flex items-center my-3">
                    <div className="privateIcone mx-5">
                        <i className="far fa-user "/>
                    </div>
                    <Links links="/profile/private-page" name={"Личные данные"}/>
                </div>
                <div className="flex items-center my-3">
                    <div className="privateIcone mx-5">
                        <i className="far fa-credit-card"/>
                    </div>
                    <Links links="/profile/subscription" name={"Подписка"}/>
                </div>
                <div className="flex items-center my-3">
                    <div className="privateIcone mx-5">
                        <i className="fas fa-shopping-basket"/>
                    </div>
                    <Links links="/profile/my-purchases" name={"Мои покупки"}/>
                </div>
                <div className="flex items-center my-3">
                    <div className="privateIcone mx-5">
                        <i className="far fa-wallet"/>
                    </div>
                    <Links links="/profile/payment-cards" name={"Платежные карты"}/>
                </div>
                <div className="flex items-center my-3">
                    <div className="privateIcone mx-5">
                        <i className="far fa-bell"/>
                    </div>
                    <Links links="/profile/notifications" name={"Уведомления"}/>
                </div>
                <div className="flex items-center my-3">
                    <div className="privateIcone mx-5">
                        <i className="fal fa-comment-alt"/>
                    </div>
                    <Links links="/profile/comments" name={"Комментарии"}/>
                </div>
                <div className="flex items-center my-3">
                    <div className="privateIcone mx-5">
                        <i className="fal fa-sign-out"/>
                    </div>
                    <Links links="/" name={"Выйти"}/>
                </div>
            </div>
        </>
    )
}
