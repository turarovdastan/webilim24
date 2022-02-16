import Image from "next/image"
import {Data} from "./Data"


export default function PaymentCardsPage() {
    return (
        <>
            <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E] rounded-[15px]">
                <div className="grid md:grid-cols-2 gap-2">
                    {
                        Data.map((item) => {
                            return (
                                <div className="flex items-center">
                                    <div
                                        className="md:w-[95%] w-[100%] md:my-8  rounded-[15px] bg-[#494D51] md:p-8 p-4 flex flex-col justify-between">
                                        <div className="md:w-[20%] w-[40%] PaymentCardsPageImg relative md:h-[50px] h-[30px] mb-12">
                                            <Image src={item.cardLogo} layout="fill"/>
                                        </div>
                                        <div>
                                            <h1 className="text-[#D4D5D5] text-[18px] font-bold my-2">{item.cardCode}</h1>
                                            <p className="text-[#D4D5D5] text-[15px] font-light">{item.cardCode2}/{item.cardCode3}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-[100%] md:px-6 px-2 py-10 mb-10 bg-[#282B2E]  rounded-[15px]">
                <div>
                    <h1 className='title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold'>ДОБАВИТЬ КАРТУ</h1>
                    <p className="text-white text-[14px] font-light my-4">Добавьте свою карту, чтобы больше не тратить
                        время на ввод данных вручную </p>
                </div>
                <div className="mt-16 mb-8">
                    <button className="btn ">Добавить карту</button>
                </div>
                <div className="md:w-[80%] relative">
                    <p className="text-white text-[14px] font-light my-4">Для проверки карты будет снята минимальная
                        сумма в размере 1$. Сумма будет возвращена вам в течении 48 часов</p>

                </div>
            </div>
        </>
    )
}