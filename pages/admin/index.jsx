import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [reports, setReports] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8080/v1/reports").then((response) => {
      setReports(response?.data);
      setLoading(false);
    });
  }, []);

  console.log(reports?.data)
  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <table className="table-auto">
          <thead>
            <tr>
              <th>Source</th>
              <th>Type</th>
              <th>Count</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {reports?.data?.map((data) => (
              <tr key={data?.target_id}>
                <td>{data?.target_id}</td>
                <td>{data?.target_type == 1 ? "user" : data?.target_type == 2 ? "comment" : "thread"}</td>
                <td>{data?.count}</td>
                <td>{data?.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
