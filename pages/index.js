import Head from 'next/head'
import Image from 'next/image'
import DualDiv from '../components/common/DualDiv';
import DualSlider from '../components/common/DualSlider';
import HomeHeroSlider from '../components/sliders/HomeHeroSlider'
import style from '../styles/modules/home.module.scss';


export default function Home() {
  return (
    <div>
      <HomeHeroSlider />

      <section className={style.second_card}>
        <Image src="/static/images/card/home_second_card1.webp" width="100%" height="100%" layout="responsive" objectFit="contain" alt="" />
        <Image src="/static/images/card/home_second_card2.webp" width="100%" height="100%" layout="responsive" objectFit="contain" alt="" />
        <Image src="/static/images/card/home_second_card3.webp" width="100%" height="100%" layout="responsive" objectFit="contain" alt="" />
      </section>

      <section className="container section">
        <DualSlider />
      </section>

      <section className={style.product_section}>
        <DualDiv />
      </section>

    </div>
  )
}
