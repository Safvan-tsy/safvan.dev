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
                            <FaHome />
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/about">
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
        </>
    )
}


export default NavBar