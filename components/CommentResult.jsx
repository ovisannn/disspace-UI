import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { AnnotationIcon, ShareIcon } from "@heroicons/react/outline";
import Link from "next/link";
import moment from "moment";
import PopOver from "./PopOver";
import NestedReplies from "./NestedReplies";
import VoteButtonLogic from "./VoteButtonLogic";
import NestedCreateReply from "./NestedCreateReply";
import Image from "next/image";

function CommentResult({ data }) {
  const [repliesActive, setRepliesActive] = useState(false);

  const toggleComment = () => {
    setRepliesActive(!repliesActive);
  };

  return (
    <div className="bg-white shadow-md px-4 py-3 mt-3 rounded cursor-pointer max-w-2xl hover:drop-shadow-lg h-fit">
      <div className="flex justify-between">
        <div className="flex item-center align-middle">
          {/* <Image
            className="rounded-full"
            height={39}
            width={39}
            layout="fixed"
            src={data?.user?.profile_pict}
            alt="user-profile"
          /> */}
          <div className="ml-3">
            <div className="text-sm">
              <Link href={`user/${data?.user?.username}`}>
                <a className="font-semibold hover:underline">
                  {data?.user?.username}
                </a>
              </Link>
              <span>
                <BsDot className="inline" size={16} color="gray" />
              </span>
              <span className="text-orange font-bold cursor-pointer hover:text-lightOrange">
                Follow
              </span>
            </div>
            <div className="text-grayTxt font-medium text-xs">
              {moment(data?.created_at).fromNow()}
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer">
          <PopOver targetId={1} targetType={3} />
        </div>
      </div>
      <div className="mt-2 p-1">
        <div className="mt-1">
          <p dangerouslySetInnerHTML={{ __html: data?.text }} />
        </div>
      </div>
      <div className="flex items-center text-grayTxt text-xs mt-3">
        <VoteButtonLogic data={data} currentUsername={"redflavor12345"} />
        <div
          className="flex items-center ml-1 sm:ml-5 hover:bg-gray p-1 rounded-md cursor-pointer"
          onClick={toggleComment}
        >
          <AnnotationIcon className="h-6 w-6 text-grayTxt font-medium" />
          <span className="ml-1 sm:text-sm font-semibold">
            {data?.num_comments}
          </span>
        </div>
      </div>

      {repliesActive ? (
        <div>
          <div className="my-3">
            <NestedCreateReply
              threadId={data?.thread_id}
              parentId={data?._id}
              replyUsername={data?.username}
            />
            <hr className="text-gray mt-3" />
          </div>
          <NestedReplies parentId={data?._id} threadId={data?.thread_id} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CommentResult;
