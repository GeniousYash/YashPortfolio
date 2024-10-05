// "use client";
// import React, { useEffect, useRef } from "react";
// import "./about.css";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import CustomEase from "gsap/CustomEase";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import SplitType from "../lib/SplitType/index";
// import { ReactLenis } from "@studio-freight/react-lenis";
// import { cvItems } from "./cvItems";



// const Page = () => {
//     const container = useRef();
//     const aboutCopyRef = useRef(null);
//     const cvWrapperRef = useRef(null);
//     const cvHeaderRef = useRef(null);
//     const cvListRef = useRef(null);
//     const heroImgRef = useRef(null);

//     useEffect(() => {
//         gsap.registerPlugin(CustomEase, ScrollTrigger);
//         CustomEase.create(
//             "hop2",
//             "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
//         );

//         const applySplitType = (element) => {
//             const splitTexts = element.querySelectorAll("h1, h2, h3");
//             splitTexts.forEach((text) => {
//                 const split = new SplitType(text, {
//                     types: "lines",
//                     tagName: "span",
//                 });

//                 split.lines.forEach((line) => {
//                     const wrapper = document.createElement("div");
//                     wrapper.className = "line-wrapper";
//                     line.parentNode.insertBefore(wrapper, line);
//                     wrapper.appendChild(line);
//                 });
//             });
//         };

//         if (aboutCopyRef.current) {
//             applySplitType(aboutCopyRef.current);
//             gsap.to(aboutCopyRef.current.querySelectorAll(".line-wrapper span"), {
//                 y: 0,
//                 stagger: 0.05,
//                 delay: 1.5,
//                 duration: 1.5,
//                 ease: "power4.out",
//             });
//         }

//         if (cvHeaderRef.current) {
//             applySplitType(cvHeaderRef.current);
//         }

//         if (cvListRef.current) {
//             applySplitType(cvListRef.current);
//         }

//         if (cvWrapperRef.current) {
//             const cvHeaderSpans =
//                 cvHeaderRef.current.querySelectorAll(".line-wrapper span");
//             const cvListSpans =
//                 cvListRef.current.querySelectorAll(".line-wrapper span");

//             gsap.set([cvHeaderSpans, cvListSpans], { y: "100%" });

//             ScrollTrigger.create({
//                 trigger: cvWrapperRef.current,
//                 start: "top 50%",
//                 onEnter: () => {
//                     gsap.to(cvHeaderSpans, {
//                         y: 0,
//                         stagger: 0.05,
//                         duration: 1.5,
//                         ease: "power4.out",
//                     });
//                     gsap.to(cvListSpans, {
//                         y: 0,
//                         stagger: 0.02,
//                         duration: 1.5,
//                         ease: "power4.out",
//                     });
//                 },
//             });
//         }

//         if (heroImgRef.current) {
//             ScrollTrigger.create({
//                 trigger: heroImgRef.current,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true,
//                 onUpdate: (self) => {
//                     const scale = 1 + self.progress * 0.5;
//                     gsap.to(heroImgRef.current.querySelector("img"), {
//                         scale: scale,
//                         ease: "none",
//                         duration: 0.1,
//                     });
//                 },
//             });
//         }

//         return () => {
//             ScrollTrigger.getAll().forEach((t) => t.kill());
//             [aboutCopyRef, cvHeaderRef, cvListRef].forEach((ref) => {
//                 if (ref.current) {
//                     const splitTexts = ref.current.querySelectorAll("h1, h2, h3");
//                     splitTexts.forEach((text) => {
//                         if (text.splitType && text.splitType.revert) {
//                             text.splitType.revert();
//                         }
//                         text.querySelectorAll(".line-wrapper").forEach((wrapper) => {
//                             wrapper.replaceWith(...wrapper.childNodes);
//                         });
//                     });
//                 }
//             });
//         };
//     }, []);

//     useGSAP(
//         () => {
//             gsap.to(".about-portrait", {
//                 clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//                 delay: 0.8,
//                 duration: 1,
//                 ease: "hop",
//             });

//             gsap.to(".about-copy-wrapper .about-copy-title h1", {
//                 y: 0,
//                 delay: 1,
//                 duration: 1.5,
//                 ease: "power4.out",
//             });
//         },
//         { scope: container }
//     );

//     return (
//         <ReactLenis root>
//             <div className="about-page" ref={container}>
//                 <div className="container">
//                     <div className="about-intro">
//                         <div className="col about-portrait-img">
//                             <div className="about-portrait">
//                                 <img src="/about/portrait.jpg" alt="Portrait" />
//                                 <p>Yash Singh</p>
//                             </div>
//                         </div>
//                         <div className="col about-copy-wrapper">
//                             <div className="about-copy-title">
//                                 <h1>Bio</h1>
//                             </div>

