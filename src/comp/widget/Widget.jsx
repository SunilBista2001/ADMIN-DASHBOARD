import "./widget.scss";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
export default function Widget({ type }) {
  let data;
  const amount = 100;
  const percent = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        link: "See all users",
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        icon: (
          <LocalShippingOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
        link: "View all orders",
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        icon: (
          <CurrencyRupeeOutlinedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
        link: "View all earnings",
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
        link: "Check your Balance",
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "Rs. "}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessOutlinedIcon className="icon" />
          {percent}
        </div>
        {data.icon}
      </div>
    </div>
  );
}
