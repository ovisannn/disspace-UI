import { useState, useEffect } from "react";
import axios from "axios";
import { GetAllReports } from "../pages/api/Helpers";
import Link from "next/link";
import ReportModals from "./ReportModals";
import ThreadSelector from "./ThreadSelector";

const option = [
  { name: "all", value: "" },
  { name: "count", value: "count" },
];

function ReportList() {
  const [reports, setReports] = useState();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(option[0]);

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

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center mt-20 space-x-2 animate-bounce">
          <div className="w-5 h-5 bg-orange rounded-full"></div>
          <div className="w-5 h-5 bg-lightOrange rounded-full"></div>
          <div className="w-5 h-5 bg-gray rounded-full"></div>
        </div>
      ) : (
        <div className="lg:ml-28">
          {" "}
          <div className="flex justify-between w-11/12">
            <div className="p-5 font-bold ">Sort By</div>
            <div className="z-15 mt-1">
              <ThreadSelector
                option={option}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </div>
          <div>
            <table className="table-fixed w-11/12 bg-white shadow-md mt-2">
              <thead>
                <tr>
                  <th className="p-3 px-5 w-64">Title</th>
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
                      {data?.thread.title}
                    </td>
                    <td className="text-sm font-light text-center">
                      <div className="rounded-full bg-green">thread</div>
                    </td>
                    <td className="text-center">{data?.count}</td>
                    <td className="text-center">{data?.description}</td>
                    <td className="py-2 px-3">
                      <Link href={`threads/${data?.target_id}`}>
                        <button className="bg-transparent hover:bg-lightBlue text-lightTeal font-semibold hover:text-white py-1.5 px-3 border border-lightBlue hover:border-transparent rounded">
                          View Details
                        </button>
                      </Link>
                    </td>
                    <td className="pr-1">
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

export default ReportList;
