import { Card, Row, Col, Typography, Tabs, Space, Collapse } from 'antd';
import { CodeOutlined, ClockCircleOutlined, DatabaseOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const dataStructureCategories = [
  {
    key: 'linear',
    title: '线性结构',
    structures: [
      {
        name: '数组',
        timeComplexity: {
          access: 'O(1)',
          search: 'O(n)',
          insert: 'O(n)',
          delete: 'O(n)'
        },
        description: '连续的内存空间，支持随机访问。',
        operations: [
          '随机访问',
          '顺序访问',
          '插入和删除'
        ]
      },
      {
        name: '链表',
        timeComplexity: {
          access: 'O(n)',
          search: 'O(n)',
          insert: 'O(1)',
          delete: 'O(1)'
        },
        description: '通过指针连接的节点序列，支持动态内存分配。',
        operations: [
          '插入和删除',
          '遍历',
          '反转'
        ]
      }
    ]
  },
  {
    key: 'tree',
    title: '树结构',
    structures: [
      {
        name: '二叉树',
        timeComplexity: {
          access: 'O(log n)',
          search: 'O(log n)',
          insert: 'O(log n)',
          delete: 'O(log n)'
        },
        description: '每个节点最多有两个子节点的树结构。',
        operations: [
          '前序遍历',
          '中序遍历',
          '后序遍历',
          '层序遍历'
        ]
      },
      {
        name: '二叉搜索树',
        timeComplexity: {
          access: 'O(log n)',
          search: 'O(log n)',
          insert: 'O(log n)',
          delete: 'O(log n)'
        },
        description: '左子树节点值小于根节点，右子树节点值大于根节点。',
        operations: [
          '查找',
          '插入',
          '删除',
          '平衡'
        ]
      }
    ]
  }
];

const DataStructureCard = ({ structure }) => (
  <Card
    title={structure.name}
    style={{ marginBottom: 16 }}
  >
    <Paragraph>{structure.description}</Paragraph>
    <Collapse defaultActiveKey={['1']}>
      <Panel header="时间复杂度" key="1">
        <Space direction="vertical">
          <div>访问: {structure.timeComplexity.access}</div>
          <div>搜索: {structure.timeComplexity.search}</div>
          <div>插入: {structure.timeComplexity.insert}</div>
          <div>删除: {structure.timeComplexity.delete}</div>
        </Space>
      </Panel>
      <Panel header="基本操作" key="2">
        <ul>
          {structure.operations.map((op, index) => (
            <li key={index}>{op}</li>
          ))}
        </ul>
      </Panel>
    </Collapse>
    <div style={{ marginTop: 16 }}>
      <CodeOutlined /> 示例代码
    </div>
  </Card>
);

const DataStructures = () => {
  return (
    <div className="data-structures-container">
      <Title level={2}>数据结构分类</Title>
      <Tabs defaultActiveKey="linear">
        {dataStructureCategories.map((category) => (
          <TabPane tab={category.title} key={category.key}>
            <Row gutter={[16, 16]}>
              {category.structures.map((structure, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <DataStructureCard structure={structure} />
                </Col>
              ))}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default DataStructures; 