import "./home.scss";
import Sidebar from "../../comp/sidebar/Sidebar";
import Navbar from "../../comp/navbar/Navbar";
import Widget from "../../comp/widget/Widget";
import Featured from "../../comp/featured/Featured";
import Charts from "../../comp/chart/Chart";
import Table from "../../comp/table/Table";
export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <Table />
        </div>
      </div>
    </div>
  );
}
