import { useEffect, useState } from 'react';
import scrollLock from 'scroll-lock';
import {useOutsideClick} from '../../hooks/useOutsideClick';

import style from './Header.module.scss';
import twitter from '../../assets/images/social/twitter.svg'
import discord from '../../assets/images/social/discord.svg'
import telegram from '../../assets/images/social/telegram.svg'
import menu from '../../assets/images/icons/icon-menu.svg'
import close from '../../assets/images/icons/icon-close.svg'
import dropdown from '../../assets/images/icons/icon-dropdown.svg'

import HeaderLogo from './HeaderLogo';

const Header = () => {
	const [open, setOpen] = useState(false);
	const openedClass = open ? style.opened : '';
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const dropdownClass = dropdownOpen? style.header__dropdown__menu_active : ''

	const menuRef = useOutsideClick(() => setOpen(false));
	const dropdownRef = useOutsideClick(() => setDropdownOpen(false));

	useEffect(() => {
		open ? scrollLock.disablePageScroll() : scrollLock.enablePageScroll();
	}, [open]);


	return (
		<header ref={menuRef} className={`${style.header} container`}>
			<HeaderLogo/>
			<div className={`${style.header__menu} ${openedClass}`}>
				<button className={style.header__close} onClick={() => setOpen(false)}>
					<img src={close} alt="Menu close" />
				</button>
				<HeaderLogo mobile />
				<div ref={dropdownRef} className={`${style.header__dropdown}`}>
					<div className={style.header__dropdown__block} onClick={()=>setDropdownOpen(!dropdownOpen)}>
						<p>Learn about $SQD</p>
						<img src={dropdown} alt="open Learn about $SQD menu"/>
					</div>
					<div className={`${style.header__dropdown__menu} ${dropdownClass}`}>
						<a href="">Whitepaper</a>
						<a href="">Tokenomics</a>
					</div>
				</div>
				<div className={style.header__social}>
					<a href="/"><img src={twitter} alt="Social twitter"/><span>Twitter</span></a>
					<a href="/"><img src={discord} alt="Social discord"/><span>Discord</span></a>
					<a href="/"><img src={telegram} alt="Social telegram"/><span>Telegram</span></a>
				</div>
				<a href="/" className={style.header__button}>Launch app</a>
			</div>
			<button className={style.header__open} onClick={() => setOpen(true)}>
				<img src={menu} alt="Menu open"/>
			</button>
		</header>
	);
}
 
export default Header;