import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.scss'
import {
    FaGithub,
    FaHome,
    FaLinkedin,
    FaMedapps,
    FaTwitter,
    FaRegUserCircle
} from 'react-icons/fa'
const socialMediaLinks = [
    {
        name: "Home",
        href: "/",
        icon: (<FaHome className="
        h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
        w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem] "/>),
        isExternal: false
    },
    {
        name: "About",
        href: "/about",
        icon: (<FaRegUserCircle className="
        h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
        w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem] "/>),
        isExternal: false
    },
    {
        name: "Projects",
        href: "/projects", icon: (<FaMedapps className="
        h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
        w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem] "/>),
        isExternal: false
    },
    {
        name: "Github",
        href: "https://github.com/Safvan-tsy",
        icon: (<FaGithub className="
        h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
        w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem] "/>),
        isExternal: true
    },
    {
        name: "Twitter",
        href: "https://twitter.com/Safvantsy",
        icon: (<FaTwitter className="
         h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
         w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem] "/>),
        isExternal: true
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/muhammed-safvan-8b912a21b",
        icon: (<FaLinkedin className="
        h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
        w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem] "/>),
        isExternal: true
    },
];

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {socialMediaLinks.map((link, index) => (
                    <li className={`${styles.listItem}`} key={index}>
                        {link.isExternal ? (
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        ) : (
                            <Link href={link.href} className={styles.tooltip}>
                                {link.icon}
                                <div className={`${styles.tooltip_container}`}>
                                    <div className={`${styles.tooltip_text}`}>{link.name}</div>
                                    <div className={`${styles.tooltip_text_buttom}`}></div>
                                </div>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
