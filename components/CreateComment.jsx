import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function CreateComment({threadId}) {
  const [text, setText] = useState("");

  const handleComment = async (e) => {
    try {
      const response = await axios.post(`http://localhost:8080/v1/users/61e52fe1afc5e22427fab26d/comments`, {
        thread_id: threadId,
        text: text,
      });
      console.log(response);
      setText("")
    } catch (error) {
      console.log(error);
    }
  };

  const modules = {
    toolbar: false,
  };

  const formats = ["bold", "italic", "underline", "strike", "link", "image"];

  return (
    <>
      <div className="flex justify-evenly py-2 px-2">
        <div className="h-10 w-10">
          <Image
            className="rounded-full"
            height={44}
            width={44}
            layout="fixed"
            src="https://randomuser.me/api/portraits/men/9.jpg"
            alt="user-profile"
          />
        </div>
        <div className="md:ml-3 ml-2 w-96">
          <ReactQuill
            value={text}
            onChange={setText}
            modules={modules}
            // formats={formats}
            placeholder="Add a comment..."
          />
        </div>
        <button
          type="button"
          className="bg-lightTeal hover:bg-lightBlue text-white font-semibold md:px-10 px-4 rounded-full h-10 ml-3 mt-1"
          onClick={handleComment}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default CreateComment;