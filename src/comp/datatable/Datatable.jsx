import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColoumn, userRows } from "../../datatableSource";
import { Link } from "react-router-dom";
const Datatable = () => {
  const action = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: () => {
        return (
          <div className="actionWrapper">
            <Link to="/users/153" style={{ textDecoration: "none" }}>
              <div className="viewBtn">View</div>
            </Link>
            <div className="delBtn">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="title">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColoumn.concat(action)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        className="dataGrid"
      />
    </div>
  );
};

export default Datatable;
