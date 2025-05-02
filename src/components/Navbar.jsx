import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const items = [
    {
      key: 'home',
      label: <Link to="/">首页</Link>,
    },
    {
      key: 'algorithms',
      label: <Link to="/algorithms">算法</Link>,
    },
    {
      key: 'data-structures',
      label: <Link to="/data-structures">数据结构</Link>,
    },
    {
      key: 'practice',
      label: <Link to="/practice">题库</Link>,
    },
    {
      key: 'learn',
      label: <Link to="/learn">学习</Link>,
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname.split('/')[1] || 'home']}
      items={items}
      style={{ lineHeight: '64px' }}
    />
  );
};

export default Navbar; 