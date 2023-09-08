import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
const TableWidget = () => {
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
        }}
      >
        <Typography variant="subtitle2">Card Title</Typography>
        <Typography variant="caption">Subtitle here</Typography>
      </Box>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
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
                <TableCell>#</TableCell>
                <TableCell align="left">Title 1</TableCell>
                <TableCell align="left">Title 2</TableCell>
                <TableCell align="left">Title 3</TableCell>
                <TableCell align="left">Title 4</TableCell>
                <TableCell align="left">Title 5</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <img src={row.image} alt="" />
                      {row.name}
                    </Box>
                  </TableCell>
                  <TableCell align="left">{row.code}</TableCell>
                  <TableCell align="left">{row.value}</TableCell>
                  <TableCell
                    sx={{ color: row?.raise ? "#4CAF50" : "#E53935" }}
                    align="left"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      {" "}
                      {row?.raise ? (
                        <>
                          {" "}
                          <img src={"/images/arrowUpGreen.svg"} alt="" />
                        </>
                      ) : (
                        <>
                          {" "}
                          <img src={"/images/arrowDownRed.svg"} alt="" />
                        </>
                      )}
                      {row.price}
                    </Box>
                  </TableCell>
                  <TableCell align="left">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TableWidget;
function createData(
  name: string,
  image: string,
  code: string,
  value: string,
  price: string,
  raise: boolean
) {
  return { name, image, code, value, price, raise };
}

const rows = [
  createData(
    "Bitcoin",
    "/images/bitcoinS.svg",
    "BTC",
    "value 1",
    "$417,956,321",
    true
  ),
  createData(
    "Ethereum",
    "/images/etherS.svg",
    "ETH",
    "value 2",
    "$187,721,091",
    true
  ),
  createData(
    "Binance",
    "/images/bitcoinS.svg",
    "BNB",
    "value 3",
    "$71,734,000",
    false
  ),
  createData("XRP", "/images/xrpS.svg", "XRP", "value 4", "$45,534,545", false),
  createData(
    "Cardano",
    "/images/etherS.svg",
    "ADA",
    "value 5",
    "$43,412,668",
    true
  ),
];
