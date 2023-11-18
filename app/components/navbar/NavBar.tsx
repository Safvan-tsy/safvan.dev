import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.scss'
import {
    FaGithub,
    FaHome,
    FaLinkedin,
    FaMedapps,
    FaTwitter
} from 'react-icons/fa'

const NavBar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/">
                            <FaHome 
                            className="
                            h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
                            w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem]  "/>
                        
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/about">
                            <FaMedapps 
                            className="
                            h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
                            w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem]  "/>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/https://github.com/Safvan-tsy">
                            <FaGithub  
                            className="
                            h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
                            w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem]  "/>
                        </Link>
                    </li>
                    <li className={styles.listItem} key={"twitter"}>
                        <Link href="/https://twitter.com/Safvantsy">
                            <FaTwitter
                            className="
                            h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
                            w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem]  "/>
                        
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/https://www.linkedin.com/in/muhammed-safvan-8b912a21b">
                            <FaLinkedin  
                            className="
                            h-[1.4rem] sm:h-[1rem] md:h-[1.6rem] lg:h-[1.7rem] 
                            w-[1.4rem]  sm:w-[1rem] md:w-[1.6rem] lg:w-[1.7rem]  "/>
                        
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default NavBar