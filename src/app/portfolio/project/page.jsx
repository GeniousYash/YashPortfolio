// "use client";
// import React, { useEffect, useRef } from "react";
// import Link from "next/link";
// import "./project.css";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ReactLenis } from "@studio-freight/react-lenis";
// import SplitType from "../../lib/SplitType/index";


// const Page = () => {
//     const containerRef = useRef(null);
//     const titleRef = useRef(null);
//     const dateRef = useRef(null);
//     const firstImgRef = useRef(null);
//     const imgRefs = useRef([]);
//     const copyH3Refs = useRef([]);
//     const nextProjectRef = useRef(null);
//     const nextProjectTitleRef = useRef(null);

//     useGSAP(
//         () => {
//             const tl = gsap.timeline();

//             tl.fromTo(
//                 titleRef.current,
//                 { y: 100 },
//                 { y: 0, duration: 1.5, ease: "power4.out" }
//             );

//             tl.fromTo(
//                 dateRef.current,
//                 { y: 100 },
//                 { y: 0, duration: 1.5, ease: "power4.out" },
//                 "-=1.4"
//             );

//             tl.fromTo(
//                 firstImgRef.current,
//                 { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
//                 {
//                     clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//                     duration: 1.5,
//                     ease: "power4.out",
//                 },
//                 "-=1"
//             );

//             imgRefs.current.forEach((img) => {
//                 gsap.fromTo(
//                     img,
//                     { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
//                     {
//                         clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//                         duration: 1.5,
//                         ease: "power4.out",
//                         scrollTrigger: {
//                             trigger: img,
//                             start: "top 50%",
//                         },
//                     }
//                 );
//             });

//             copyH3Refs.current.forEach((h3) => {
//                 const split = new SplitType(h3, { types: "lines" });

//                 split.lines.forEach((line) => {
//                     const wrapper = document.createElement("div");
//                     wrapper.className = "line";
//                     line.parentNode.insertBefore(wrapper, line);
//                     wrapper.appendChild(line);
//                 });

//                 gsap.from(h3.querySelectorAll(".line"), {
//                     y: 36,
//                     duration: 1,
//                     stagger: 0.02,
//                     ease: "power4.out",
//                     scrollTrigger: {
//                         trigger: h3,
//                         start: "top 80%",
//                     },
//                 });
//             });

//             return () => {
//                 ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//             };
//         },
//         { scope: containerRef, dependencies: [] }
//     );

//     return (
//         <ReactLenis root>
//             <div className="project-page" ref={containerRef}>
//                 <div className="container">
//                     <div className="project-page-title">
//                         <h1 ref={titleRef}>Projects</h1>
//                     </div>
//                     <div className="project-date">
//                         <p ref={dateRef}>2022 - 2024</p>
//                     </div>

//                     <div className="project-content">
//                         <div>
//                             <a href="https://github.com/GeniousYash/KFCcloned"><h1 className="projTitle">KFC CLone &#10138;</h1></a>
//                         </div>
//                         <div className="img img-1" ref={firstImgRef}>
//                             <Image src="/portfolioImg/project1.png" alt="" layout="fill" objectFit="cover" priority={true}/>
//                         </div>

//                         <div className="copy">
//                             <h3 ref={(el) => (copyH3Refs.current[0] = el)}>
//                                 This project is a clone of KFC's website, built using React.js. It replicates the user interface and various features of the original site to provide a seamless and responsive experience. The application leverages React's component-based architecture to manage complex UI elements efficiently, ensuring smooth navigation and reusability. Additionally, various libraries such as React Router for page navigation and possibly CSS frameworks or styled-components for design consistency are integrated. This project demonstrates strong proficiency in front-end development using modern JavaScript frameworks.
//                             </h3>
//                         </div>

