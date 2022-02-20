import React, {Component} from "react";
import Image from "next/image";
import Img from "../../../assets/img/To_be_youself 1.png";


class CommentList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {text,full_name,avatar} = this.props
        return (
            <div className="flex flex-col md:flex-row md:items-center my-6">
                <div className="relative w-[80px] h-[80px] rounded-[50%] overflow-hidden mx-6">
                   {avatar ? (<Image src={avatar} layout="fill"/>)  : (<Image src={Img} layout="fill"/>) }
                </div>
                <div className="md:w-[80%] w-[100%]">
                    <h1 className="text-white text-[20px] font-bold">{full_name}</h1>
                    <p className="text-[#9099A3] my-1 text-[14px] font-light">{text}</p>
                    <div className="flex">
                        <button
                            className="text-[#9099A3] bg-transparent text-[14px]  font-light border-0">Нравится
                        </button>
                        <button
                            className=" bg-transparent border-0 text-[#9099A3] text-[14px] font-light mx-4">Ответить
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentList