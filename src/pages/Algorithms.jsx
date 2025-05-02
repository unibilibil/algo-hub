import { Card, Row, Col, Typography, Tabs, Space } from 'antd';
import { CodeOutlined, ClockCircleOutlined, DatabaseOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const algorithmCategories = [
  {
    key: 'sorting',
    title: '排序算法',
    algorithms: [
      {
        name: '冒泡排序',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        description: '通过重复地遍历要排序的数列，比较相邻元素并交换它们的位置。',
      },
      {
        name: '快速排序',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(log n)',
        description: '采用分治法，选择一个基准元素，将数组分为两部分。',
      },
    ],
  },
  {
    key: 'searching',
    title: '搜索算法',
    algorithms: [
      {
        name: '二分搜索',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        description: '在有序数组中查找特定元素的搜索算法。',
      },
      {
        name: '深度优先搜索',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        description: '沿着树的深度遍历树的节点，尽可能深的搜索树的分支。',
      },
    ],
  },
];

const AlgorithmCard = ({ algorithm }) => (
  <Card
    title={algorithm.name}
    extra={
      <Space>
        <ClockCircleOutlined /> {algorithm.timeComplexity}
        <DatabaseOutlined /> {algorithm.spaceComplexity}
      </Space>
    }
    style={{ marginBottom: 16 }}
  >
    <Paragraph>{algorithm.description}</Paragraph>
    <CodeOutlined /> 示例代码
  </Card>
);

const Algorithms = () => {
  return (
    <div className="algorithms-container">
      <Title level={2}>算法分类</Title>
      <Tabs defaultActiveKey="sorting">
        {algorithmCategories.map((category) => (
          <TabPane tab={category.title} key={category.key}>
            <Row gutter={[16, 16]}>
              {category.algorithms.map((algorithm, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <AlgorithmCard algorithm={algorithm} />
                </Col>
              ))}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Algorithms; 