import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { CreateCommentAPI } from "../pages/api/Helpers";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function NestedCreateReply({ parentId, threadId, replyUsername }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const currentUser = "draconotmalfoy";

  const handleReply = async (e) => {
    setLoading(true);
    try {
      const response = await axios({
        method: "post",
        url: CreateCommentAPI(currentUser),
        data: {
          thread_id: threadId,
          parent_id: parentId,
          text: text,
        },
      });
      console.log(response);
      setLoading(false);
      setText("");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const modules = {
    toolbar: false,
  };

  const formats = ["bold", "italic", "underline", "strike", "link", "image"];

  return (
    <div className="my-2">
      <div className="w-full">
        <ReactQuill
          value={text}
          onChange={setText}
          modules={modules}
          // formats={formats}
          placeholder={`Reply to ${replyUsername}'s comment...`}
        />
      </div>
      <div className="text-right">
        <button
          type="button"
          className="bg-lightTeal hover:bg-lightBlue text-white font-semibold md:px-7 px-4 rounded-md h-7 ml-3 mt-2"
          onClick={handleReply}
        >
          {loading ? (
            <div class="flex justify-center align-middle items-center spinner-border animate-spin w-6 h-6 border-4 rounded-full text-white border-t-lightTeal "></div>
          ) : (
            "Reply"
          )}
        </button>
      </div>
    </div>
  );
}

export default NestedCreateReply;