//                             <div className="about-copy" ref={aboutCopyRef}>
// <h3>
//     I am a dynamic and self-driven Full Stack Web Developer based in Gurugram, Haryana, with expertise in both front-end and back-end technologies. Specializing in the MERN stack, I have a proven track record of delivering high-quality, responsive, and scalable web applications. My passion for continuous learning keeps me up-to-date with the latest tools and technologies, and I thrive on solving complex problems in a collaborative environment. I'm also open to relocating for the right opportunity to further advance my skills and contribute to impactful projects.
// </h3>
// <br />
// <h3>
//     My technical skills include proficiency in JavaScript and Python, along with front-end technologies such as HTML, CSS, JavaScript, and Tailwind CSS. I have experience building intuitive interfaces using React.js, and on the back-end, I work with Mongoose, MongoDB, Express, and Node.js. I am also experienced in key areas like authentication using JWT and Bcrypt, handling web sockets, integrating payment gateways, and building robust APIs for secure web applications.
// </h3>
// <br />
// <h3>
//     In addition to my core skills, I have experience working with Git, GitHub, REST APIs, and Postman. I am passionate about creating smooth user experiences, utilizing tools like GSAP, Locomotive.js, and Framer Motion to bring animations to life. Whether it's designing responsive websites or ensuring a seamless back-end, I am committed to delivering solutions that meet both user and business needs.
// </h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="about-hero-img" ref={heroImgRef}>
//                     <img src="/about/portrait-2.png" alt="Portrait" />
//                 </div>

//                 <div className="container">
//                     <div className="cv-wrapper" ref={cvWrapperRef}>
//                         <div className="cv-header" ref={cvHeaderRef}>
//                             <h2>Get My CV Offline</h2>
//                             <h2>&#10170;</h2>
//                             <a href="/CVFolder/CV-YashSinghMERNStack.pdf" download="CV-YashSinghMERNStack"><h2>Download</h2></a>
//                         </div>

//                         <div className="cv-list" ref={cvListRef}>
// {cvItems.map((item, index) => (
//     <div className="cv-item" key={index}>
//         <div className="cv-name">
//             <h3>{item.name}</h3>
//         </div>
//         <div className="cv-year">
//             <h3>{item.year}</h3>
//         </div>
//     </div>
// ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </ReactLenis >
//     );
// };

// export default Page;


"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "./about.css";
import { cvItems } from "./cvItems";
import Image from 'next/image';

// Dynamically import ReactLenis (SSR: false)
const ReactLenis = dynamic(
    () => import("@studio-freight/react-lenis").then((mod) => mod.ReactLenis),
    { ssr: false }
);

