
import {Data} from "./data"


export default function  MyPurchasesHeroMd(){
    return(
        <section id="MyPurchasesHeroMd">
            <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E] rounded-[15px]">
                <h1 className="text-white text-[24px] font-bold">МОИ ПОКУПКИ </h1>
                <div className=" mt-10 border-b px-3 py-3 border-[#5D5C5F]">
                    <p className="text-[#959595] font-bold">Дата</p>
                    {
                        Data.map((item,index)=>{
                            return(
                                <div className="flex items-center">
                                    <span className="font-bold text-white mx-2">{index + 1}</span>
                                    <div className="  border-b px-3 py-3 border-[#5D5C5F]">
                                        <p className="text-[#BDBDBD] font-bold">{item.date}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" mt-10 border-b px-3 py-3 border-[#5D5C5F]">
                    <p className="text-[#959595] font-bold">Описание</p>
                    {
                        Data.map((item,index)=>{
                            return(
                                <div className="flex items-center">
                                    <span className="font-bold text-white mx-2">{index + 1}</span>
                                    <div className="  border-b px-3 py-3 border-[#5D5C5F]">
                                        <p className="text-[#BDBDBD] font-bold">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" mt-10 border-b px-3 py-3 border-[#5D5C5F]">
                    <p className="text-[#959595] font-bold">Сумма </p>
                    {
                        Data.map((item ,index)=>{
                            return(
                                <div className="flex items-center">
                                    <span className="font-bold text-white mx-2">{index + 1}</span>
                                    <div className="  border-b px-3 py-3 border-[#5D5C5F]">
                                        <p className="text-[#BDBDBD] font-bold">{item.summ}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}