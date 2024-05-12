import { Menu } from 'antd'
import {
  HomeOutlined,
  PlayCircleOutlined,
  TeamOutlined,
  MailOutlined,
} from "@ant-design/icons";

const SidebarItems = () => {
   
    return (
      <Menu theme="dark">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="home" icon={<PlayCircleOutlined />}>
          Video
        </Menu.Item>
        <Menu.Item key="home" icon={<TeamOutlined />}>
          Students
        </Menu.Item>
        <Menu.Item key="home" icon={<MailOutlined />}>
          Contacts
        </Menu.Item>
      </Menu>
    );
};

export default SidebarItems;
