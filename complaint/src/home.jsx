import { useState } from "react"
import { BackgroundBlogCard } from "./card";
import video from '../public/bg.mp4';
import protection from '../public/protection.png';
import complaint from '../public/complaint.png';
import email from '../public/email.png';
import hotline from '../public/hotline.png';
import logo from '../public/logo.png';
import hand from '../public/hand.png';
import box from '../public/box.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoPlanet } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(prev => !prev);
    }
    return (
        <div>
            <video autoPlay playsInline loop muted className="absolute top-0 left-0 w-screen h-screen object-cover -z-30">
                <source src={video} type="video/mp4" />
            </video>
            <div className='w-screen h-screen relative overflow-hidden flex justify-center '>
                <img src={hand} alt="hand" className='h-1/2 max-xl:-right-40 max-md:-right-20 max-md:top-2/3 absolute -right-4 top-1/2 translate-x-20 -translate-y-1/2 object-contain hand' />
                <img src={logo} alt="logo" className='absolute -top-8 -left-8 max-xl:w-full max-xl:h-full max-xl:top-40 max-xl:-z-10 max-xl:opacity-50 max-xl:left-0 w-[250px] h-[250px] object-contain' />
                <span className='w-screen h-screen absolute bg-[#b6d1e3] -right-1/2 -z-20 rounded-full -bottom-1/2 shadow-[#0b63a2] shadow-inner'></span>
                <img src={box} className='w-[700px] max-xl:w-full max-xl:-bottom-28 max-md:-bottom-16 absolute -bottom-24 left-1/2 -translate-x-1/2 box' alt="" />
                {show ? <div className="flex flex-col items-center gap-10 w-3/4 max-xl:w-3/4 mt-10 text-center">
                    <ul className="flex flex-wrap justify-center items-center gap-2 w-full">
                        <BackgroundBlogCard title={"البريد الالكتروني"} step={"الطريقة الاولى"} btn={true} img={email} btnlink={"mailto:complaint@nabaa-lb.com?body=اود ان اوجه شكوى"} className={'card-1'} />
                        <BackgroundBlogCard title={"الخط الساخن"} step={"الطريقة الثانية"} btn={true} img={hotline} secondBtn={true} btnlink={"tel:+96178965304"} secBtnLink={'https://wa.me/+96178965304'} secIcon={'whatsapp'} className={'card-2'} />
                        <BackgroundBlogCard title={"النقاط المحورية للحماية"} step={"الطريقة الثالثة"} img={protection} className={'card-3'} />
                        <BackgroundBlogCard title={"صندوق الشكاوى"} step={"الطريقة الرابعة"} img={complaint} className={'card-4'} />
                    </ul>
                    <button className="px-12 py-4 rounded-full bg-[#0b63a2] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-transparent outline-none hover:border-2 hover:border-[#0b63a2] select-none hover:text-[#0b63a2] transition-colors duration-200" onClick={handleClick}>
                        رجوع
                    </button>
                </div> :
                    <div className="flex flex-col items-center gap-10 max-xl:gap-4 w-1/2 max-xl:w-5/6 mt-24 max-xl:mt-6 text-center">
                        <div className="font-medium max-xl:text-3xl max-md:text-sm text-2xl bg-[#0b63a2] text-white p-5 rounded-xl leading-10 flex flex-col quote">الشكوى هي وسيلة فعّالة للتعبير عن المخاوف أو المشاكل التي يواجهها الأفراد في حياتهم اليومية. من خلال تقديم الشكوى، يمكن للمؤسسات أو الجهات المسؤولة التعرف على التحديات والمشكلات التي يعاني منها الناس والعمل على معالجتها بشكل فعّال. تهدف الشكوى إلى تحسين الخدمات، ضمان العدالة، وتعزيز التواصل بين الأفراد والجهات المعنية، مما يسهم في خلق بيئة أكثر شفافية ومسؤولية.
                            <span className="opacity-70 font-bold select-none">
                                عمل تنموي بلا حدود - نبع
                            </span>
                            <div className="flex gap-8 items-center mt-2">
                                <ul className="flex max-md:gap-2 gap-6 items-center text-2xl max-md:text-sm">
                                    <li><a href="https://www.facebook.com/Nabaa.Lebanon/" target="_blank"><FaFacebook /></a></li>
                                    <li><a href="https://www.instagram.com/nabaalebanon/" target="_blank"><FaInstagram /></a></li>
                                    <li><a href="https://www.nabaa-lb.org/" target="_blank"><IoPlanet /></a></li>
                                </ul>
                                <span className="text-sm max-md:hidden max-md:text-[10px] select-none">وسائل التواصل الخاصة بنا</span>
                            </div>
                        </div>

                        <button className="px-12 max-xl:px-6 py-4 rounded-full bg-[#0b63a2] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-transparent outline-none hover:border-2 hover:border-[#0b63a2] hover:text-[#0b63a2] transition-colors duration-200 text-3xl max-xl:text-lg select-none" onClick={handleClick}>
                            قدّم شكوى الان
                        </button>
                        <button className="z-30 relative">
                            <span className="absolute -bottom-7 -left-3 bg-[#0064B2] p-1 rounded-full text-white max-xl:text-xs transition-all select-none">جديد</span>
                            <Link className="px-12 max-xl:px-4 py-4 max-xl:py-2 rounded-full bg-transparent font-bold text-[#0b63a2] tracking-widest uppercase transform hover:scale-105 outline-none border-2 border-[#0b63a2] hover:text-white
                        hover:bg-[#0b63a2] transition-colors duration-200 text-xl max-xl:text-sm select-none" to={'/digital-complaint'}>قدّم شكوى اونلاين</Link>
                        </button>
                    </div>}


                <span className="absolute bottom-6 left-6 font-medium text-sm text-[#0064b2] opacity-50 max-xl:top-0 max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:w-fit max-xl:h-fit pointer-events-none select-none">Copyright &copy; 2024 by Nabaa</span>
            </div>
        </div>
    )
}

export default Home
