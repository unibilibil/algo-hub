import { Card, Row, Col, Typography, Carousel } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home = () => {
  const learningPaths = [
    {
      title: '初学者',
      description: '从基础开始，循序渐进学习算法与数据结构',
      content: '推荐学习顺序：基础数据结构 → 简单算法 → 进阶数据结构 → 复杂算法',
    },
    {
      title: '面试者',
      description: '针对面试需求，重点突破高频考点',
      content: '重点掌握：数组/字符串处理、链表、树、动态规划、回溯算法',
    },
    {
      title: '竞赛选手',
      description: '面向算法竞赛，深入理解高级算法',
      content: '进阶内容：图论、数论、计算几何、高级数据结构',
    },
  ];

  const popularAlgorithms = [
    {
      title: '排序算法',
      description: '快速排序、归并排序、堆排序等',
      link: '/algorithms#sorting',
    },
    {
      title: '动态规划',
      description: '背包问题、最长子序列等',
      link: '/algorithms#dp',
    },
    {
      title: '图论算法',
      description: 'Dijkstra、Floyd、拓扑排序等',
      link: '/algorithms#graph',
    },
  ];

  return (
    <div className="home-container">
      <section className="intro-section">
        <Title level={2}>什么是算法与数据结构</Title>
        <Paragraph>
          算法是解决问题的方法和步骤，数据结构是存储和组织数据的方式。
          它们是计算机科学的基础，帮助我们更高效地处理数据和解决问题。
        </Paragraph>
      </section>

      <section className="learning-paths">
        <Title level={3}>学习路线推荐</Title>
        <Row gutter={[16, 16]}>
          {learningPaths.map((path, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card title={path.title} bordered={false}>
                <p>{path.description}</p>
                <p>{path.content}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="popular-algorithms">
        <Title level={3}>热门算法推荐</Title>
        <Row gutter={[16, 16]}>
          {popularAlgorithms.map((algo, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Link to={algo.link}>
                <Card hoverable>
                  <Title level={4}>{algo.title}</Title>
                  <Paragraph>{algo.description}</Paragraph>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Home; 