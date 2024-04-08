import style from './Footer.module.scss';
import logo from '../../assets/images/logo.png'

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={`${style.footer__top} container`}>
				<div className={style.footer__note}>
					<span>You will be able to see your points balance on</span>
					<span>12:00AM UTC<br/> MAY 15th 2024</span>
				</div>
			</div>
			<div className={style.footer__bottom}>
				<div className={`${style.footer__inner} container`}>
					<a href="/" className={style.footer__logo}>
						<img src={logo} alt="Footer logo" />
						<span>Subsquid</span>
					</a>
					<div className={style.footer__copy}>&copy; 2024 subsquidpoints.io</div>
				</div>
			</div>
		</footer>
	);
}
 
export default Footer;