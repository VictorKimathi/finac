import React from 'react';
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";

const AIHub = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Card 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          component={Link} // Link component to wrap the Box
          to="/saving-recommendation" // Set the route
          style={{ textDecoration: 'none' }} // Remove underline
        >
          <StatBox
            title="Saving"
            subtitle="Saving Recommendation"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Card 2 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          component={Link} // Link component to wrap the Box
          to="/fraud" // Set the route
          style={{ textDecoration: 'none' }}
        >
          <StatBox
            title="Fraud Detection"
            subtitle="Fraud Detection"
            progress="0.50"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Card 3 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          component={Link} // Link component to wrap the Box
          to="/insight" // Set the route
          style={{ textDecoration: 'none' }}
        >
          <StatBox
            title="AI Insights"
            subtitle="Get AI Insights"
            progress="0.50"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AIHub;
