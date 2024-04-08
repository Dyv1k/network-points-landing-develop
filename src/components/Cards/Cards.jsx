import style from './Cards.module.scss';
import squid from '../../assets/images/icons/icon-squid.png'
import comet from '../../assets/images/icons/icon-comet.png'
import shake from '../../assets/images/icons/icon-shake.png'

const Cards = () => {
	return (
		<section className={`${style.cards} container`}>
			<div className={style.cards__item}>
				<div className={style.cards__icon}><img src={squid} alt="" /></div>
				<h2 className={style.cards__subtitle}>Fill out this <span>DeForm</span> to get onboarded.</h2>
				<div className={style.cards__links}>
					<a href="/" className={`${style.cards__link} ${style.cards__link_filled}`}>Click here</a>
					<p>Connect your wallet and provide some basic information</p>
				</div>
			</div>
			<div className={style.cards__item}>
				<div className={style.cards__icon}><img src={comet} alt="" /></div>
				<h2 className={style.cards__subtitle}>Collect <span>Squid Wif Hat</span> NFTs by completing quests!</h2>
				<div className={style.cards__links}>
					<a href="/" className={`${style.cards__link} ${style.cards__link_filled}`}>Click here</a>
				</div>
			</div>
			<div className={style.cards__item}>
				<div className={style.cards__icon}><img src={shake} alt="" /></div>
				<h2 className={style.cards__subtitle}>Complete <span>on-chain actions with Subsquid ecosystem</span> partners.</h2>
				<div className={style.cards__links}>
					<a href="/" className={style.cards__link}>Register on Farcaster</a>
					<a href="/" className={style.cards__link}>Mint $HONEY on Berachain </a>
					<a href="/" className={style.cards__link}>Bridge $ETH to Base</a>
					<a href="/" className={style.cards__link}>Bridge $ETH to Manta Pacific</a>
					<a href="/" className={style.cards__link}>Carry out 3 swaps on ChainFlip</a>
					<a href="/" className={style.cards__link}>Hold a Milady on April 15th</a>
				</div>
			</div>
		</section>
	);
}
 
export default Cards;