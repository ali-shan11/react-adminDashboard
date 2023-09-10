import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../../../theme';

const Receiver = ({ payload }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (payload.topic) {
      setMessages(messages => [...messages, payload])
    }
  }, [payload])

  const renderListItem = (item) => (
    <List.Item>
      
        <List.Item.Meta
          title={<Typography color={colors.grey[100]} variant='h6' fontWeight="600">{item.topic}</Typography>}
          description={<Typography color={colors.grey[100]}>{item.message}</Typography>}
        />
      
    </List.Item>
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
          Message Received
        </Typography>

      <List
        size="small"
        bordered
        dataSource={messages}
        renderItem={renderListItem}
      />
    </Box>
  );
}

export default Receiver;
