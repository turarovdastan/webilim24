import React, {useEffect, useState} from "react";
import {IconContext} from "react-icons";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import api from "../../axiosAPI/api";
import {useDispatch, useSelector} from "react-redux";
import {setFaq} from "../../../redux/reducers/faq";


export default function Accordion() {
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }
    const dispatch = useDispatch()
    const fetchFaq = async () => {
        dispatch(setFaq(null))
        const {data} = await api.get('api/v2/faq-list/')
        dispatch(setFaq(data))
    }

    // })
    useEffect(() => {
        fetchFaq();
    }, []);
    const data = useSelector(state => state.faq.faq)

    return (
        <IconContext.Provider value={{color: '#00ffb9', size: '25px'}}>
            <div className="AccordionSection">
                {data ? (
                    data.map((item, index) => {
                        return (
                            <div id={item.id}>
                                <div className="Wrap" onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question_ky}</h1>
                                    <span>{clicked === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
                                </div>
                                {clicked === index ? (
                                    <div className="Dropdown">
                                        <p className="answer" >{item.answer_ky}</p>
                                    </div>
                                ) : null}
                            </div>
                        )

                    })
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
        </IconContext.Provider>
    )
}
