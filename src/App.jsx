import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Space } from 'antd';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Algorithms from './pages/Algorithms';
import DataStructures from './pages/DataStructures';
import Practice from './pages/Practice';
import Learn from './pages/Learn';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/algorithms" element={<Algorithms />} />
              <Route path="/data-structures" element={<DataStructures />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/learn" element={<Learn />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Space direction="vertical">
            <div>AlgoHub ©{new Date().getFullYear()} Created with React and Ant Design</div>
            <div>联系方式：<a href="mailto:2623343702@qq.com">2623343702@qq.com</a></div>
          </Space>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
