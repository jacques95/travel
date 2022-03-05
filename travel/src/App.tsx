import React from 'react';
import styles from './App.module.css';
import {Row, Col, Typography} from "antd";
import {productList1,productList2,productList3} from "./mockups";
import sidImg1 from './assets/images/sider_2019_12-09.png'
import sidImg2 from './assets/images/sider_2019_02-04.png'
import sidImg3 from './assets/images/sider_2019_02-04-2.png'

import {Footer, Header, Carousel, SideMenu, ProductCollection, BusinessPartners} from './components'

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles['page-content']}>

                <Row style={{marginTop: 9}}>
                    <Col span={6}>
                        <SideMenu/>
                    </Col>
                    <Col span={18}>
                        <Carousel/>
                    </Col>
                </Row>

                <ProductCollection
                    title={<Typography.Title level={3} type='warning'>爆款推荐</Typography.Title>}
                    sideImage={sidImg1}
                    products={productList1}
                />

                <ProductCollection
                    title={<Typography.Title level={3} type='danger'>新品上市</Typography.Title>}
                    sideImage={sidImg2}
                    products={productList2}
                />

                <ProductCollection
                    title={<Typography.Title level={3} type='success'>国内游推荐</Typography.Title>}
                    sideImage={sidImg3}
                    products={productList3}
                />

            </div>
            <BusinessPartners/>
            <Footer/>
        </div>
    );
}

export default App;
