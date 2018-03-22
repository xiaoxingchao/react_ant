import { Table, Form, Row, Col, Input, Icon, Button } from 'antd';
import React from 'react';
import fetch from 'dva/fetch';
const FormItem = Form.Item;
class List extends React.Component{
  state = {
    expand:false,
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
  }
  handleSearch = (e) =>{
    e.preventDefault();
    this.props.form.validateFields((error,values)=>{
      console.log('Received values of form:',values);
    })
  }
  handleReset = () => {
    this.props.form.resetFields();
  }
  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render(){
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const pagination = {
      showSizeChanger : true,
    }
    fetch('http://kfqhw.cygps.com:888/v1jsonapi/route_manage_routesegment/get.json',{
      method:'post',
      headers:new Headers({
        'token': 'admin990099509900995389900991990099null990099145619789372939900990019900992b15c65c1e0304a3dc14f9548892aaca', // 通过头指定，获取的数据类型是JSON
      }),
    })
    .then((res)=>{
      return res.json() // 返回一个Promise，可以解析成JSON
    })
    .then((res)=>{
      console.log(res) // 获取JSON数据
    })


    const { getFieldDecorator } = this.props.form;
    const FormItemLayout = {
      labelCol:{span:5},
      wrapperCol:{span:19}
    }
    const children = [];
    for(let i=0;i<10;i++){
      children.push(
        <Col span={8} key={i}>
          <FormItem {...FormItemLayout} label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`)(
              <Input placeholder = "placeholder" />
            )}
          </FormItem>
        </Col>
      )
    }
    const expand = this.state.expand;
    const shownCount = expand ? children.length : 6;
    return (
      <div>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <Row gutter={40}>
            {children.slice(0,shownCount)}
          </Row>
          <Row>
            <Col span={24} style={{textAlign:'right'}}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button style={{marginLeft:8}} onClick={this.handleReset}>
                Clear
              </Button>
              <a style={{marginLeft:8,fontSize:12}} onClick={this.toggle}>
                Collapse <Icon type={expand ? 'up': 'down'}/>
              </a>
            </Col>
          </Row>
        </Form>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination = {pagination}/>
      </div>

    )
  }
}
const WrappedAdvancedSearchForm = Form.create()(List);
export default WrappedAdvancedSearchForm;
