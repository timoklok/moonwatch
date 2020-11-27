import React from "react";
import styled from "styled-components";

const Box = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(centered) => (centered ? "center" : "space-between")};
  padding: 60px 30px;
  // 100vw when smaller then 500px,
  // 80% when larger then 500px
  /* max 100px */
  width: min(100vw, max(500px, min(1000px, 80vw)));
  box-sizing: border-box;
`;

const ViewBox = ({ children, centered, id, ...props }) => {
  return (
    <Box id={id} centered={centered}>
      {children}
    </Box>
  );
};

export default ViewBox;
