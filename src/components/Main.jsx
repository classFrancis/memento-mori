import React from "react";
import { Flex, Layout } from 'antd';

let { Header, Content, Footer } = Layout;

function MainComponent() {


    return (
        <>
            <Layout>
                <Header style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>

                </Header>
                <Content>
                    <Flex justify="center">
                        <div>hola</div>
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