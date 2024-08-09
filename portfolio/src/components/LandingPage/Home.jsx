import NavBar from "../navbar/NavBar";
import CenterText from "../center/CenterText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Black from "./Black";

const Home = () => {


     const homeRef = useRef(null)

     useGSAP(()=>{
          gsap.from(homeRef.current,{
               opacity: 0,
               delay: 1.8,
               duration: 1,
               y:50,
               scale: 1.07
          })
     })
  return (
     <div>
          <Black/>
          <div ref={homeRef} className='opacity-1 h-screen w-full bg-contain bg-center bg-[url("./assets/images/BannerHome.png")]'>
               <NavBar />
               <CenterText />
          </div>
     </div>
  )
}

export default Home
