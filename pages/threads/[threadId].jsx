import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GetAllCommentInThread, GetThreadByID } from "../api/Helpers";
import axios from "axios";
import DetailThread from "../../components/DetailThread";
import CommentResult from "../../components/CommentResult";
import Footer from "../../components/Footer";
import NavbarV2 from "../../components/NavbarV2";

function ThreadDetails() {
  const [threadData, setThreadData] = useState();
  const [commentData, setCommentData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { threadId } = router.query;

  useEffect(() => {
    if (threadId === undefined) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const [threadsDataAPI, commentsDataAPI] = await Promise.all([
          axios({
            method: "get",
            url: GetThreadByID(threadId),
          }),
          axios({
            method: "get",
            url: GetAllCommentInThread(threadId, threadId),
          }),
        ]);
        setThreadData(threadsDataAPI?.data?.data);
        setCommentData(commentsDataAPI?.data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, [threadId]);

  return (
    <div>
      < NavbarV2 />
      {loading ? (
        <div className="flex items-center justify-center mt-20 space-x-2 animate-bounce">
          <div className="w-5 h-5 bg-orange rounded-full"></div>
          <div className="w-5 h-5 bg-lightOrange rounded-full"></div>
          <div className="w-5 h-5 bg-gray rounded-full"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-span-8 md:col-start-4">
              <DetailThread data={threadData} />
              {commentData?.map((data) => (
                <CommentResult data={data} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default ThreadDetails;
