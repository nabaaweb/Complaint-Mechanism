import { useState } from "react"
import { BackgroundBlogCard } from "./card";
const Home = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(prev => !prev);
    }
    return (
        <div>
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-30">
                <source src="../public/bg.mp4" type="video/mp4" />
            </video>
            <div className='w-screen h-screen relative overflow-hidden flex justify-center '>
                <img src="../public/hand.png" alt="hand" className='h-1/2 max-xl:-right-40 max-md:-right-20 max-md:top-2/3 absolute right-0 top-1/2 translate-x-20 -translate-y-1/2 object-contain hand' />
                <img src="../public/logo.png" alt="" className='absolute -top-5 -left-5 max-xl:w-full max-xl:h-full max-xl:top-40 max-xl:-z-10 max-xl:opacity-50 max-xl:left-0 w-[200px] h-[200px] object-contain' />
                <span className='w-screen h-screen absolute bg-[#bbc5e7] -right-1/2 -z-20 rounded-full -bottom-1/2 shadow-[#0b63a2] shadow-inner'></span>
                <img src="../public/box.png" className='w-[700px] max-xl:w-full max-xl:-bottom-28 max-md:-bottom-16 absolute -bottom-24 left-1/2 -translate-x-1/2 box' alt="" />
                {show ? <div className="flex flex-col items-center gap-10 w-3/4 max-xl:w-3/4 mt-10 text-center">
                    <ul className="flex flex-wrap justify-center items-center gap-5">
                        <BackgroundBlogCard></BackgroundBlogCard>
                        <BackgroundBlogCard></BackgroundBlogCard>
                        <BackgroundBlogCard></BackgroundBlogCard>   
                        <BackgroundBlogCard></BackgroundBlogCard>   

                    </ul>
                    <button className="px-12 py-4 rounded-full bg-[#0b63a2] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-transparent outline-none hover:border-2 hover:border-[#0b63a2] hover:text-[#0b63a2] transition-colors duration-200" onClick={handleClick}>
                        رجوع
                    </button>
                </div> :
                    <div className="flex flex-col items-center gap-10 w-1/2 max-xl:w-3/4 mt-10 text-center">
                        <p className="font-bold max-xl:text-3xl max-md:text-sm text-sm bg-[#0b63a2] text-white p-5 rounded-xl leading-8 flex flex-col">الشكوى هي وسيلة فعّالة للتعبير عن المخاوف أو المشاكل التي يواجهها الأفراد في حياتهم اليومية. من خلال تقديم الشكوى، يمكن للمؤسسات أو الجهات المسؤولة التعرف على التحديات والمشكلات التي يعاني منها الناس والعمل على معالجتها بشكل فعّال. تهدف الشكوى إلى تحسين الخدمات، ضمان العدالة، وتعزيز التواصل بين الأفراد والجهات المعنية، مما يسهم في خلق بيئة أكثر شفافية ومسؤولية.
                            <span className="opacity-70">
                                عمل تنموي بلا حدود - نبع
                            </span>
                        </p>
                        <button className="px-12 py-4 rounded-full bg-[#0b63a2] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-transparent outline-none hover:border-2 hover:border-[#0b63a2] hover:text-[#0b63a2] transition-colors duration-200" onClick={handleClick}>
                            قدم شكوى الان
                        </button>
                    </div>}


            </div>
        </div>
    )
}

export default Home
