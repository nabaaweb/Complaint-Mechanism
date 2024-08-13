import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { useState } from "react";

export function BackgroundBlogCard({title,step,img,btn,btnlink, className}) {
    const [hide,setHide] = useState(true);
    return (
        <Card
            shadow={false}
            className={`relative grid max-xl:h-[12rem] h-[20rem] w-full max-xl:max-w-[8rem] max-w-[14rem] items-end justify-center overflow-hidden text-center hover:scale-90 transition-all ${className}`} onMouseOver={()=>setHide(false)} onMouseLeave={()=>setHide(true)}
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url('../public/${img}.png')] bg-cover bg-center`}
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-[#0064b2]/80 via-[#0064b2]/80" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12 ">
                <Typography
                    variant="h2"
                    color="white"
                    className="max-xl:mb-2 mb-6 font-bold leading-[1.5] text-md"
                >
                    {title}
                </Typography>
                <Typography variant="h5" className="mb-4 text-gray-400 text-sm">
                    {step}
                </Typography>
                {btn && <button className={`px-3 py-2 rounded-full bg-[#0b63a2] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-transparent outline-none hover:border-2 hover:border-white hover:text-white transition-colors duration-100 max-xl:absolute max-xl:top-1/2 max-xl:left-1/2 max-xl:-translate-x-[50%] max-xl:-translate-y-[50%] transition-all ${hide?'hidden':""}`}>
                        <a href={`${btnlink}`}>الذهاب</a>
                        
                    </button>}
            </CardBody>
        </Card>
    );
}