//                         <div>
//                             <a href="https://github.com/GeniousYash/ExoApeCloned"><h1 className="projTitle">EXOApe Clone &#10138;</h1></a>
//                         </div>
//                         <div className="img img-2" ref={(el) => (imgRefs.current[0] = el)}>
//                             <img src="/portfolioImg/project2.png" alt="" />
//                         </div>
//                         <div className="copy">
//                             <h3 ref={(el) => (copyH3Refs.current[1] = el)}>
//                                 This project is a clone of the Exo Ape website, created using React.js, showcasing advanced animations and smooth transitions. It incorporates GSAP (GreenSock Animation Platform) and Framer Motion for dynamic animations and interactive UI elements, providing a fluid and engaging user experience. Locomotive Scroll enhances the scrolling effects, while data-scroll attributes are used to trigger animations during scroll interactions. These tools combine to deliver a highly responsive, visually appealing interface that emphasizes smooth animations and modern web design techniques.
//                             </h3>
//                         </div>


//                         <div>
//                             <a href="https://github.com/GeniousYash/BlinkItCloned"><h1 className="projTitle">BlinkIt Clone &#10138;</h1></a>
//                         </div>
//                         <div className="img img-3" ref={(el) => (imgRefs.current[1] = el)}>
//                             <img src="/portfolioImg/project3.png" alt="" />
//                         </div>

//                         <div className="copy">
//                             <h3 ref={(el) => (copyH3Refs.current[2] = el)}>
//                                 This Blinkit clone project, developed with the MERN stack (MongoDB, Express, React, Node.js), integrates advanced features to provide a fully functional platform. EJS is used for dynamic templating, while Socket.io and WebSockets enable real-time updates, such as order status or messaging. Secure user authentication is implemented via Google OAuth, enhancing user experience and privacy. Additionally, the project incorporates the Razorpay payment gateway for seamless transactions, replicating an e-commerce flow, from browsing to checkout, making it a robust and scalable real-time app.
//                             </h3>
//                         </div>


//                         <div>
//                             <a href="https://www.zenithcodecreations.com"><h1 className="projTitle">ZCC &#10138;</h1></a>
//                         </div>
//                         <div className="img img-4" ref={(el) => (imgRefs.current[2] = el)}>
//                             <img src="/portfolioImg/project4.png" alt="" />
//                         </div>
//                         <div className="copy">
//                             <h3 ref={(el) => (copyH3Refs.current[3] = el)}>
//                                 Zenith Code Creations is a professional web development and design website built to showcase freelance services. The platform is developed using React.js for dynamic and responsive user interactions, ensuring smooth navigation. It incorporates modern libraries like React Router for seamless routing and Styled Components or CSS modules for efficient styling and layout consistency. Additionally, the website focuses on providing an intuitive UI, mobile responsiveness, and a clean design. It highlights a wide range of services from web development to design, emphasizing client-centric solutions with modern technologies.
//                             </h3>
//                         </div>

//                         <div>
//                             <a href="https://www.angelsmakeovers.in"><h1 className="projTitle">Angel's Makeover &#10138;</h1></a>
//                         </div>
//                         <div className="img img-5" ref={(el) => (imgRefs.current[3] = el)}>
//                             <img src="/portfolioImg/project5.png" alt="" />
//                         </div>

//                         <div className="copy">
//                             <h3 ref={(el) => (copyH3Refs.current[4] = el)}>
//                                 The website i.e Angel's Makeover showcases a comprehensive platform for a beauty service provider, offering features such as an elegant gallery, detailed service descriptions, and an intuitive booking system. Built with HTML, CSS, and JavaScript, it ensures a responsive design for seamless access across devices. The site may utilize frameworks like Bootstrap for layout flexibility and jQuery for enhanced user interactions. This project exemplifies effective web development practices, emphasizing user experience while providing potential clients with essential information and easy access to services.
//                             </h3>
//                         </div>


