import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { motion } from 'framer-motion';
import styles from '../styles/MiniNavBar.module.css';

const MiniNavBar = ({ handleClick }) => {
    return (
        <header className={styles.MiniNavBar}>
            <motion.div
                initial={{ y: '-50vh' }}
                transition={{ type: 'spring', stiffness: 300 }}
                animate={{ y: 0 }}
                className={styles.Nav}
            >
                <nav className={styles.navItems}>
                    <div className={styles.NavLinks} onClick={() => handleClick()}>
                        <NavLink
                            href='/about'
                            activeClassName={styles.navActive}
                            className='inline-flex items-center'
                        >
                            About Me.
                        </NavLink>
                        <Link
                            href='/projects'
                            activeClassName={styles.navActive}
                            className='inline-flex items-center'
                        >
                            Projects.
                        </Link>
                        <Link
                            href='/blog'
                            activeClassName={styles.navActive}
                            className='inline-flex items-center'
                        >
                            Blog.
                        </Link>
                    </div>
                </nav>
            </motion.div>
        </header>
    );
};

export default MiniNavBar;
