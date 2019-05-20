import React from 'react';
import '../App.css';
import { Layout, Row, Col } from 'antd';
import { func } from 'prop-types';
import Board from '../containers/Board';
import ActionBar from '../containers/ActionBar';

const { Header, Content } = Layout;
class App extends React.Component {
  componentDidMount() {
    const { initSocketIo } = this.props;
    initSocketIo();
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Row>
              <Col span={12}>
                <h1 className="Title">
                  Lean Coffee
                  {' '}
                  <span role="img" aria-label="Hot Beverage">☕</span>
                </h1>
              </Col>
              <Col span={6} offset={6}>
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
  }
}

App.propTypes = {
  initSocketIo: func.isRequired,
};
export default App;
