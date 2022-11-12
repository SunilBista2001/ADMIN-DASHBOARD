import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1>Total Revenue</h1>
        <MoreVertOutlinedIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value="70" text="70%" />
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">Rs. 19455</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon font-fontSize="large" />
              <div className="resultAmt">Rs. 80.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon font-fontSize="large" />
              <div className="resultAmt">Rs. 60.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon font-fontSize="large" />
              <div className="resultAmt">Rs. 10.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
