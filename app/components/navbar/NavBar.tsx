import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
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
                    {/* <li className={styles.listItem}>
                        <img className={styles.img} src="/favicon.ico" alt="Logo" />
                    </li> */}
                    <li className={styles.listItem}>
                        <Link href="/page1">
                            <FaHome />
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/page2">
                            <FaMedapps />
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/page3">
                            <FaGithub />
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/page4">
                            <FaTwitter />
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/page4">
                            <FaLinkedin />
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* <nav className={styles.toggleNav}>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul className={styles.list}>
                                
                                <li className={styles.listItem}>
                                    <Link href="/page1">
                                        <FaHome />
                                    </Link>
                                </li>
                                <li className={styles.listItem}>
                                    <Link href="/page2">
                                        <FaMedapps />
                                    </Link>
                                </li>
                                <li className={styles.listItem}>
                                    <Link href="/page3">
                                        <FaGithub />
                                    </Link>
                                </li>
                                <li className={styles.listItem}>
                                    <Link href="/page4">
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li className={styles.listItem}>
                                    <Link href="/page4">
                                        <FaLinkedin />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    )
}


export default NavBar