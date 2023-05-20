import { ButtonBase, Stack, Typography, styled } from "@mui/material";

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 50,
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: "#7f3fbf",
  },
  margin: 5,
  overflow: "clip",
  overflowClipMargin: "8px",
}));
const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  color: "white",
  fontSize: 22,
  position: "absolute",
  left: 20,
});

function CategoryButtons() {
  return (
    <Stack mt={2} direction={"row"} justifyContent={"space-between"} gap={1}>
      <StyledButtonBase>
        <StyledTypography>Games</StyledTypography>
        <img
          src="/images/joystick.png"
          style={{
            height: 95,
            position: "absolute",
            right: 0,
            transform:
              "perspective(80px) rotateZ(-10deg) rotateY(25deg) scale(0.9) rotateX(10deg)",
          }}
        />
      </StyledButtonBase>
      <StyledButtonBase>
        <StyledTypography>IRL</StyledTypography>
        <img
          src="/images/mike.png"
          style={{
            width: 100,
            position: "absolute",
            right: 0,
            transform:
              "perspective(80px) rotateY(5deg) scale(0.9) rotateX(-10deg)",
          }}
        />
      </StyledButtonBase>
      <StyledButtonBase>
        <StyledTypography>Music</StyledTypography>
        <img
          src="/images/headphone.png"
          style={{
            height: 65,
            position: "absolute",
            right: 20,
            transform:
              "perspective(80px) rotateY(3.142rad) scale(0.9) rotateX(-10deg)",
          }}
        />
      </StyledButtonBase>
      <StyledButtonBase>
        <StyledTypography>Esports</StyledTypography>
        <img
          src="/images/trophy.png"
          style={{
            height: 65,
            position: "absolute",
            right: 20,
            transform:
              "perspective(80px) rotateZ(10deg) rotateY(10deg) scale(0.9) rotateX(10deg)",
          }}
        />
      </StyledButtonBase>
      <StyledButtonBase>
        <StyledTypography>Creative</StyledTypography>
        <img
          src="/images/paint.png"
          style={{
            height: 65,
            position: "absolute",
            right: 20,
            transform:
              "perspective(80px) rotateZ(10deg) rotateY(180deg) scale(0.9) rotateX(180deg)",
          }}
        />
      </StyledButtonBase>
    </Stack>
  );
}

export default CategoryButtons;
