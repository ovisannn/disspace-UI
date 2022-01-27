import React, { useEffect, useState } from "react";
import axios from "axios";
import NestedReply from "./NestedReply";
import { GetAllCommentInThread } from "../pages/api/Helpers";

function NestedReplies({ currentUserId, threadId, parentId }) {
  const [commentData, setCommentData] = useState([]);
  const rootComments = commentData.filter((data) => data.parent_id === parentId);
  const getReplies = (commentId) => {
    return commentData.filter(
      (commentData) => commentData.parent_id === commentId
    );
  };

  useEffect(() => {
    axios({
      method: "get",
      url: GetAllCommentInThread(threadId, threadId),
      params: {
        option: "ne"
      }
    }).then((response) => {
      setCommentData(response?.data?.data);
    });
  }, []);

  // console.log(commentData)

  return (
    <div className="">
      <div>
        {rootComments.map((rootComments) => (
          <NestedReply
            key={rootComments._id}
            comment={rootComments}
            replies={getReplies(rootComments._id)}
            canReply={true}
          />
        ))}
      </div>
    </div>
  );
}

export default NestedReplies;
