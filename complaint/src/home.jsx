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

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(prev => !prev);
    }
    return (
        <div>
            <video autoPlay loop muted className="absolute top-0 left-0 w-screen h-screen object-cover -z-30">
                <source src={video} type="video/mp4" />
            </video>
            <div className='w-screen h-screen relative overflow-hidden flex justify-center '>
                <img src={hand} alt="hand" className='h-1/2 max-xl:-right-40 max-md:-right-20 max-md:top-2/3 absolute -right-4 top-1/2 translate-x-20 -translate-y-1/2 object-contain hand' />
                <img src={logo} alt="logo" className='absolute -top-8 -left-8 max-xl:w-full max-xl:h-full max-xl:top-40 max-xl:-z-10 max-xl:opacity-50 max-xl:left-0 w-[250px] h-[250px] object-contain' />
                <span className='w-screen h-screen absolute bg-[#bbc5e7] -right-1/2 -z-20 rounded-full -bottom-1/2 shadow-[#0b63a2] shadow-inner'></span>
                <img src={box} className='w-[700px] max-xl:w-full max-xl:-bottom-28 max-md:-bottom-16 absolute -bottom-24 left-1/2 -translate-x-1/2 box' alt="" />
                {show ? <div className="flex flex-col items-center gap-10 w-3/4 max-xl:w-3/4 mt-10 text-center">
                    <ul className="flex flex-wrap justify-center items-center gap-2 w-full">
                        <BackgroundBlogCard title={"البريد الالكتروني"} step={"الطريقة الاولى"} btn={true} img={email} btnlink={"mailto:complaint@nabaa-lb.com?body=اود ان اوجه شكوى"} className={'card-1'}/>
                        <BackgroundBlogCard title={"الخط الساخن"} step={"الطريقة الثانية"} btn={true} img={hotline} btnlink={"tel:+96171427452"} className={'card-2'}/>
                        <BackgroundBlogCard title={"النقاط المحورية للحماية"} step={"الطريقة الثالثة"} img={protection} className={'card-3'}/>
                        <BackgroundBlogCard title={"صندوق الشكاوى"} step={"الطريقة الرابعة"} img={complaint} className={'card-4'}/>
                          

                    </ul>
                    <button className="px-12 py-4 rounded-full bg-[#0b63a2] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-transparent outline-none hover:border-2 hover:border-[#0b63a2] hover:text-[#0b63a2] transition-colors duration-200" onClick={handleClick}>
                        رجوع
                    </button>
                </div> :
                    <div className="flex flex-col items-center gap-10 w-1/2 max-xl:w-3/4 mt-32 max-xl:mt-6 text-center">
                        <p className="font-medium max-xl:text-3xl max-md:text-sm text-2xl bg-[#0b63a2] text-white p-5 rounded-xl leading-10 flex flex-col quote">الشكوى هي وسيلة فعّالة للتعبير عن المخاوف أو المشاكل التي يواجهها الأفراد في حياتهم اليومية. من خلال تقديم الشكوى، يمكن للمؤسسات أو الجهات المسؤولة التعرف على التحديات والمشكلات التي يعاني منها الناس والعمل على معالجتها بشكل فعّال. تهدف الشكوى إلى تحسين الخدمات، ضمان العدالة، وتعزيز التواصل بين الأفراد والجهات المعنية، مما يسهم في خلق بيئة أكثر شفافية ومسؤولية.
                            <span className="opacity-70 font-bold">
                                عمل تنموي بلا حدود - نبع
                            </span>
                        </p>
                        <button className="px-12 max-xl:px-6 py-4 rounded-full bg-[#0b63a2] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-transparent outline-none hover:border-2 hover:border-[#0b63a2] hover:text-[#0b63a2] transition-colors duration-200 text-3xl max-xl:text-lg" onClick={handleClick}>
                            قدم شكوى الان
                        </button>
                    </div>}


            <span className="absolute bottom-6 left-6 font-medium text-sm text-[#0064b2] opacity-50 max-xl:top-0 max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:w-fit max-xl:h-fit">Copyright &copy; 2024 by Nabaa</span>
            </div>
        </div>
    )
}

export default Home
