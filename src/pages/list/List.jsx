import "./list.scss";
import Sidebar from "../../comp/sidebar/Sidebar";
import Navbar from "../../comp/navbar/Navbar";
import Datatable from "../../comp/datatable/Datatable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
