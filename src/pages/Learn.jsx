import { Card, Row, Col, Typography, Tabs, List, Space, Button } from 'antd';
import { PlayCircleOutlined, FileTextOutlined, DownloadOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const tutorials = [
  {
    title: '算法基础入门',
    description: '从零开始学习算法，掌握基本概念和常用算法。',
    type: '视频',
    duration: '2小时30分钟',
    level: '初级',
  },
  {
    title: '数据结构精讲',
    description: '深入理解各种数据结构的特点和应用场景。',
    type: '文章',
    duration: '阅读时间：45分钟',
    level: '中级',
  },
  {
    title: '动态规划专题',
    description: '掌握动态规划的核心思想和解题技巧。',
    type: '视频',
    duration: '3小时15分钟',
    level: '高级',
  },
];

const articles = [
  {
    title: '如何高效刷题',
    description: '分享刷题经验和技巧，帮助你更快提升算法能力。',
    author: '算法大师',
    date: '2024-03-15',
    views: 1234,
  },
  {
    title: '面试算法题解析',
    description: '常见面试算法题详细解析，助你顺利通过技术面试。',
    author: '面试官',
    date: '2024-03-10',
    views: 2345,
  },
  {
    title: '算法竞赛指南',
    description: '从入门到精通，带你走进算法竞赛的世界。',
    author: '竞赛选手',
    date: '2024-03-05',
    views: 3456,
  },
];

const TutorialCard = ({ tutorial }) => (
  <Card
    title={
      <Space>
        {tutorial.type === '视频' ? <PlayCircleOutlined /> : <FileTextOutlined />}
        {tutorial.title}
      </Space>
    }
    extra={<Button type="primary">开始学习</Button>}
    style={{ marginBottom: 16 }}
  >
    <Paragraph>{tutorial.description}</Paragraph>
    <Space>
      <span>难度：{tutorial.level}</span>
      <span>时长：{tutorial.duration}</span>
    </Space>
  </Card>
);

const ArticleCard = ({ article }) => (
  <Card
    title={article.title}
    extra={<Button type="link">阅读全文</Button>}
    style={{ marginBottom: 16 }}
  >
    <Paragraph>{article.description}</Paragraph>
    <Space>
      <span>作者：{article.author}</span>
      <span>发布时间：{article.date}</span>
      <span>阅读量：{article.views}</span>
    </Space>
  </Card>
);

const Learn = () => {
  return (
    <div className="learn-container">
      <Title level={2}>学习资源</Title>
      <Tabs defaultActiveKey="tutorials">
        <TabPane tab="教程" key="tutorials">
          <Row gutter={[16, 16]}>
            {tutorials.map((tutorial, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <TutorialCard tutorial={tutorial} />
              </Col>
            ))}
          </Row>
        </TabPane>
        <TabPane tab="文章" key="articles">
          <Row gutter={[16, 16]}>
            {articles.map((article, index) => (
              <Col span={24} key={index}>
                <ArticleCard article={article} />
              </Col>
            ))}
          </Row>
        </TabPane>
        <TabPane tab="下载资源" key="downloads">
          <Card title="算法讲义">
            <List
              dataSource={[
                '数据结构与算法基础讲义.pdf',
                '算法竞赛入门经典.pdf',
                '面试算法题集.pdf',
              ]}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button type="link" icon={<DownloadOutlined />}>
                      下载
                    </Button>,
                  ]}
                >
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Learn; 