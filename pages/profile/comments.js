import HomeLayout from "../../components/HomeLayout";
import PrivateHomelayout from "../../components/Profile/private-homelayout";
import CommenstPage from "../../components/Profile/Comments/comments-page";


export default function  Comments(){
    return(
        <HomeLayout>
            <PrivateHomelayout>
                <CommenstPage/>
            </PrivateHomelayout>
        </HomeLayout>
    )
}