import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsDot, BsTriangle, BsTriangleFill, BsReply } from "react-icons/bs";
import moment from "moment";
import NestedCreateReply from "./NestedCreateReply";
import VoteButtonLogic from "./VoteButtonLogic";

function NestedReply({ comment, replies, canReply }) {
  const [create, setCreate] = useState(false);

  const toggleComment = () => {
    setCreate(!create);
  };

  return (
    <div className="mt-3 ml-9">
      <div className="flex items-center align-middle">
        <Image
          src={comment.user.profile_pict}
          height={39}
          width={39}
          layout="fixed"
          className="rounded-full"
        />
        <div className="ml-3">
          <div className="text-sm">
            <Link
              // href={`user/${data?.user?.username}`}
              href={`user`}
            >
              <a className="font-semibold hover:underline">
                {comment.username}
              </a>
            </Link>
          </div>
          <div className="text-grayTxt font-medium text-xs">
            {moment(comment.created_at).fromNow()}
          </div>
        </div>
      </div>
      <div className="mt-2 border-l-4 border-l-grayTxt border-opacity-30 ml-3.5 text-sm">
        <p
          className="pl-7"
          dangerouslySetInnerHTML={{ __html: comment.text }}
        />
        <div className="flex items-center text-grayTxt text-xs mt-5 ml-6">
          <VoteButtonLogic data={comment} currentUsername={"redflavor12345"} />
          {canReply ? (
            <div
              className="flex items-center ml-1 sm:ml-5 hover:bg-gray p-1 rounded-md cursor-pointer"
              onClick={toggleComment}
            >
              <BsReply size={20} />
              <span className="ml-0.5 mt-px sm:text-xs font-semibold">
                Reply
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="ml-7 mt-3">
          {create ? (
            <>
              <NestedCreateReply
                threadId={comment.thread_id}
                parentId={comment.parent_id}
                replyUsername={comment.username}
              />
            </>
          ) : (
            ""
          )}
        </div>
        <div>
          {replies.map((reply) => (
            <NestedReply key={reply.id} comment={reply} replies={[]} canReply={false}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NestedReply;