//                         <div>
//                             <a href="https://finaldemond.netlify.app"><h1 className="projTitle">Neem Dental &#10138;</h1></a>
//                         </div>
//                         <div className="img img-6" ref={(el) => (imgRefs.current[4] = el)}>
//                             <img src="/portfolioImg/project6.png" alt="" />
//                         </div>
//                         <div className="copy">
//                             <h3 ref={(el) => (copyH3Refs.current[5] = el)}>
//                                 I created a dynamic website for a dental practice using React.js that incorporates modern animation techniques with Framer Motion and GSAP for a visually engaging user experience. The site features a user-friendly booking system, allowing patients to easily schedule appointments. Additionally, it showcases services and a gallery using React Elements, ensuring responsiveness across devices. This project highlights my ability to blend aesthetics with functionality, ultimately enhancing patient interaction and engagement with the dental practice.
//                             </h3>
//                         </div>


//                         <div>
//                             <a href="https://github.com/GeniousYash/LedgerBook"><h1 className="projTitle">KhataBook &#10138;</h1></a>
//                         </div>
//                         <div className="img img-6" ref={(el) => (imgRefs.current[5] = el)}>
//                             <img src="/portfolioImg/project8.png" alt="" />
//                         </div>
//                         <div className="copy">
//                             <h3 ref={(el) => (copyH3Refs.current[6] = el)}>
//                                 The Ledger Book App is built using Node.js and features an easy-to-use interface for managing financial records. It uses Express.js as the web server and EJS as the templating engine for dynamic views. Users can create, edit, and delete financial records stored in the "hisaab" directory. Key functionalities include viewing all records, editing specific entries, and deleting files. The app also allows users to create new entries with automatic timestamps. The file system (fs module) handles read/write operations, and data is managed through JSON and URL-encoded parsing.
//                             </h3>
//                         </div>

//                         <div className="next-project" ref={nextProjectRef}>
//                             <p>Next Project</p>
//                         </div>
//                         <div className="next-project-title" ref={nextProjectTitleRef}>
//                             <Link href="/">
//                                 <h2>Coming Soon...!</h2>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </ReactLenis>
//     );
// };

// export default Page;


"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./project.css";
import Image from 'next/image';

const ReactLenis = dynamic(
    () => import("@studio-freight/react-lenis").then((mod) => mod.ReactLenis),
    { ssr: false }
);

