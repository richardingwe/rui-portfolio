import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
// import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
// import Logo from "../images/Rui.svg";
// import hamburger from '../images/hamburger.svg';
// import hamburgerClose from '../images/hamburgerClose.svg';
import { debounce } from '../utilities/helpers';
import styles from '../styles/NavBar.module.css';

const NavBar = ({ handleClick, navOpen, setNavOpen }) => {
	const [rotate, setRotate] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	// const location = useLocation();
	const location = useRouter();


	const handleNavClick = () => {
		handleClick();
		setRotate(true);
		setTimeout(() => {
			setRotate(false);
		}, 2000);
	};

	const handleLogoClick = () => {
		navOpen && setNavOpen(false);
	};
	const icon2 = {
		hidden: {
			pathLength: 0,
			opacity: 0,
			strokeWidth: 0,
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			strokeWidth: 1,
		},
	};

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		!navOpen &&
			setVisible(
				(prevScrollPos > currentScrollPos &&
					prevScrollPos - currentScrollPos > 70) ||
				currentScrollPos < 10
			);

		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<header
			className={styles.NavBar}
			style={{
				transform: `${visible ? 'translateY(0)' : 'translateY(-20vh)'}`,
				backgroundColor: `${navOpen || location.pathname === '/hello'
					? 'transparent'
					: 'rgba(17, 22, 31, 0.759)'
					}`,
				backdropFilter: `${navOpen || location.pathname === '/' ? 'blur(0)' : 'blur(10px)'
					}`,
				display: `${location.pathname === '/resume' ? 'none' : 'flex'
					}`,
			}}
		>
			<div className={styles.Nav}>
				<nav className={styles.navItems}>
					<Link href='/'>
						<motion.svg className={styles.svg}
							onClick={handleLogoClick}
							initial={{ x: '-10vw', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.5, when: 'beforeChildren' }}
							version='1.1'
							id='Layer_1'
							xmlns='http://www.w3.org/2000/svg'
							x='0px'
							y='0px'
							viewBox='0 0 1000 1000'
						>
							<motion.path
								className={styles.st0}
								d='M961.2,305.2c-25.2-59.6-61.3-113.1-107.3-159.1c-46-46-99.5-82.1-159.1-107.3C633.1,12.7,567.6-0.5,500-0.5
                                c-67.6,0-133.1,13.2-194.8,39.3C245.6,64,192.1,100.1,146.1,146.1c-46,46-82.1,99.5-107.3,159.1C12.7,366.9-0.5,432.4-0.5,500
                                c0,67.6,13.2,133.1,39.3,194.8c25.2,59.6,61.3,113.1,107.3,159.1c46,46,99.5,82.1,159.1,107.3c61.7,26.1,127.3,39.3,194.8,39.3
                                c67.6,0,133.1-13.2,194.8-39.3c59.6-25.2,113.1-61.3,159.1-107.3s82.1-99.5,107.3-159.1c26.1-61.7,39.3-127.3,39.3-194.8
                                C1000.5,432.4,987.3,366.9,961.2,305.2z'
							/>
							<g>
								<motion.path
									variants={icon2}
									initial='hidden'
									animate='visible'
									transition={{ delay: 2, duration: 0.5 }}
									className={styles.st1}
									d='M566,431.9c-6.7,3.2-14.2,5-22.1,5h-47.8l93.6,94c17.9-5.7,34.4-14.6,48.8-26.2c9.3-7.5,17.8-16.1,25.1-25.5
                                    c9.8-12.6,17.7-26.9,23.1-42.2c5.7-16,8.8-33.2,8.8-51.2s-3.1-35.2-8.8-51.2c-20.9-58.9-77-101-142.9-101H293.4l100.7,101H544
                                    c28.2,0,51.1,22.9,51.1,51.2c0,7.2-1.5,14.1-4.2,20.3C586,417.3,577.1,426.6,566,431.9z'
								/>
								<g>
									<motion.polygon
										variants={icon2}
										initial='hidden'
										animate='visible'
										transition={{ delay: 2, duration: 0.5 }}
										className={styles.st1}
										points='772.4,814.7 630,814.7 227.6,410.9 370,410.9 711.5,753.6 		'
									/>
								</g>
							</g>
						</motion.svg>
					</Link>
					<motion.div
						initial={{ x: '10vw', opacity: 0 }}
						transition={{ delay: 0.5 }}
						animate={{ x: 0, opacity: 1 }}
						className={styles.NavLinks}
					>
						<Link
							href='/about'
							activeClassName='navActive'
						>
							<a className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 text-bold hover:text-blue-400'>
								About Me.
							</a>
						</Link>
						<Link
							href='/projects'
							activeClassName='navActive'
						>
							<a className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-blue-400 projects'>
								Projects.
							</a>
							{/* <div className='projects-dropdown'>
								<Link href='/projects/design'>Design Projects.</Link>
								<Link href='/projects/code'>Code Projects.</Link>
								<i className='fas fa-caret-up arrow'></i>
							</div> */}
						</Link>
						<Link
							href='/blog'
							activeClassName='navActive'
						>
							<a className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-blue-400'>
								Blog.
							</a>
						</Link>
					</motion.div>
				</nav>
			</div>
		</header >
	);
};

export default NavBar;
