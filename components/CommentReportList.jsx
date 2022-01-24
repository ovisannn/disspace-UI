import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ReportModals from "./ReportModals";
import { GetCommentsReports } from "../pages/api/Helpers";

function CommentReportList() {
  const [reports, setReports] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: GetCommentsReports(),
    }).then((response) => {
      setReports(response?.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center mt-10 space-x-2 animate-bounce">
          <div className="w-5 h-5 bg-orange rounded-full"></div>
          <div className="w-5 h-5 bg-lightOrange rounded-full"></div>
          <div className="w-5 h-5 bg-gray rounded-full"></div>
        </div>
      ) : (
        <div className="lg:ml-28">
          <div>
            <table className="table-fixed w-11/12 bg-white shadow-md mt-2">
              <thead>
                <tr>
                  <th className="p-3 px-5 w-64">Text</th>
                  <th className="p-3 px-5 w-24">Type</th>
                  <th className="p-3 px-5">Count</th>
                  <th className="p-3 px-5">Description</th>
                  <th className="p-3 px-5 w-40 text-center"></th>
                  <th className="p-3 px-5 w-24 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {reports?.data?.map((data) => (
                  <tr key={data?.target_id} className="border-t border-gray">
                    <td className="px-3 overflow-hidden text-ellipsis">
                      {data?.comment.text}
                    </td>
                    <td className="text-sm font-light text-center">
                      <div className="rounded-full bg-lightTeal">thread</div>
                    </td>
                    <td className="text-center">{data?.count}</td>
                    <td className="text-center">{data?.description}</td>
                    <td className="py-2 px-3">
                      <ReportModals
                        targetId={data?.target_id}
                        targetType={data?.target_type}
                      />
                    </td>
                    <td>
                      <button className="bg-transparent hover:bg-darkRed text-red font-semibold hover:text-white border w-20 h-10 border-red hover:border-transparent rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentReportList;
