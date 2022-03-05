import React from "react";
import {Image, Carousel as AntCarousel} from "antd";
import crsImg1 from '../../assets/images/carousel_1.jpg'
import crsImg2 from '../../assets/images/carousel_2.jpg'
import crsImg3 from '../../assets/images/carousel_3.jpg'
import styles from './Carousel.module.css'

export const Carousel: React.FC = () => {
    return <AntCarousel autoplay className={styles.slider}>
        <Image src={crsImg1}/>
        <Image src={crsImg2}/>
        <Image src={crsImg3}/>
    </AntCarousel>
}
