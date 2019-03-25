import React from 'react';
import './App.css';
import { Layout, Row, Col } from 'antd';
import Board from './containers/Board';
import ActionBar from './containers/ActionBar';

const { Header, Content } = Layout;
const App = () => (
  <div className="App">
    <Layout>
      <Header>
        <Row>
          <Col span={12}>
            <h1 className="Title">Lean Coffee ☕</h1>
          </Col>
          <Col span={12}>
            <ActionBar />
          </Col>
        </Row>
      </Header>
      <Content>
        <Board />

      </Content>
    </Layout>
  </div>
);

export default App;
