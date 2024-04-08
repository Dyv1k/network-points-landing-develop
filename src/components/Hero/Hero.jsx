import {countdownTimer} from "../../assets/lib/countdownTimer";
import { useEffect, useRef } from 'react';

import style from './Hero.module.scss';
import './Timer.scss';

import rocket from '../../assets/images/icons/icon-rocket.png'

const Hero = () => {
	const refTimer = useRef();

	useEffect(() => {
			countdownTimer(refTimer.current, {
				digitWrapper: true,
				date: 'Apr 9, 2024 12:00:00'
			});
	}, []);

	return (
		<section className={`${style.hero} container`}>
			<h1 className={style.hero__title}>
				Earn Subsquid Points
			</h1>
			<div className={style.hero__counter}>
				<div className={style.hero__timer} ref={refTimer}></div>
				<div className={style.hero__titles}>
					<span>Days</span>
					<span>Hours</span>
					<span>Minutes</span>
					<span>Seconds</span>
				</div>
			</div>
			<h2 className={style.hero__subtitle}>
				The more you do,<br/> the more points you get! <img src={rocket} alt="" />
			</h2>
			<div className={style.hero__text}>1 Galxe Point DOES NOT equal one Subsquid point. You will be able to see your points balance on May 15th.</div>
		</section>
	);
}
 
export default Hero;