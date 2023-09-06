import styled from "styled-components";
const { Typography } = require("@mui/material");
const StyledHeading = styled(Typography)`
  font-size: 32px;
  font-weight: 800;
  position: relative;
  line-height: 34px;
`;

const StyledDescription = styled(Typography).attrs((props) => ({
  ...props,
}))`
  font-size: 14px;
  position: relative;
`;

export const Heading = ({ children, color = "white", ...props }) => {
  const fontFamily = props.fontFamily || "typography.fontFamily";
  return (
    <StyledHeading
      fontFamily={fontFamily}
      letterSpacing="-1px"
      color={color}
      {...props}
    >
      {children}
    </StyledHeading>
  );
};

export const Description = ({
  children,
  color = "textSecondary",
  ...props
}) => {
  return (
    <StyledDescription
      fontFamily="typography.fontFamily"
      variant="body1"
      color={color}
      {...props}
    >
      {children}
    </StyledDescription>
  );
};