const Page = () => {
    const [isClient, setIsClient] = useState(false);
    const [gsapLoaded, setGsapLoaded] = useState(false);
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const dateRef = useRef(null);
    const firstImgRef = useRef(null);
    const imgRefs = useRef([]);
    const copyH3Refs = useRef([]);
    const nextProjectRef = useRef(null);
    const nextProjectTitleRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const loadGSAP = async () => {
                const gsapModule = await import("gsap");
                const ScrollTriggerModule = await import("gsap/ScrollTrigger");
                const SplitTypeModule = await import("../../lib/SplitType/index");

                const gsap = gsapModule.default;
                const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
                const SplitType = SplitTypeModule.default;

                gsap.registerPlugin(ScrollTrigger);

                return { gsap, ScrollTrigger, SplitType };
            };

            loadGSAP().then((modules) => {
                window.gsapModules = modules;
                setGsapLoaded(true);
            });
        }
    }, [isClient]);

    useEffect(() => {
        if (gsapLoaded && isClient) {
            const { gsap, ScrollTrigger, SplitType } = window.gsapModules;

            const tl = gsap.timeline();

            tl.fromTo(
                titleRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
            );

            tl.fromTo(
                dateRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
                "-=1.4"
            );

            tl.fromTo(
                firstImgRef.current,
                { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    duration: 1.5,
                    ease: "power4.out",
                },
                "-=1"
            );

            imgRefs.current.forEach((img) => {
                gsap.fromTo(
                    img,
                    { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
                    {
                        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                        duration: 1.5,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: img,
                            start: "top 50%",
                        },
                    }
                );
            });

            copyH3Refs.current.forEach((h3) => {
                const split = new SplitType(h3, { types: "lines" });

                split.lines.forEach((line) => {
                    const wrapper = document.createElement("div");
                    wrapper.className = "line";
                    line.parentNode.insertBefore(wrapper, line);
                    wrapper.appendChild(line);
                });

                gsap.from(h3.querySelectorAll(".line"), {
                    y: 36,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.02,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: h3,
                        start: "top 80%",
                    },
                });
            });

            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        }
    }, [gsapLoaded, isClient]);

    const content = (
        <div className="project-page" ref={containerRef}>
            <div className="container">
                <div className="project-page-title">
                    <h1 ref={titleRef}>Projects</h1>
                </div>
                <div className="project-date">
                    <p ref={dateRef}>2022 - 2024</p>
                </div>

                <div className="project-content">
                    <div>
                        <a href="https://github.com/GeniousYash/KFCcloned"><h1 className="projTitle">KFC CLone &#10138;</h1></a>
                    </div>
                    <div className="img img-1" ref={firstImgRef}>
                        <Image src="/portfolioImg/project1.png" alt="" layout="fill" objectFit="cover" priority={true} />
                    </div>

                    <div className="copy">
                        <h3 ref={(el) => (copyH3Refs.current[0] = el)}>
                            This project is a clone of KFC's website, built using React.js. It replicates the user interface and various features of the original site to provide a seamless and responsive experience. The application leverages React's component-based architecture to manage complex UI elements efficiently, ensuring smooth navigation and reusability. Additionally, various libraries such as React Router for page navigation and possibly CSS frameworks or styled-components for design consistency are integrated. This project demonstrates strong proficiency in front-end development using modern JavaScript frameworks.
                        </h3>
                    </div>

                    <div>
                        <a href="https://github.com/GeniousYash/ExoApeCloned"><h1 className="projTitle">EXOApe Clone &#10138;</h1></a>
                    </div>
                    <div className="img img-2" ref={(el) => (imgRefs.current[0] = el)}>
                        <Image src="/portfolioImg/project2.png" alt="" layout="fill" objectFit="cover" priority={true} />
                    </div>
                    <div className="copy">
                        <h3 ref={(el) => (copyH3Refs.current[1] = el)}>
                            This project is a clone of the Exo Ape website, created using React.js, showcasing advanced animations and smooth transitions. It incorporates GSAP (GreenSock Animation Platform) and Framer Motion for dynamic animations and interactive UI elements, providing a fluid and engaging user experience. Locomotive Scroll enhances the scrolling effects, while data-scroll attributes are used to trigger animations during scroll interactions. These tools combine to deliver a highly responsive, visually appealing interface that emphasizes smooth animations and modern web design techniques.
                        </h3>
                    </div>


                    <div>
                        <a href="https://github.com/GeniousYash/BlinkItCloned"><h1 className="projTitle">BlinkIt Clone &#10138;</h1></a>
                    </div>
                    <div className="img img-3" ref={(el) => (imgRefs.current[1] = el)}>
                        <Image src="/portfolioImg/project3.png" alt="" layout="fill" objectFit="cover" priority={true} />
                    </div>

                    <div className="copy">
                        <h3 ref={(el) => (copyH3Refs.current[2] = el)}>
                            This Blinkit clone project, developed with the MERN stack (MongoDB, Express, React, Node.js), integrates advanced features to provide a fully functional platform. EJS is used for dynamic templating, while Socket.io and WebSockets enable real-time updates, such as order status or messaging. Secure user authentication is implemented via Google OAuth, enhancing user experience and privacy. Additionally, the project incorporates the Razorpay payment gateway for seamless transactions, replicating an e-commerce flow, from browsing to checkout, making it a robust and scalable real-time app.
                        </h3>
                    </div>


                    <div>
                        <a href="https://www.zenithcodecreations.com"><h1 className="projTitle">ZCC &#10138;</h1></a>
                    </div>
                    <div className="img img-4" ref={(el) => (imgRefs.current[2] = el)}>
                        <Image src="/portfolioImg/project4.png" alt="" layout="fill" objectFit="cover" priority={true} />
                    </div>
                    <div className="copy">
                        <h3 ref={(el) => (copyH3Refs.current[3] = el)}>
                            Zenith Code Creations is a professional web development and design website built to showcase freelance services. The platform is developed using React.js for dynamic and responsive user interactions, ensuring smooth navigation. It incorporates modern libraries like React Router for seamless routing and Styled Components or CSS modules for efficient styling and layout consistency. Additionally, the website focuses on providing an intuitive UI, mobile responsiveness, and a clean design. It highlights a wide range of services from web development to design, emphasizing client-centric solutions with modern technologies.
                        </h3>
                    </div>

                    <div>
                        <a href="https://www.angelsmakeovers.in"><h1 className="projTitle">Angel's Makeover &#10138;</h1></a>
                    </div>
                    <div className="img img-5" ref={(el) => (imgRefs.current[3] = el)}>
                        <Image src="/portfolioImg/project5.png" alt="" layout="fill" objectFit="cover" priority={true} />
                    </div>

                    <div className="copy">
                        <h3 ref={(el) => (copyH3Refs.current[4] = el)}>
                            The website i.e Angel's Makeover showcases a comprehensive platform for a beauty service provider, offering features such as an elegant gallery, detailed service descriptions, and an intuitive booking system. Built with HTML, CSS, and JavaScript, it ensures a responsive design for seamless access across devices. The site may utilize frameworks like Bootstrap for layout flexibility and jQuery for enhanced user interactions. This project exemplifies effective web development practices, emphasizing user experience while providing potential clients with essential information and easy access to services.
                        </h3>
                    </div>


                    <div>
                        <a href="https://finaldemond.netlify.app"><h1 className="projTitle">Neem Dental &#10138;</h1></a>
                    </div>
                    <div className="img img-6" ref={(el) => (imgRefs.current[4] = el)}>
                        <Image src="/portfolioImg/project6.png" alt="" layout="fill" objectFit="cover" priority={true} />
                    </div>
                    <div className="copy">
                        <h3 ref={(el) => (copyH3Refs.current[5] = el)}>
                            I created a dynamic website for a dental practice using React.js that incorporates modern animation techniques with Framer Motion and GSAP for a visually engaging user experience. The site features a user-friendly booking system, allowing patients to easily schedule appointments. Additionally, it showcases services and a gallery using React Elements, ensuring responsiveness across devices. This project highlights my ability to blend aesthetics with functionality, ultimately enhancing patient interaction and engagement with the dental practice.
                        </h3>
                    </div>


                    <div>
                        <a href="https://github.com/GeniousYash/LedgerBook"><h1 className="projTitle">KhataBook &#10138;</h1></a>
                    </div>
                    <div className="img img-6" ref={(el) => (imgRefs.current[5] = el)}>
                        <Image src="/portfolioImg/project8.png" alt="" layout="fill" objectFit="cover" priority={true} />
                    </div>
                    <div className="copy">
                        <h3 ref={(el) => (copyH3Refs.current[6] = el)}>
                            The Ledger Book App is built using Node.js and features an easy-to-use interface for managing financial records. It uses Express.js as the web server and EJS as the templating engine for dynamic views. Users can create, edit, and delete financial records stored in the "hisaab" directory. Key functionalities include viewing all records, editing specific entries, and deleting files. The app also allows users to create new entries with automatic timestamps. The file system (fs module) handles read/write operations, and data is managed through JSON and URL-encoded parsing.
                        </h3>
                    </div>

                    <div className="next-project" ref={nextProjectRef}>
                        <p>Next Project</p>
                    </div>
                    <div className="next-project-title" ref={nextProjectTitleRef}>
                        <Link href="/">
                            <h2>Coming Soon...!</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

    return isClient ? <ReactLenis root>{content}</ReactLenis> : content;
};

export default Page;
