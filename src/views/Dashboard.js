import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-primary px-5">Present</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-success px-5">Leave</button>
          </div>
          <div className="col-md-4">
            <Link to="/admin/table" className="btn btn-info px-5">View</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;