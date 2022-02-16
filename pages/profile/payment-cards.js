import HomeLayout from "../../components/HomeLayout";
import PrivateHomelayout from "../../components/Profile/private-homelayout";
import PaymentCardsPage from "../../components/Profile/PaymentCards/payment-cards-page";


export  default function  PrivatePage(){
    return(
        <HomeLayout>
            <PrivateHomelayout>
                <PaymentCardsPage/>
            </PrivateHomelayout>
        </HomeLayout>
    )
}