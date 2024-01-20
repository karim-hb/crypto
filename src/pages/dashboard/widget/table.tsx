import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
        <Typography variant="subtitle2">Signals </Typography>
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
                <TableCell sx={{ paddingLeft: "0px !important" }} align="left">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      svg: { cursor: "pointer" },
                    }}
                  >
                    <ArrowDropUpIcon sx={{ mb: "-15px", color: "#4CAF50" }} />
                    <ArrowDropDownIcon sx={{ color: "#E53935" }} />
                  </Box>
                </TableCell>
                <TableCell align="left">Coin</TableCell>
                <TableCell align="left">Status </TableCell>
                <TableCell align="left">Positions</TableCell>
                <TableCell align="left">Price (USDT)</TableCell>
                <TableCell align="left">Profit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.profit > 0 ? (
                      <ArrowDropUpIcon sx={{ color: "#4CAF50" }} />
                    ) : (
                      <ArrowDropDownIcon sx={{ color: "#E53935" }} />
                    )}
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
                  <TableCell
                    sx={{ color: row?.profit > 0 ? "#4CAF50" : "#E53935" }}
                    align="left"
                  >
                  {row?.profit > 0 ?'+ % ' : '- % '}  {row.profit} {" "}
                  </TableCell>
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
  raise: boolean,
  profit: number
) {
  return { name, image, code, value, price, raise, profit };
}

const rows = [
  createData(
    "Bitcoin",
    "/images/bitcoinS.svg",
    "Active",
    "23,005",
    "$417,956,321",
    true,
    1.2
  ),
  createData(
    "Ethereum",
    "/images/etherS.svg",
    "Waiting",
    "23,005",
    "$187,721,091",
    true,
    1.2
  ),
  createData(
    "Binance",
    "/images/bitcoinS.svg",
    "Archived",
    "23,005",
    "$71,734,000",
    false,
    1.2
  ),
  createData(
    "XRP",
    "/images/xrpS.svg",
    "Expired",
    "23,005",
    "$45,534,545",
    false,
    -0.73
  ),
  createData(
    "Cardano",
    "/images/etherS.svg",
    "Expired",
    "23,005",
    "$43,412,668",
    true,
    -0.73
  ),
];
