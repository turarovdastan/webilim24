import HomeLayout from "../../components/HomeLayout";
import PrivateHomelayout from "../../components/Profile/private-homelayout";
import PrivateHero from "../../components/Profile/PrivateHero/private-hero";


export  default function  PrivatePage(){
    return(
        <HomeLayout>
            <PrivateHomelayout>
                <PrivateHero/>
            </PrivateHomelayout>
        </HomeLayout>
    )
}
