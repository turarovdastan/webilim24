import {Data} from "../components/data";
import ClubProcessItem from "../components/Package/package";
import HomeLayout from "../components/HomeLayout";

export default function Packages() {
    return (
        <HomeLayout>
        <div  className="w-[100%] p-4 md:px-6 md:py-10 mb-5 bg-[#282B2E] rounded-[15px]">
            <h1 className="md:text-[24px] text-[18px] text-white font-bold my-4" >ОФОРМИТЬ ПОДПИСКУ</h1>
            <p className="md:text-[18px] md:font-bold text-[#DCDCDC]">Для получения доступа выберите свой тарифный пакет</p>
            <div className="grid md:grid-cols-2 gap-2 mt-4 md:mt-20">
                {Data.map(item => {
                    return (
                        <ClubProcessItem item={item} isRecommended={item.isRecommended}/>
                    )
                })}
            </div>
            <p className="text-[#838384] text-[14px] font-light md:w-[90%] my-4">При выборе тарифного пакета “Месяц” , с Вашей карты ежемесячно будет производится списании на условиях тарифного пакета- всего 19.00 $мес. При выборе тарифного пакета “Год” , с Вашей краты ежегодно будет производится  списание на условиях тарифногот пакета - всего 225,00 $ . При выбора тарифного пакета “Год+”,с Вашей карты ежегодно будет автоматическими.

            </p>
            <p className="text-[#838384] text-[14px] font-light">     Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет.</p>
        </div>
        </HomeLayout>
    )
}