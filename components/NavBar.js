import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { debounce } from '../utilities/helpers';
import styles from '../styles/NavBar.module.css';
import { useThemeContext } from '../context/state';
import useScrollListener from 'hooks';

const NavBar = ({ handleClick, navOpen, setNavOpen }) => {
	const [rotate, setRotate] = useState(false);
	const location = useRouter();


	const { theme, dispatch } = useThemeContext();

	const handleChangeTheme = () => {
		dispatch({ type: 'setTheme' });
	};

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

	const [navClassList, setNavClassList] = useState([]);
	const scroll = useScrollListener();

	// update classList of nav on scroll
	useEffect(() => {
		const _classList = [];

		if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
			_classList.push("nav-bar--hidden");

		setNavClassList(_classList);
	}, [scroll.y, scroll.lastY]);


	return (
		<header
			className={`${styles.NavBar} ${navClassList.join(" ")}`}
			style={{
				backgroundColor: `${theme.light || (navOpen || location.pathname === '/')
					? 'transparent'
					: 'rgba(17, 22, 31, 0.759)'
					}`,
				backdropFilter: `${navOpen || location.pathname === '/' ? 'blur(0)' : 'blur(10px)'
					}`,
			}}
		>
			<div className={styles.Nav}>
				<nav className={styles.navItems} style={{ color: `${location.pathname === '/' ? '#fff' : !theme.light ? '#fff' : '#000'}` }}>
					<Link href='/'>
						<a className='mx-0'>
							<motion.img
								src='/rui-svg.svg'
								alt=''
								className={styles.logo}
								initial={{ x: '-10vw', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: `${location.pathname == '/' ? 4.5 : 0.5}`, when: 'beforeChildren' }}
							/>
						</a>
					</Link>
					<motion.div
						initial={{ y: '-10vw', opacity: 0 }}
						transition={{ delay: `${location.pathname == '/' ? 5.8 : 1.8}` }}
						animate={{ y: 0, opacity: 1 }}
						onClick={handleChangeTheme}
						className={`inline-flex items-center ${styles.theme}`}>
						<img className={styles.theme_icon} src={`${!theme.light ? '/images/light-mode.png' : '/images/night-mode.png'}`} alt="" />
					</motion.div>
					<motion.div
						initial={{ x: '10vw', opacity: 0 }}
						transition={{ delay: `${location.pathname == '/' ? 4.5 : 0.5}` }}
						animate={{ x: 0, opacity: 1 }}
						className={styles.NavLinks}
					>

						<Link
							href='/about'
						>
							<a
								className={`inline-flex items-center ${location.pathname.includes('/about') && !theme.light ? `${styles.navActive}` : location.pathname.includes('/about') && theme.light ? `${styles.navActiveLight}` : ''}`}
							>
								About Me.
							</a>
						</Link>
						<Link
							href='/projects'
							className='projects'
						>
							<a
								className={`inline-flex items-center ${styles.projects}  ${location.pathname.includes('/projects') && !theme.light ? `${styles.navActive}` : location.pathname.includes('/projects') && theme.light ? `${styles.navActiveLight}` : ''}`}
							>
								Projects.
								<div
									className={`${styles.projectsDropdown} dropdown`}
									style={{
										backgroundColor: `${theme.light ? '#eeeeee' : '#25252554'}`,
										color: `${!theme.light ? '#fff' : '#11161f'}`,
										borderBottom: `${!theme.light ? '3px solid white' : '3px solid #11161f'}`,
									}}>
									<Link href='/projects/design'>
										Design Projects.
									</Link>
									<Link href='/projects/code'>
										Code Projects.
									</Link>
									<svg className={styles.arrow}
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="caret-up"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 320 512">
										<path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z">
										</path>
									</svg>
								</div>
							</a>
						</Link>
						<Link
							href='/blog'
						>
							<a className={`inline-flex items-center ${location.pathname.includes('/blog') && !theme.light ? `${styles.navActive}` : location.pathname.includes('/blog') && theme.light ? `${styles.navActiveLight}` : ''}`}>
								Blog.
							</a>
						</Link>
						<Link
							href='/contact'
						>
							<a className={`inline-flex items-center ${location.pathname.includes('/contact') && !theme.light ? `${styles.navActive}` : location.pathname.includes('/contact') && theme.light ? `${styles.navActiveLight}` : ''}`}>
								Contact Me.
							</a>
						</Link>
					</motion.div>
					<div
						className={`${styles.hamburger} ${rotate ? `${styles.rotate}` : ' '}`}
						onClick={handleNavClick}
					>
						<motion.img
							initial={{ x: '10vw', opacity: 0 }}
							transition={{ delay: `${location.pathname == '/' ? 5.5 : 1.5}` }}
							animate={{ x: 0, opacity: 1 }}
							src={location.pathname === '/' && navOpen ? '/images/hamburgerClose.svg' : location.pathname === '/' && !navOpen ? '/images/hamburger.svg' : navOpen ? '/images/hamburgerClose.svg' : '/images/hamburger.svg'}
							// src={location.pathname === '/' && navOpen ? '/images/hamburgerClose.svg' : location.pathname === '/' && !navOpen ? '/images/hamburger.svg' : theme.light && navOpen ? '/images/hamburgerCloseDark.svg' : !theme.light && navOpen ? '/images/hamburgerClose.svg' : theme.light && !navOpen ? '/images/hamburgerDark.svg' : '/images/hamburger.svg'}
							className={`${styles.svg}`}
							alt='hamburger'
						/>
					</div>
				</nav>
			</div>
		</header >
	);
};

export default NavBar;
