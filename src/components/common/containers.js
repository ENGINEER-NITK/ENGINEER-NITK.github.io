import styled from "styled-components";

const StyledCard = styled.div`
  height: 220px;
  border-radius: 20px;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
  background-size: 60%;
  background-position: right -40px top -20px;
  background-repeat: no-repeat;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top left, #1a237e, transparent);
    z-index: 0;
  }
`;

export const Card = ({ backgroundImage, children, ...props }) => {
  return (
    <StyledCard
      className="gradient-box"
      backgroundImage={backgroundImage}
      {...props}
    >
      {children}
    </StyledCard>
  );
};
