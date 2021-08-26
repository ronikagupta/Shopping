
import { Card } from 'antd';
import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

import { Radio } from 'antd';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

export default function Collection() {
    return (
        <div>

            <Menu mode="horizontal" theme='dark' >
                <Menu.Item className="fs-2" style={{ color: "white" }}>
                    BIG Shopping
                </Menu.Item>
                <Menu.Item key="mail" style={{ marginLeft: "50%" }} className="fs-5">
                    <a href="">Home</a>
                </Menu.Item>

                <SubMenu title={<span>Collection</span>} className="fs-5">
                    <MenuItemGroup title="">
                        <Menu.Item key="setting:1">Fashion</Menu.Item>
                        <Menu.Item key="setting:2">Grocery</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="">
                        <Menu.Item key="setting:3">Mobiles</Menu.Item>
                        <Menu.Item key="setting:4">Appliances</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay" className="fs-5">
                    <a href="/Collection">Contact Us</a>
                </Menu.Item>
                <Menu.Item key="alipay" className="fs-5">
                    <a href=""><ShoppingCartOutlinedIcon />Cart</a>
                </Menu.Item>
                <Menu.Item key="mail" style={{ marginLeft: '' }} className="fs-5">
                    <Radio.Button value="default" style={{ backgroundColor: "white" }}>Login</Radio.Button>
                </Menu.Item>
            </Menu >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                <Col className="gutter-row" span={6}>
                    <Card className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://rukminim1.flixcart.com/image/580/696/kflftzk0-0/t-shirt/n/2/p/m-mtro18-rn-hs-red-navy-revolution-metronaut-original-imafwyfap9ugz9ge.jpeg?q=50" />}
                    >
                        <Meta title="up to 80% off" description="Top Selling" />
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://rukminim1.flixcart.com/image/580/696/kk5rgy80/t-shirt/j/v/b/m-refwhs-rn3cb-combo-2-ymelgnb-bydmelg-reifica-original-imafzkhghrx8hswm.jpeg?q=50" />}
                    >
                        <Meta title="up to 80% off" description="Top Selling" />
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://rukminim1.flixcart.com/image/580/696/kflftzk0-0/t-shirt/n/2/p/m-mtro18-rn-hs-red-navy-revolution-metronaut-original-imafwyfap9ugz9ge.jpeg?q=50" />}
                    >
                        <Meta title="up to 80% off" description="Top Selling" />
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card
                        className="mt-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://rukminim1.flixcart.com/image/580/696/kk5rgy80/t-shirt/j/v/b/m-refwhs-rn3cb-combo-2-ymelgnb-bydmelg-reifica-original-imafzkhghrx8hswm.jpeg?q=50" />}
                    >
                        <Meta title="up to 80% off" description="Top Selling" />
                    </Card>,
                </Col>

            </Row>
        </div>
    )
}
