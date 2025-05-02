import { useState } from 'react';
import { Card, Row, Col, Typography, Tabs, Select, Space, Button, Input } from 'antd';
import { CodeOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import MonacoEditor from '@monaco-editor/react';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;

const problems = [
  {
    id: 1,
    title: '两数之和',
    difficulty: '简单',
    tags: ['数组', '哈希表'],
    description: '给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数。',
    acceptance: '45.6%',
    submissions: 12345,
  },
  {
    id: 2,
    title: '反转链表',
    difficulty: '中等',
    tags: ['链表'],
    description: '反转一个单链表。',
    acceptance: '67.8%',
    submissions: 9876,
  },
  {
    id: 3,
    title: '最长回文子串',
    difficulty: '困难',
    tags: ['字符串', '动态规划'],
    description: '给定一个字符串 s，找到 s 中最长的回文子串。',
    acceptance: '32.1%',
    submissions: 5678,
  },
];

const ProblemCard = ({ problem }) => (
  <Card
    title={
      <Space>
        <span>{problem.title}</span>
        <span style={{ color: problem.difficulty === '简单' ? '#52c41a' : problem.difficulty === '中等' ? '#faad14' : '#f5222d' }}>
          {problem.difficulty}
        </span>
      </Space>
    }
    extra={<Button type="primary">开始做题</Button>}
    style={{ marginBottom: 16 }}
  >
    <Paragraph>{problem.description}</Paragraph>
    <Space>
      {problem.tags.map((tag, index) => (
        <Button key={index} size="small">
          {tag}
        </Button>
      ))}
    </Space>
    <div style={{ marginTop: 16 }}>
      <Space>
        <span><CheckCircleOutlined /> 通过率: {problem.acceptance}</span>
        <span><ClockCircleOutlined /> 提交次数: {problem.submissions}</span>
      </Space>
    </div>
  </Card>
);

const Practice = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// 在这里编写你的代码');

  return (
    <div className="practice-container">
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Title level={2}>题库</Title>
          <Space style={{ marginBottom: 16 }}>
            <Search placeholder="搜索题目" style={{ width: 200 }} />
            <Select defaultValue="all" style={{ width: 120 }}>
              <Option value="all">全部难度</Option>
              <Option value="easy">简单</Option>
              <Option value="medium">中等</Option>
              <Option value="hard">困难</Option>
            </Select>
            <Select defaultValue="all" style={{ width: 120 }}>
              <Option value="all">全部标签</Option>
              <Option value="array">数组</Option>
              <Option value="linked-list">链表</Option>
              <Option value="string">字符串</Option>
            </Select>
          </Space>
          {problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </Col>
        <Col span={8}>
          <Card title="在线编辑器">
            <Select
              value={language}
              onChange={setLanguage}
              style={{ width: 120, marginBottom: 16 }}
            >
              <Option value="javascript">JavaScript</Option>
              <Option value="python">Python</Option>
              <Option value="java">Java</Option>
              <Option value="cpp">C++</Option>
            </Select>
            <MonacoEditor
              height="500px"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={setCode}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: false,
              }}
            />
            <Button type="primary" style={{ marginTop: 16, width: '100%' }}>
              提交代码
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Practice; 