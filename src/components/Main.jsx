import React from "react";
import '../styles/main.css'
import { Flex, Layout, Card } from 'antd';
import { imagesUrl } from "./ImagesUrl";
import LogOutButton from "./LogoutBtn";


let { Meta } = Card;
let { Header, Content, Footer } = Layout;

function MainComponent() {


    return (
        <>
            <Layout>
                <Header style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <LogOutButton />
                </Header>
                <Content style={{marginTop: "50px"}}>
                    <Flex className="container-main" justify="center" gap="large" align="center">
                        <Card
                            hoverable
                            style={{
                            width: 240,
                            }}
                            cover={<img alt="manga" src={imagesUrl.berserk4}/>}
                        >
                            <Meta title="Berserk tomo 4"/>
                        </Card>
                        <Card
                            hoverable
                            style={{
                            width: 240,
                            }}
                            cover={<img alt="manga" src={imagesUrl.berserk5}/>}
                        >
                            <Meta title="Berserk tomo 5"/>
                        </Card>
                        <Card
                            hoverable
                            style={{
                            width: 240,
                            }}
                            cover={<img alt="manga" src={imagesUrl.berserk14}/>}
                        >
                            <Meta title="Berserk tomo 14"/>
                        </Card>
                        <Card
                            hoverable
                            style={{
                            width: 240,
                            }}
                            cover={<img alt="manga" src={imagesUrl.berserk15}/>}
                        >
                            <Meta title="Berserk tomo 15"/>
                        </Card>
                    </Flex>
                </Content>
                <Footer style={{
                    textAlign: 'center',
                }}>
                    {new Date().getFullYear()}
                </Footer>
            </Layout>
        </>
    )

}

export default MainComponent;