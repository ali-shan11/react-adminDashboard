import React, { useContext } from 'react';
import { Form, Input, Row, Col, Button, Select } from 'antd';
import { QosOption } from './index'
import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../../../theme';

const Subscriber = ({ sub, unSub, showUnsub }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [form] = Form.useForm();
  const qosOptions = useContext(QosOption);

  const record = {
    topic: 'testtopic/react',
    qos: 0,
  };

  const onFinish = (values) => {
    sub(values);
  };

  const handleUnsub = () => {
    const values = form.getFieldsValue();
    unSub(values);
  };

  const SubForm = (
    <Form
      layout="vertical"
      name="basic"
      form={form}
      initialValues={record}
      onFinish={onFinish}
    >
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label={<Typography  color={colors.grey[100]}>Topic</Typography>}
            name="topic"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={<Typography  color={colors.grey[100]}>QOS</Typography>}
            name="qos"
          >
            <Select options={qosOptions} />
          </Form.Item>
        </Col>
        <Col span={8} offset={16} style={{ textAlign: 'right' }}>
          <Form.Item>
            <Button type='primary' htmlType="submit">
            Subscribe 
            </Button>
            {
              showUnsub ?
                <Button type="danger" style={{ marginLeft: '10px' }} onClick={handleUnsub}>
                  <Typography color={colors.grey[100]}>Unsubscribe</Typography>
                </Button>
                : null
            }
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )

  return (
    <Box
      width="100%"
      backgroundColor={colors.primary[400]}
      p="20px"
      borderRadius="10px"
      mt="30px"
    >
      <Typography color={colors.grey[100]} variant="h3" fontWeight="600" textAlign="center" mb="20px">
          Topic Subscription
        </Typography>
      {SubForm}
    </Box>
  );
}

export default Subscriber;
