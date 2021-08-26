import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Card } from 'antd';
import { Dropdown } from 'antd';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";


const { Meta } = Card;

const contentStyle = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmclMjBob3Jpem9udGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle1 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle2 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1607083205626-956228d6185d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle3 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1607082349566-187342175e2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};

const contentStyle4 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle5 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1591375275624-c2f9fdcc1dc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle6 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1590065672897-8cd8dc54a530?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle7 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1594968973184-9040a5a79963?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Mens Collection
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Women Collection
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Kids Collection
            </a>
        </Menu.Item>
    </Menu>
);
const menu1 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                iPhone
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                OnePlus
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Realme
            </a>
        </Menu.Item>
    </Menu>
);
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
class LeftMenu extends Component {
    state = {
        size: 'large',
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    render() {
        return (
            <div>

                <Menu mode="horizontal" theme='dark' >
                    <Menu.Item className="fs-2" style={{ color: "white" }}>
                        BIG Shopping
                    </Menu.Item>
                    <Menu.Item key="mail" style={{ marginLeft: "50%" }} className="fs-5">
                        <a href="/Navbar">Home</a>
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
                <Card>
                    <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }} >
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" ></img>
                        <br></br>
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                            <Button>Fashion</Button>
                        </Dropdown>
                    </Card.Grid>
                    <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"></img>
                        <br></br>
                        <Dropdown overlay={menu1} placement="bottomCenter" arrow>
                            <Button>Mobile</Button>
                        </Dropdown>
                    </Card.Grid>
                    <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=10"></img>
                        <br></br>
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                            <Button>Appliances</Button>
                        </Dropdown>
                    </Card.Grid>
                    <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"></img>
                        <br></br>
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                            <Button>Grocery</Button>
                        </Dropdown>
                    </Card.Grid>
                    <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"></img>
                        <br></br>
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                            <Button>Top Offers</Button>
                        </Dropdown>
                    </Card.Grid>
                    <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"></img>
                        <br></br>
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                            <Button>Electronics</Button>
                        </Dropdown>
                    </Card.Grid>
                    <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "15%" }}>
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"></img>
                        <br></br>
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                            <Button>Beauty/Toys & More</Button>
                        </Dropdown>
                    </Card.Grid>
                    {/* <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid> */}
                </Card>,

                <Row>
                    <Col span={12}>
                        <Carousel autoplay >
                            <div>
                                <h3 style={contentStyle}></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle1}></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle2}></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle3}></h3>
                            </div>

                        </Carousel>,
                    </Col>

                    <Col span={12}>
                        <Carousel autoplay >
                            <div>
                                <h3 style={contentStyle4}></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle5}></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle6}></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle7}></h3>
                            </div>

                        </Carousel>,
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                    <Col className="gutter-row" span={6}>
                        <Card className="ms-5"
                            hoverable
                            style={{ width: 350 }}
                            cover={<img alt="example" src="data:image/jpeg;base64,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" />}
                        >
                            <Meta title="up to 80% off" description="Top Selling" />
                        </Card>,
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card className="ms-5"
                            hoverable
                            style={{ width: 350 }}
                            cover={<img alt="example" src="data:image/jpeg;base64,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" />}
                        >
                            <Meta title="up to 80% off" description="Top Selling" />
                        </Card>,
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card className="ms-5"
                            hoverable
                            style={{ width: 350 }}
                            cover={<img alt="example" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWFRIUEhYYGBISGBgSEhESEhIVERIQGBgcGRgYGBgcIS4lHB4rHxgZJjgmKy8xNTU1GiQ7QDszPy40NTQBDAwMDw8QGA8RGTEdGB00NDQ0MTQxMTQ/MTQ0NDQ/ND8xMTQxNzQxMT8xMTQxPzQxMTExPzExMTExNDExPzE/NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABIEAACAQICBQgECgcIAwEAAAABAgADEQQhBQYSMVEiMkFhcZGhsRNygcEHFCNCUpKy0dLwFSRic4Ki4RYXM1Njk6PCg5TxQ//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A7NERAREQEREBERAREQEREBI2ppvDKSrVAGU2IIbI9tpk46vsI7/RGXrHIeJE51jue/b7hA35dMYY7qqe1gPOZCYyk3NdD2Op985jKTJVjq4M9nKqdRl5rMvqsR5TJTS+KUjZrP8AxNtj+a8UjpcTTMPrHiAOVst6y2P8tpIYPWcOQGpkdF1a/gRFRskTGw2LR77N7ra4Ita97eRmTKEREBERAREQEREBERAREQEREBERAREQEREBERAREQNf1qxNlpoN7ttH1V/qR3TUMUeW3b7pL6wYjbrtbclkHs3+JMhcSeW3bIuLJiDCwqtRGzK1E9tAyLcmVaP39hni7owGTkQNx0LvfrVPN5LyD0Ac39VfMyclZIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgc8xp+Uqeu32jI/E89/WPnKcVjHFSpuI237toz3Enlv6zecirJM9TePz0SmVIIVj4uu4fZBGzshrEdJJG+MLinLKDs2O8i9wQO2ZjUdrMhb8SM7d0pTCqCDsi43WNu3KEjNoHKXcMnKvLNHu7Zm4YZmFbBoDnP1qPP8ArJ6QWhcnI4oT3Mv3ydlZIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgcqxlPlVD1sfEz2tz39ZvMzMxNLn/AMUxXHLf1m8zM61jFl5BLNs5kIJReWVAQglYEyPQJfwbcq3ES0BPKbWcTQ2jQx+UHqP9pJPzWdAVL1j6jea/dNmlZIiICIiAiIgIiICIiAiIgIiICIiAiJaaqoIBYAtzQSATbfbjAuxKGcDeQO0yNxul1RlUKGUgl3NSmoTgAGN2Jz6st8CViQWM1loIAbO4LBTsIcr9IJsDnYb+mUUdacO7qnKXaJG04VQDa4vncA7rwNgnhmNRxtJyVSojOBcqrKWABsTYHjMhtxgaPXp5N2GRQHLf1m85sFZOSeyQQWzuODMPEzOrjCqDlGX6YlmuOVL9CVWQglYWFEuKsyFpjvvmYVmLVXOaRM6rves3qHzE2+aZqwbV8/otJzEaw4VGVDUVnZggVOVYk25RGQ39JlRLxKNofkGNscR3wK4iICIiAiIgIiICIiAiIgJ4Z7KWNszuEDnekPhJpIXUEbSMUYIjsdoEi3KAHQema/pHXp2e/wAXZqgQEM6U1cUyA+XJc7O475hYV8X8XVKeGIqLiBiC9QU1FS1U1VLliDlfZtwG/ol7SWg8bia7ViqLtBVAZmdlVbnZsgIIJJ9lvaGQmkdK4haToiKlditMvUZrqELlrFshZT83hxlito3GlKjVMaiAVkor6PkizPssxZAlgAb58OjfJLBan47YoIaz7NAlqezSItcEWuzDKxItaVvqXRQP8ZxFldvSOtbE0UQvxsouNw6eiBrVfBrSx9BFqtVsgd2c3IfYNwM939ZsNWuOnxkegwDNtYazVUqFGdnqM7AI9ypc8pchmMt0sYmob24wM0aQ2DtIzI63AZGKkA77TP0FrZiVqFSfSK4O0KjMSNhCbq195sLzVnaX9Et8pfgjn+RoGcNbK1RlFggcquyCWABIHTJwHl1O0nxnPsBz6froP5xN/Q8qp2nzmdXGPX3y/hZj1DLuEbOVUkglxFhRLqLMjxlmPVSZpWW3TIzSNf1krbGGd+BQH2sBNHqaW5JIuSMwSdxuNw3Dum665J+o1jwel3GoonMGawfqv4So+jP0vhkp0K1apTppWRGUuQpLOm1YNxtful1dI4WoD6GvTdrGwSsjkm191zNO+IuaFHD16KVFooiA7SkXRNjaG102v0dMj6OgsLTrU66U6qPSbbAUAocrEHk7uwxRu+M0iKbU0XbZ6r7CAbJG8C5Nxlyh3yzpHTjUFLvtFQwU7ORG0bA2PRfzkFj0p1VQszIyEMj5gbWWWRF9w3EHIZzJqhXTYqOWBA2myViQQQd1hmJaRkprpTy5Rz3bScnvE2vA4j0iK/HeOBBsZzZ9W6BN1d+xjTYbrdE3vV3Kmy3vstv3X5Iz8JBMREQEREBERAREQExse+zSqt9FHPcpMyZFaz1NnB4xvo4esw7RTaBxl/hFxbW9DRoUhYfMFR/rMPdMGvrhpR7hsW6g9FNadO3YVAM17CjI+yX4FdfGYh/8TEV3v/mV6j/aJmKaCi/fv6ZeMpfcew+UDK1TH6wOpHPkPfNlrnlD89Imu6pD5ZjwRvErNhqc8do84FiqeX/EfOXcC9jWItlTcg2FxbgejeZZPP8A4vfKsOcqx/0390CPwDWembEhXRjYFjsq4JyGZyE2ldO0AX2i6XvY1KVVATfoLLnNW0X/AItH95T+2s3YNm/56ZNXEY+m8L/mp7SR5yrD6cwg316Y7aiD3zLqSvDoLG4HcIVm0NP4I2/WaF+HpqY98zaWlMMebXonsrUz75Rg8NTZRtIh7UU+6XzonDHfRpHtpU/ugXlxNM810PY6n3ysgEZZ9kwn1fwbc7DUT20af3S3/ZnAjm4amvWiBfKER+uKfqGK6jSP/Kk5LXOVTsfyM6frboagmDxLojK1NUZNmpUC89QbrtbLZE7wZy6tuqdj+RlR34NcA8QD4S9o6j6RyoFwlto7lW+diRvNrG3WOMwVrAU1c7ggc9gW5knhcR8UwD16g5a0zXccarja2frMB3SKs6yaa0VheRitguyg+hWmaj7OdmKgHZ6cza816lpHD1F9LhTt0g2y1NkYMuQNuULjIjKck0ir1Kj1KhZ6lRi7O29nb8jLsk1qhpirQf0ZF6TE3Ftzbr36d0qOpIiMAQBY55ZeU2jV5FFLki3Ka/EntkBhUZ8LQqOoWoEQ1Au7lqG8GJEntXj8m3U58hCpeIiEIiICIiAiIgJr2vr7OjseeNCov1l2ffNhmqfCdU2dGYv9oIn1qiD3wOA4Xce2XpYpVABY8ZUa69fdAuGW6vNPYZScQvA+H3yipXBBABzgS2qI+UqHgn/YSePPHavnITVAcusf2FH839JN35Y7V84GMp5Y7R5zK0fR2kxbfQose8gTEXnDtHnJrQK/q2kjwoqO91+6Brmih8rR/eJ9sTcb5tNR0UPlqP7xPtCbSWzbq8/zaTVx5UaZeHXkyNZ8xJbDDKFSGimytJRRIfBmxkxRa4gVWi09IgCGWt66j9SxnqeTqfdOOvvqde15Gdm13X9Sxf7tvDOcaPObtMo7MW2sGLfPwwOXTekPvmd8IoL6Jxfo7lXSjVVgeSKavSY5+qpMwtAttYTCE9OHo3/21lGCxLDB1cG6F1ps1KoL8r4uRySOI2CvjwkVxzC0mKhg1jTAqjrYG47rSU1hxWxX21K3AVwLWttLcKR0kKRnLOktGNhqppYgkIp54terSuTdB+0O4nPdKNG4apjsYLLyajbbgbkpjK3gAP8A7Kjveis8Nbo+Lo3tVARM/Vs8lx+1fvA+6ReiWdcG7OpVyXoKCCLqjsgYA9BUXHVaSOrRyqDrU+cgnYiJQiIgIiICIiAmqfCNo+piMFUo0rbbvTttNsiyuHOf8M2uR2mBdFH7V/A/fA4T/YLHf6X+4fwx/YDG8aP+4/4J1xqcoZIHJx8H+M6Xo/Xqfgno+D3FdNSl31D/ANZ1MpKGWBznA6AqYVnFR0Y1FBGxtZAE77iAeWO2bBrCflAOCDxZvumuqeX3nuWBMjE4LDYehUr4f0j1GCBleoXao20wGyrAWsLeyVUdacKi1Fp6PqinUAWqPRVSGUG4BJfjNc1+ywODH7aH/jb75otNRZbgXtwgdHp696KQhkwShlN1Ow1wRuOby9/eZgBe2DXPM/JjM+15zIqOEpKiB0w/CbgujBL/ALSfjla/CrhhbZwij/xU/wAU5cQJTblr2jzgfRFXSrDMU6Zy3CilzulA09VvkigdBFJc/ZsyK0ppClRRXqvsKx2Ax2s232yB6Ae6RZ1mwRBHxlcxbfU/B4wOj6Kp061IVKi8slgSpZNxtuUiXn0dT+aXHZUZvtXmDqni0qYVHpsHRmcK4vYgNbpA4W3dElHaBq2u+BAwOMYO5tRc2b0djl1KDOG35R/PRO+66Z4DGj/QqfZM4AvO7vIQOyasNfB4P9xTHcgEyMTRYOKtP/EA2XS9hUTfa/QwuSD1kdOWDqk18HhOqmo7svdJiRUPjtE4fF39LtHoK2Aq0z2EZdhBB65mauanaOwzpWauzMhulJjTQFs7EoihnOe7d1TLZFO8A23EgZT1Kag3AAJ3mwv3xSJHSOO9IQFFkXmg7z1mZ2rm+p1hffIdRJjQHPf1feIE9ERKhERAREQEREBI/Sa3Cg9eXdJCab8IWkKlGnRakhYlmDWrVadlAGfIdS2duMCQNBeA7hLbUF4DuE5i2vTrzqb/APtYz/sxj+8X9ioPVxF/toYHSXorwHcJZakOA7pzz+8IHpxA7DhG80EqXX+n0nE9pp4MjwtAktYm+XYdARMui5Z/6TX6j2vbpFj2TIfSyYhqlRC5yRDtoqEEbX0TY75hVnAvA8+EQ2wuDXrB7k/rNIpc1eybj8JL/JYNepj3KomnUyNlewQDSgypjKDA8M8pjlp6y+c9nlL/ABKfrL9qB1XX3A1KtGktJNtkqh2AKiyhGBPKI6SJpDaCxef6u3XyqZy+tOsVbHI7rHeAekcZZx+C9EaRYLs1G9HktPbR7EgFSuYspz6MvYEl8HFJ6ej8OlRSrqam0ptcXdiN3UQfbNkZ5rGDxgpoEG4EnoG/PcJcbS0DK1qN8HjBxoVPsGcBptu9k7FpzSoOHxAO40nB7NgzjdM7oHWNUCxweHsRzWHNvuduuTQDfS7lWQGpjkYOgCDue3ZttaTnpZFq+qn6bdyfhlaofpt3U/wzDbEqN5A7SBLNTStJQb1EHbUQe+IVKLtbrv8AVp28RJvQPOOZN1IzCgggi4yA4TT/AO02FH/70uz01O/gZsWqeN9K20lmp8vlq1xzuj2wjboiJQiIgIiICIiAmr63YVKuwroGCgkXd0sW3831RNokNpSnd/YIHNMXqvQbfTcfu64P20kZV1Qo9Hxke3DN7xOkvhhw8DLD4UQOZVtTqfRUqD18KX+wZiNqivRXT+PD1k8xOpthZbbCwOc6O0J6NXUlHuwO1TJZRkMjcb5kfo3gqjsUTbzg+VUy3sPsqJUuB6oGr6T0NQxKoK5qA077Jpui5EC9wyH6PVIx9R8GebUrr2rSf8Mmcfi6SkCrVCbV9kGqadwOFiJGvgcJUzFYk8aeJ/rAwG1DofNxNQethUPlVEtnUFOjF/Ww7DycyS/QC/MxOJX1a5I8p6NC1xzMZWHrgP5wIapqDU+biaJ9dcSvkjShNRcQGVhXw7bJB59cbj+1TEmv0bjhuxl/Ww9P7zKjh9IjdWot61Nl8oGw/GGuPb7pS9QsUZszTuEvchb3vYXtfM59c17a0mDuwzdhqAy58bx4GeHRjwSqFHeT7oE89QmUkzWnxeknOzTorR4u7q3cR9xlyhoGsx2sTiXc/QTkoO/LuAgTOPpl6VRVVm20dRsI7gkqRvAtac8/RrD5o9gtOi4PR1NOYuf0iSzd53eyWH0YOEC7qroZauGpO6m42ksalW3IYqMr2GQEmDqvQPOpofWTa85J6q0AuGVTYWd99hva/vkxsrxB7DfygatT1Xwy7qNIdlGn90yV0HTAyRR6tNB7psQQdf1W+6VCn1HwkVB09GKN3hYe6SmhMLsVQRfeRv6Ct/OZAw3UfrEeRmThKRDKbdPEkyiZiIhCIiAiIgIiICYuIpXN5lTwiBFvh5ZfDyWNOW2pHhAhnwo4eEtthR+SZNmh1Sk4fq8IGvfFd/bK0wuR7JN/FeqVfFRY9kDgWvOA2no5bkbxb+k1ttCi3TO46Z1bDsptuW27rmE2qg+j4QOKnRTKbqSDxFwZUKeJXm1HHY7j3zsTapD6PhLTaoj6PhA5KmMxy7qtT2sW85fpac0gGUFyQSAQadM3F/VnUDqgPo+EoOpouDs8OiBYKG+4zzpt08OmbmdC9XhGJ0IjejsoDIb34LnccTe8DT1Q8JdSgx6Jto0N1S4uh+qBreHwp4TOq4A8JPJoy3RJBsCOECL0FhtmmRb57e6SfopkYbD7II67+UvejgYQpSoUplGn3SpaY4QMUUpcSnmJkBZ6FgVREQEREBERAREQEREDyexEBERAREQPDPIiA2BwHdGwOA7hEQPNgcB3CeejXgO4RECrZHAd0otEQK9kcB3Ty08iB7K4iAiIgIiICIiAiIgIiICIiB//2Q==" />}
                        >
                            <Meta title="up to 80% off" description="Top Selling" />
                        </Card>,
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            className="ms-5"
                            hoverable
                            style={{ width: 350 }}
                            cover={<img alt="example" src="data:image/jpeg;base64,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" />}
                        >
                            <Meta title="up to 80% off" description="Top Selling" />
                        </Card>,
                    </Col>

                </Row>

            </div>

        );
    }
}
export default LeftMenu;