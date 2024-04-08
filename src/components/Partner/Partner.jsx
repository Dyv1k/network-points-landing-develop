import style from './Partner.module.scss';

import arbitrum from '../../assets/images/partners/partner-arbitrum.png'
import coinlist from '../../assets/images/partners/partner-coinlist.png'
import quadro from '../../assets/images/partners/partner-quadro.png'
import okx from '../../assets/images/partners/partner-okx.svg'
import lava from '../../assets/images/partners/partner-lava.png'
import deform from '../../assets/images/partners/partner-deform.png'
import brackets from '../../assets/images/partners/partner-brackets.png'
import galxe from '../../assets/images/partners/partner-galxe.png'
import n from '../../assets/images/partners/partner-n.png'
import c from '../../assets/images/partners/partner-c.png'

const Partner = () => {
	return (
		<section className={`${style.partner} container`}>
			<h2 className={style.partner__title}>Campaign Partners</h2>
			<div className={style.partner__items}>
				<a href="/"><img src={coinlist} alt="Partner coinlist logo" /></a>
				<a href="/"><img src={okx} alt="Partner okx logo" /></a>
				<a href="/"><img src={arbitrum} alt="Partner arbitrum logo" /></a>
				<a href="/"><img src={quadro} alt="Partner quadro logo" /></a>
				<a href="/"><img src={lava} alt="Partner lava logo" /></a>
				<a href="/"><img src={deform} alt="Partner deform logo" /></a>
				<a href="/"><img src={galxe} alt="Partner galxe logo" /></a>
				<a href="/"><img src={brackets} alt="Partner brackets logo" /></a>
				<a href="/"><img src={n} alt="Partner n logo" /></a>
				<a href="/"><img src={c} alt="Partner c logo" /></a>
			</div>
		</section>
	);
}
 
export default Partner;