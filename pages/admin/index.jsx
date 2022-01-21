import { useState, useEffect } from "react";
import axios from "axios";
import { GetAllReports } from "../api/Helpers";
import Link from "next/link";

function Admin() {
  const [reports, setReports] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: GetAllReports(),
    }).then((response) => {
      setReports(response?.data);
      setLoading(false);
    });
  }, []);

  console.log(reports?.data);
  return (
    <div className="flex justify-center">
      {loading ? (
        "loading..."
      ) : (
        <table className="table-auto bg-white shadow-md">
          <thead>
            <tr>
              <th className="p-3 px-5">Source</th>
              <th className="p-3 px-5">Type</th>
              <th className="p-3 px-5">Count</th>
              <th className="p-3 px-5">Description</th>
              <th className="p-3 px-5"></th>
              <th className="p-3 px-5"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {reports?.data?.map((data) => (
              <tr key={data?.target_id} className="border-t border-gray">
                <td className="px-3">{data?.target_id}</td>
                <td className="text-sm font-light">
                  {data?.target_type == 1 ? (
                    <div className="bg-orange rounded-full">user</div>
                  ) : data?.target_type == 2 ? (
                    <div className="">comment</div>
                  ) : (
                    <div className="rounded-full bg-green">thread</div>
                  )}
                </td>
                <td>{data?.count}</td>
                <td>{data?.description}</td>
                <td className="py-2 px-3">
                  <Link
                    href={`${data?.target_type == 1 ? "user" : "threads"}/${
                      data?.target_id
                    }`}
                  >
                    <button class="bg-transparent hover:bg-lightBlue text-lightTeal font-semibold hover:text-white py-1.5 px-3 border border-lightBlue hover:border-transparent rounded">
                      View Details
                    </button>
                  </Link>
                </td>
                <td className="pr-2">
                  {data?.target_type == 1 ? (
                    <button class="bg-transparent hover:bg-darkRed text-red font-semibold hover:text-white border w-20 h-10 border-red hover:border-transparent rounded">
                      Ban
                    </button>
                  ) : (
                    <button class="bg-transparent hover:bg-darkRed text-red font-semibold hover:text-white border w-20 h-10 border-red hover:border-transparent rounded">
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
