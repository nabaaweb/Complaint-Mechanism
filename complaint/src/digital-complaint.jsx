import video from '../public/bg.mp4';
import logo from '../public/logo.png';
import hand from '../public/hand.png';
import box from '../public/box.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {FaCheck} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
import { FaExclamation } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import validator from 'validator'



const DigitalComplaint = () => {
    const Navigate = useNavigate();
    const [direction, setDirection] = useState('rtl');

    const [sent, setSent] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [failed, setFailed] = useState(false);
    const [time, setTime] = useState(5);
    const [phone, setPhone] = useState();
    const [correctNumber, setCorrectNumber] = useState(true);
    useEffect(() => {
        if (redirect || failed) {
            setTimeout(() => {
                Navigate('/')
            }, 5000);
            setInterval(() => {
                setTime(prev => prev - 1);
            }, 1000)
        }
    }, [redirect, failed, Navigate])

    const validatePhoneNumber = (number) => {
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber)
    }

    const [complaint, setComplaint] = useState({
        phone: '',
        content: '',
        date: ''
    });
    const contentChange = (e) => {
        let date = new Date();
        setComplaint({ ...complaint, content: e.target.value, date: date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() });
        let isRTL = /[\u0600-\u06FF\u0750-\u077F]/.test(e.target.value);
        if (e.target.value == "") {
            isRTL = 'rtl';
        }
        setDirection(isRTL ? 'rtl' : 'ltr');
    }
    const phoneChange = (e) => {
        setComplaint({ ...complaint, phone: e });
    }
    const send = async (e) => {
        e.preventDefault();
        e.disabled = true;
        setSent(true);
        if (complaint.content == "") {
            setFailed(true);
        } else {
            if (validatePhoneNumber(complaint.phone)) {
                try {
                    const option = {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            complaint
                        })
                    }
                    const sendUrl = import.meta.env.VITE_SEND_URL;
                    const res = await fetch(sendUrl, option)
                    if (res) {
                        setRedirect(true);
                    }
                    // eslint-disable-next-line no-unused-vars
                } catch (e) {
                    setFailed(true);
                }
            } else {
                setCorrectNumber(false);
                setTimeout(() => {
                    setSent(false);
                }, 2000)
            }

        }
    }
    return (
        <div className='digitalComplaint'>
            {(failed || redirect) && <span className={`w-full h-full bg-[#0064B2] absolute top-0 left-0 opacity-50 z-10 transition-all`}></span>}
            <video autoPlay playsInline loop muted className="absolute top-0 left-0 w-screen h-screen object-cover -z-30">
                <source src={video} type="video/mp4" />
            </video>
            <div className='w-screen h-screen relative overflow-hidden flex justify-center '>
                <img src={hand} alt="hand" className='h-1/2 max-xl:-right-40 max-md:-right-20 max-md:top-2/3 absolute -right-4 top-1/2 translate-x-20 -translate-y-1/2 object-contain hand' />
                <img src={logo} alt="logo" className='absolute -top-8 -left-8 max-xl:w-full max-xl:h-full max-xl:top-40 max-xl:-z-10 max-xl:opacity-50 max-xl:left-0 w-[250px] h-[250px] object-contain' />
                <span className='w-screen h-screen absolute bg-[#b6d1e3] -right-1/2 -z-20 rounded-full -bottom-1/2 shadow-[#0b63a2] shadow-inner'></span>
                <img src={box} className='w-[700px] max-xl:w-full max-xl:-bottom-28 max-md:-bottom-16 absolute -bottom-24 left-1/2 -translate-x-1/2 box' alt="" />
                <span className="absolute bottom-6 left-6 font-medium text-sm text-[#0064b2] opacity-50 max-xl:top-0 max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:w-fit max-xl:h-fit pointer-events-none select-none">Copyright &copy; 2024 by Nabaa</span>
                <form className='w-1/2 max-md:w-3/4 h-fit mt-20' method='POST'>
                    <div className='relative'>
                        <PhoneInput
                            defaultCountry="lb"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e);
                                phoneChange(e);
                            }}
                            className='p-1 ring-2 w-fit rounded-lg mb-1'

                        />
                        <textarea name="complaint" id="" value={complaint.content} rows={12} className='resize-none w-full rounded-xl p-2 outline-none hover:outline-4 hover:outline-[#0064B2] transition-all bg-[#eee] text-xl max-md:text-xs font-bold text-[#0064B2] bg-opacity-50 shadow-md shadow-[#0064B2] ' dir={direction} placeholder='قم بكتابة الشكوى من هنا...' type='text' autoComplete='off' onChange={contentChange}></textarea>
                        <img src={logo} className='animate-pulse absolute w-40 max-md:w-16 max-md:bottom-0 max-md:-left-2 -bottom-5 -left-5 opacity-20' alt="logo" />
                    </div>
                    <div className='flex justify-end gap-2 mt-4'>

                        <Link className="px-12 max-xl:px-6 py-4 rounded-xl bg-transparent font-bold tracking-widest uppercase transform hover:scale-105 hover:bg-transparent outline-none border-2 border-[#0b63a2] hover:text-[#0b63a2] text-[#0b63a2] transition-colors duration-200 text-3xl max-xl:text-lg hover:bg-[#0b63a2] select-none max-md:text-sm" to={'/'}>
                            رجوع                        </Link>
                        <button type='submit' className={`px-12 max-xl:px-6 py-4 rounded-xl bg-[#0b63a2] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-transparent outline-none hover:border-2 hover:border-[#0b63a2] hover:text-[#0b63a2] transition-colors duration-200 text-3xl max-xl:text-lg max-md:text-sm select-none pointer`} onClick={send} disabled={sent}>
                            أرسل                       </button>
                    </div>
                </form>
                {!correctNumber && <div className={`w-1/2 h-1/2 max-xl:w-3/4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl backdrop-blur-md bg-opacity-60 p-4 border-4 border-[#0064B2] flex flex-col justify-evenly gap-6 z-50 pop-up`}>
                    <FaExclamation className='text-7xl flex flex-start bg-[#fc8e00] w-full text-white rounded-full max-xl:text-3xl' />
                    <p dir='rtl' className=' text-[#0064B2] text-5xl font-bold text-center max-xl:text-xl'>رقم الهاتف خاطئ</p>
                    <span className='text-[#0064B2] text-center text-2xl max-xl:text-sm'>اعد تصحيح الرقم وحاول من جديد</span>
                    <button className='text-7xl max-xl:text-2xl text-center bg-[#0064B2] w-[100px] h-[100px] max-xl:w-[50px] max-xl:h-[50px] flex justify-center items-center text-white p-2 rounded-full mx-auto cursor-pointer' onClick={() => {
                        setCorrectNumber(true);
                    }}><FaArrowRight /></button>
                </div>}

                {redirect && <div className={`w-1/2 h-1/2 max-xl:w-3/4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl backdrop-blur-md bg-opacity-60 p-4 border-4 border-[#0064B2] flex flex-col justify-evenly gap-6 z-50 pop-up`}>
                    <FaCheck className='text-7xl flex flex-start bg-[#0064B2] w-full text-white rounded-full max-xl:text-3xl' />
                    <p dir='rtl' className=' text-[#0064B2] text-5xl font-bold text-center max-xl:text-xl'>تم ارسال الشكوى بنجاح</p>
                    <span className='text-[#0064B2] text-center text-2xl max-xl:text-sm'>سيتم الانتقال للصفحة الرئيسية خلال</span>
                    <span className='text-7xl max-xl:text-2xl text-center bg-[#0064B2] w-[100px] h-[100px] max-xl:w-[50px] max-xl:h-[50px] flex justify-center items-center text-white p-2 rounded-full mx-auto'>{time}</span>
                </div>}
                {failed && <div className={`w-1/2 h-1/2 max-xl:w-3/4 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl backdrop-blur-md bg-opacity-60 p-4 border-4 border-[#0064B2] flex flex-col justify-evenly gap-6 z-50 pop-up`}>
                    <IoClose className='text-7xl flex flex-start bg-red-500 w-full text-white rounded-full max-xl:text-3xl' />
                    <p dir='rtl' className=' text-[#0064B2] text-5xl font-bold text-center max-xl:text-xl'>لم يتم ارسال الشكوى</p>
                    <span className='text-[#0064B2] text-center text-2xl max-xl:text-sm'>سيتم الانتقال للصفحة الرئيسية خلال</span>
                    <span className='text-7xl max-xl:text-2xl text-center bg-[#0064B2] w-[100px] h-[100px] max-xl:w-[50px] max-xl:h-[50px] flex justify-center items-center text-white p-2 rounded-full mx-auto'>{time}</span>
                </div>}
            </div>
        </div>
    )
}

export default DigitalComplaint
