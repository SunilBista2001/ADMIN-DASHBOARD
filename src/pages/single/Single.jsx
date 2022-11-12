import "./single.scss";
import Sidebar from "../../comp/sidebar/Sidebar";
import Navbar from "../../comp/navbar/Navbar";
import Chart from "../../comp/chart/Chart";
import List from "../../comp/table/Table";
function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar img="../assets/sunilBista.jpg" />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              {<img src="../assets/sunilBista.jpg" alt="" className="image" />}
              <div className="details">
                <h3 className="name">Sunil Bista</h3>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">btwitsbista@gmail.com </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+977 9843356917</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">New York </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">USA </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
