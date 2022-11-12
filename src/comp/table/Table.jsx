import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 101,
      product: "Acer Nitro 5",
      customer: "Sunil Bista",
      img: "./assets/acer.jpg",
      amount: 110,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 252,
      product: "Playstation 5",
      customer: "Birendra Shah",
      img: "./assets/ps.webp",
      amount: 250,
      method: "Esewa",
      status: "Pending",
    },
    {
      id: 331,
      product: "Fifa 23",
      customer: "Hemant Dhungana",
      img: "./assets/fifa.jpg",
      amount: 10,
      method: "Fonepay",
      status: "Approved",
    },
    {
      id: 341,
      product: "Nike Air Jordan",
      customer: "Sushant Bista",
      img: "./assets/nike.webp",
      amount: 350,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 381,
      product: "Iphone 14 Pro Max",
      customer: "Sanjay Bista",
      img: "./assets/iphone.jpg",
      amount: 240,
      method: "Esewa",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="productWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status  ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
