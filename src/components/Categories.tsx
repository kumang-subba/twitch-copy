import { Chip, Divider, Link, Stack, Typography } from "@mui/material";

function Categories() {
  const list = [];
  for (let i = 0; i < 12; i++) {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}deg, 80%, 50%)`;
    list.push(
      <Stack m={0.5} key={i}>
        <Stack
          sx={{
            transition: "200ms",
            "&:hover": {
              transform: "translate(5px,-5px)",
              boxShadow: `-7px 7px ${randomColor},-6px 6px ${randomColor},-5px 5px ${randomColor}, -4px 4px ${randomColor}, -3px 3px ${randomColor}, -2px 2px ${randomColor}`,
            },
          }}
        >
          <img src="/images/wow.jpg" style={{ width: "130px" }} />
        </Stack>
        <Typography fontWeight={"bold"} fontSize={13}>
          World of Warcraft
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            color: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.grey[500]
                : theme.palette.grey[700],
          }}
        >
          38.2k viewers
        </Typography>
        <Stack direction={"row"} mb={1} gap={1} flexWrap={"wrap"}>
          <Chip
            label="RPG"
            sx={{
              height: 20,
              fontSize: 11,
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Gaming"
            sx={{
              height: 20,
              fontSize: 11,
              fontWeight: "bold",
            }}
          />
        </Stack>
      </Stack>
    );
  }
  return (
    <Stack>
      <Stack direction={"row"} gap={0.5}>
        <Link
          underline="hover"
          color={"secondary"}
          sx={{
            fontWeight: "bold",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Categories
        </Link>
        <Typography fontWeight={"bold"}>we think you'll like</Typography>
      </Stack>
      <Stack
        direction={"row"}
        overflow={"hidden"}
        flexWrap={"wrap"}
        sx={{ justifyContent: "space-between" }}
        pt={1}
        height={"250px"}
        mb={1}
      >
        {list}
      </Stack>
      <Divider />
    </Stack>
  );
}

export default Categories;
