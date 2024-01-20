import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const BlogWidget = () => {
  return (
    <Box
      sx={{
        display: "flex",
        p: { md: 3, xs: 2 },
        bgcolor: "background.default",
        borderRadius: "2px",
        gap: 2,
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          borderBottom: "1px solid #1C1B1F",
          mb: 1,
          pb: 1,
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle2">Notification </Typography>{" "}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography variant="subtitle2">See More </Typography>
          <img src="/images/arrowRight.svg" alt="" />
        </Box>
      </Box>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer
          sx={{
            ".MuiTableCell-root": {
              padding: "10px 4px !important",
            },

            /*   overflowX: "auto",
            maxWidth: "fit-content", */
          }}
        >
          <Table aria-label="simple table" sx={{ minWidth: "450px" }}>
            <TableHead>
              <TableRow
                sx={{
                  th: {
                    color: "#605D62 !important",
                    fontSize: "13px !important",
                  },
                }}
              >
                <TableCell align="left">#</TableCell>
                <TableCell align="left">Time </TableCell>
                <TableCell align="left">Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>{" "}
                  <TableCell align="left">{row.Date}</TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BlogWidget;
const rows = [
  {
    title: "Notification Title",
    Date: "2024-01-12 11:37:10",
  },
  {
    title: "Notification Title",
    Date: "2024-01-12 11:37:10",
  },
  {
    title: "Notification Title",
    Date: "2024-01-12 11:37:10",
  },
  {
    title: "Notification Title",
    Date: "2024-01-12 11:37:10",
  },
  {
    title: "Notification Title",
    Date: "2024-01-12 11:37:10",
  },
];
