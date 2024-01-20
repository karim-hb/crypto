import {
  Box,
  Button,
  Container,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const Transaction = () => {
  return (
    <Paper sx={{ minHeight: "calc(100vh - 180px)", pt: 6, mx:{md:"24px"} }}>
      <Container maxWidth={"xxl" as any}>
        <Box
          sx={{
            p: { md: 3, xs: 2 , },
            bgcolor: "background.default",
            borderRadius: "2px",
            gap: 2,
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 6,
              alignItems: "center",
              borderBottom: "1px solid #1C1B1F",
              mb: 1,
              pb: 1,
            }}
          >
            <Typography variant="subtitle2">Transaction History</Typography>
            <Button
              sx={{
                display: "flex",
                gap: 1,
                color: "#fff",
                height: "30px !important",
                fontSize: "13px !important",
                width: "100px !important",
              }}
              variant="outlined"
              color="inherit"
            >
              <span>Sorty By </span>
            </Button>{" "}
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
                    <TableCell>#</TableCell>
                    <TableCell align="left">Status </TableCell>
                    <TableCell align="left">Amount (USDT)</TableCell>
                    <TableCell align="left">Wallet Address</TableCell>
                    <TableCell align="left">TXID</TableCell>
                    <TableCell align="left">Date </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={row.status}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index}
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            color: row.color,
                          }}
                        >
                          {row.status}{" "}
                        </Box>
                      </TableCell>
                      <TableCell align="left">{row.amount}</TableCell>
                      <TableCell align="left">{row.address}</TableCell>
                      <TableCell align="left">{row.TXID}</TableCell>
                      <TableCell align="left">
                        {new Date(row.date).toLocaleDateString("en")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box sx={{ display: "flex ", justifyContent: "center" , my:4}}>
          <Pagination count={4} />
        </Box>
      </Container>
    </Paper>
  );
};

export default Transaction;
const rows = [
  {
    status: "send",
    color: "green",
    amount: "***USDT",
    address: "foierhtgpoerhv89are98tu4564654bvdf",
    TXID: "foinerh98pt545t4vdfvwhrthrfvergt",
    date: new Date(),
  },
  {
    status: "paid from bonus",
    color: "red",
    amount: "***USDT",
    address: "",
    TXID: "",
    date: new Date(),
  },
  {
    status: "Paid",
    color: "red",
    amount: "***USDT",
    address: "",
    TXID: "",
    date: new Date(),
  },
  {
    status: "send",
    color: "green",
    amount: "***USDT",
    address: "",
    TXID: "",
    date: new Date(),
  },
  {
    status: "send",
    color: "green",
    amount: "***USDT",
    address: "",
    TXID: "",
    date: new Date(),
  },
];