const Page = () => {
    const [isClient, setIsClient] = useState(false);  // State for client-side check
    const [gsapLoaded, setGsapLoaded] = useState(false); // State to check if GSAP is loaded
    const container = useRef(null);
    const aboutCopyRef = useRef(null);
    const cvWrapperRef = useRef(null);
    const cvHeaderRef = useRef(null);
    const cvListRef = useRef(null);
    const heroImgRef = useRef(null);
    const aboutImage = useRef(null)

    // Check if the component is mounted (client-side)
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Load GSAP and ScrollTrigger dynamically
    useEffect(() => {
        if (isClient) {
            const loadGSAP = async () => {
                const gsapModule = await import("gsap");
                const ScrollTriggerModule = await import("gsap/ScrollTrigger");
                const CustomEaseModule = await import("gsap/CustomEase");
                const SplitTypeModule = await import("../lib/SplitType/index");

                const gsap = gsapModule.default;
                const ScrollTrigger = ScrollTriggerModule.default;
                const CustomEase = CustomEaseModule.default;
                const SplitType = SplitTypeModule.default;

                gsap.registerPlugin(ScrollTrigger, CustomEase);

                return { gsap, ScrollTrigger, CustomEase, SplitType };
            };

            loadGSAP().then((modules) => {
                window.gsapModules = modules;
                setGsapLoaded(true);  // Indicate that GSAP is loaded
            });
        }
    }, [isClient]);

    // Main GSAP animations and ScrollTrigger logic
    useEffect(() => {
        if (gsapLoaded && isClient) {
            const { gsap, ScrollTrigger, CustomEase, SplitType } = window.gsapModules;

            CustomEase.create("hop2", "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1");

            const applySplitType = (element) => {
                const splitTexts = element.querySelectorAll("h1, h2, h3");
                splitTexts.forEach((text) => {
                    const split = new SplitType(text, { types: "lines", tagName: "span" });
                    split.lines.forEach((line) => {
                        const wrapper = document.createElement("div");
                        wrapper.className = "line-wrapper";
                        line.parentNode.insertBefore(wrapper, line);
                        wrapper.appendChild(line);
                    });
                });
            };

            if (aboutCopyRef.current) {
                applySplitType(aboutCopyRef.current);
                gsap.to(aboutCopyRef.current.querySelectorAll(".line-wrapper span"), {
                    y: 0,
                    stagger: 0.05,
                    delay: 1.5,
                    duration: 1.5,
                    ease: "power4.out",
                });
            }

            if (aboutImage) {
                gsap.to(".about-portrait", {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    delay: 0.8,
                    duration: 1,
                    ease: "hop",
                });
                gsap.to(".about-copy-wrapper .about-copy-title h1", {
                    y: 0,
                    delay: 1,
                    duration: 1.5,
                    ease: "power4.out",
                });
                { scope: container }
            }

            if (cvHeaderRef.current) applySplitType(cvHeaderRef.current);
            if (cvListRef.current) applySplitType(cvListRef.current);

            if (cvWrapperRef.current) {
                const cvHeaderSpans = cvHeaderRef.current.querySelectorAll(".line-wrapper span");
                const cvListSpans = cvListRef.current.querySelectorAll(".line-wrapper span");

                gsap.set([cvHeaderSpans, cvListSpans], { y: "100%" });

                ScrollTrigger.create({
                    trigger: cvWrapperRef.current,
                    start: "top 50%",
                    onEnter: () => {
                        gsap.to(cvHeaderSpans, {
                            y: 0,
                            stagger: 0.05,
                            duration: 1.5,
                            ease: "power4.out",
                        });
                        gsap.to(cvListSpans, {
                            y: 0,
                            stagger: 0.02,
                            duration: 1.5,
                            ease: "power4.out",
                        });
                    },
                });
            }

            if (heroImgRef.current) {
                ScrollTrigger.create({
                    trigger: heroImgRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    onUpdate: (self) => {
                        const scale = 1 + self.progress * 0.5;
                        gsap.to(heroImgRef.current.querySelector("img"), {
                            scale: scale,
                            ease: "none",
                            duration: 0.1,
                        });
                    },
                });
            }



            return () => {
                ScrollTrigger.getAll().forEach((t) => t.kill());
                [aboutCopyRef, cvHeaderRef, cvListRef].forEach((ref) => {
                    if (ref.current) {
                        const splitTexts = ref.current.querySelectorAll("h1, h2, h3");
                        splitTexts.forEach((text) => {
                            if (text.splitType && text.splitType.revert) {
                                text.splitType.revert();
                            }
                            text.querySelectorAll(".line-wrapper").forEach((wrapper) => {
                                wrapper.replaceWith(...wrapper.childNodes);
                            });
                        });
                    }
                });
            };
        }
    }, [gsapLoaded, isClient]);



    // Content of the page
    const content = (
        <div className="about-page" ref={container}>
            <div className="container">
                <div className="about-intro">
                    <div className="col about-portrait-img">
                        <div className="about-portrait">
                            <Image ref={aboutImage} src="/about/portrait.jpg"
                                alt="Portrait"
                                layout="fill"
                                objectFit="cover"
                                priority={true}
                            />
                        </div>
                        <p>Yash Singh</p>
                    </div>
                    <div className="col about-copy-wrapper">
                        <div className="about-copy-title">
                            <h1>Bio</h1>
                        </div>

                        <div className="about-copy" ref={aboutCopyRef}>
                            <h3>
                                I am a dynamic and self-driven Full Stack Web Developer based in Gurugram, Haryana, with expertise in both front-end and back-end technologies. Specializing in the MERN stack, I have a proven track record of delivering high-quality, responsive, and scalable web applications. My passion for continuous learning keeps me up-to-date with the latest tools and technologies, and I thrive on solving complex problems in a collaborative environment. I'm also open to relocating for the right opportunity to further advance my skills and contribute to impactful projects.
                            </h3>
                            <br />
                            <h3>
                                My technical skills include proficiency in JavaScript and Python, along with front-end technologies such as HTML, CSS, JavaScript, and Tailwind CSS. I have experience building intuitive interfaces using React.js, and on the back-end, I work with Mongoose, MongoDB, Express, and Node.js. I am also experienced in key areas like authentication using JWT and Bcrypt, handling web sockets, integrating payment gateways, and building robust APIs for secure web applications.
                            </h3>
                            <br />
                            <h3>
                                In addition to my core skills, I have experience working with Git, GitHub, REST APIs, and Postman. I am passionate about creating smooth user experiences, utilizing tools like GSAP, Locomotive.js, and Framer Motion to bring animations to life. Whether it's designing responsive websites or ensuring a seamless back-end, I am committed to delivering solutions that meet both user and business needs.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-hero-img" ref={heroImgRef}>
                <Image src="/about/portrait-2.png" alt="Portrait" layout="fill" objectFit="cover" priority={true} />
            </div>

            <div className="container">
                <div className="cv-wrapper" ref={cvWrapperRef}>
                    <div className="cv-header" ref={cvHeaderRef}>
                        <h2>Get My CV Offline</h2>
                        <h2>&#10170;</h2>
                        <a href="../Imagesfol/CVFolder/CV-YashSinghMERNStack.pdf" download="CV-YashSinghMERNStack">
                            <h2>Download</h2>
                        </a>
                    </div>

                    <div className="cv-list" ref={cvListRef}>
                        {cvItems.map((item, index) => (
                            <div className="cv-item" key={index}>
                                <div className="cv-name">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="cv-year">
                                    <h3>{item.year}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    return isClient ? <ReactLenis root>{content}</ReactLenis> : content;
};

export default Page;
