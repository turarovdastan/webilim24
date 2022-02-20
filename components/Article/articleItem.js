import Image from 'next/image'
import imgFile from "../../assets/img/file-text 1.png";

export default function ArticleItem({el}) {
    return (
        <div className="article   py-2 relative " id={el.id}>
            <div className="flex items-center">
                <div className="w-[25px] h-[30px] relative mx-4">
                    <Image src={imgFile} layout="fill"/>
                </div>
                <p className="invDesc text-[14px]">Статья</p>
                <p className="invDesc text-[14px]">{el.created_at}</p>
                <p className="invDesc text-[14px]">Новое = 7 мин</p>
            </div>

            <div className='mt-10 '>
                <h1 className="invTitle mb-2 lg:text-[36px] md:text-[30px] text-[24px] md:w-[70%]">
                    {el.title}
                </h1>
                <p className="invDesc2 md:text-[18px]">
                    {el.subtitle}
                </p>
                <div className="flex flex-col md:flex-row md:items-center py-4 my-6">
                    <div
                        className="w-[60px] h-[60px] relative overflow-hidden flex justify-center items-center rounded-[40%]">
                        <Image src={el.author.image} layout="fill"/>
                    </div>
                    <div className="md:ml-4  md:-mt-2">
                        <h1 className="font-bold text-white  text-[16px]">{el.author.full_name}</h1>
                        <p className="invDesc2  text-[16px]">{el.author.short_bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}