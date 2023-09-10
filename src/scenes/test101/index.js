import { Box, colors, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Mqtt from "./Mqtt";
import Receiver from "./Mqtt/Receiver";

const Test101 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Test 101 Page" subtitle="This is a test 101 page" />
      <Box
      // height="50vh"
      // width="100%"
      // backgroundColor={colors.primary[400]}
      // p="10px"
      >
        <Mqtt />
        <Typography color={colors.grey[100]} variant="h4" fontWeight="600">
          {/* <Receiver payload={payload} /> */}
        </Typography>
      </Box>
    </Box>
  );
};

export default Test101;
