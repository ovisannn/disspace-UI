import React, { useEffect, useState } from "react";
import axios from "axios";
import Thread from "./thread";
import { GetThreadAPI } from "../pages/api/Helpers";

function ThreadAdmin() {
  const [threadData, setThreadData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: GetThreadAPI(),
    }).then((response) => {
      setThreadData(response?.data);
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
        <div className="md:ml-48">
          {threadData?.data?.map((data) => (
            <Thread data={data} key={data?._id} limit={data.length} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ThreadAdmin;
