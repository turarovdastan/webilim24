import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../assets/img/web.png'
import Lang from '../../../assets/img/til.svg'
import {LOCALES} from "../../../intl/locales";
import {languages} from "../../../constants/languages";
import {useDispatch} from "react-redux";
import {useIntl} from "react-intl";
import {setLocale} from "../../../redux/reducers/main";
import BurgerMenu from "./Burger-Menu/BurgerMenu";
import {useEffect} from "react";


export default function Header() {
    const dispatch = useDispatch();
    const {formatMessage, locale} = useIntl()

    function RU() {
        return document.querySelector(".optionRU").style.display = "none" , document.querySelector(".optionKYR").style.display = "block"

    }

    function KYR() {
        return document.querySelector(".optionRU").style.display = "block" , document.querySelector(".optionKYR").style.display = "none"

    }

    const menuBg = () => {
        if (process.browser) {
            let nav = document.querySelector('#header');
            window.pageYOffset > 15 ? nav?.classList.add('menu-bg') : nav?.classList.remove('menu-bg');
        }

    }

    useEffect(() => {
        window.onscroll = menuBg;
    },[])


    return (

        <header id="header">
            <div className="container sm:container md:container mx-auto">
                <div className="header_flex ">
                    <Link href={'/'}>
                        <div className="flex items-center justify-center">
                            <Image src={Logo} alt="Логотип" width={'40px'} height={'40px'}/>
                            <h2 className="header--logo ml-2 uppercase">
                                webilim24 <br/>online education
                            </h2>

                        </div>
                    </Link>
                    <nav className="nav-items">
                        <Link href={'/'}><a
                            className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                            {formatMessage({id: "home"})}
                        </a>
                        </Link>
                        <Link href={'/all-courses'}>
                            <a
                                className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                                Тренингдер
                            </a>
                        </Link>
                        <Link href={'it-club'}>
                            <a
                                className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                               Ишкер-клуб
                            </a>
                        </Link>

                        <Link href={'/trips'}>
                            <a
                            className="font-medium text-gray-400 text-xl leading-5  mx-4 hover:text-white nav-item">
                               Саякат
                            </a>
                        </Link>


                    </nav>
                    <button className="ml-2   lang flex" name="main">
                        <Image src={Lang}/>
                        <ul className="flex ">
                            <li className="opacity-0  languages">
                                <button aria-current="page" value={locale}
                                        onClick={(e) => dispatch(setLocale(e.target.value))}
                                        className="btn_lang ">
                                    <div className=" optionRU ">
                                        {languages.map((el) => (
                                            <button
                                                onClick={() => RU()}
                                                value={LOCALES[el.key]}
                                                className="btn_tit">
                                                {el.text1}
                                            </button>
                                        ))}
                                    </div>
                                    <div className=" optionKYR  ">
                                        {languages.map((el) => (
                                            <button
                                                onClick={() => KYR()}
                                                value={LOCALES[el.key]}
                                                className="btn_tit">
                                                {el.text}
                                            </button>
                                        ))}
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </button>
                    <div>
                        <Link href={"/login"}>
                            <a className="btn ">войти</a>
                        </Link>
                    </div>
                </div>
            </div>
            <BurgerMenu/>
        </header>

    )
}
