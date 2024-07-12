import React from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ConfigProvider, Space } from 'antd';
import { useAuth0 } from "@auth0/auth0-react";

const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const LogOutButton = () => {
  const { logout } = useAuth0();
  return (
    <Space>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(135deg, ${colors2.join(', ')})`,
              colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors2).join(', ')})`,
              colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors2).join(', ')})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Button type="primary" size="large" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
          Log Out
        </Button>
      </ConfigProvider>
    </Space >
  );
};

export default LogOutButton;