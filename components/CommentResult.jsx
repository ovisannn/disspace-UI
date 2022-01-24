import React, { useState } from "react";
import { BsDot, BsTriangle, BsTriangleFill } from "react-icons/bs";
import Link from "next/link";
import moment from "moment";
import PopOver from "./PopOver";

function CommentResult() {
  const checkUpvote = false;
  const checkDownvote = true;

  const [action, setAction] = useState({
    upvote: checkUpvote,
    downvote: checkDownvote,
  });

  const comments = `<p>added</p><p>New</p><p>Comment</p><p>From</p><p>FrontEnd</p>`;
  const num_votes = 100;
  const [vote, setVote] = useState(num_votes);
  const [status, setStatus] = useState(0);

  const handleUpvote = () => {
    setAction({
      upvote: !action.upvote,
      downvote: false,
    });
    action.upvote
      ? checkUpvote
        ? setVote(num_votes - 1)
        : checkDownvote
        ? setVote(num_votes + 1)
        : setVote(num_votes)
      : checkUpvote
      ? setVote(num_votes)
      : checkDownvote
      ? setVote(num_votes + 2)
      : setVote(num_votes + 1);
    action.upvote ? setStatus(0) : setStatus(1);
  };

  console.log(status)
  const handleDownvote = () => {
    setAction({
      downvote: !action.downvote,
      upvote: false,
    });
    action.downvote
      ? checkDownvote
        ? setVote(num_votes + 1)
        : checkUpvote
        ? setVote(num_votes - 1)
        : setVote(num_votes)
      : checkDownvote
      ? setVote(num_votes)
      : checkUpvote
      ? setVote(num_votes - 2)
      : setVote(num_votes - 1);
    action.downvote ? setStatus(0) : setStatus(-1);
  };

  return (
    <div className="bg-white shadow-md px-4 py-3 mt-3 rounded cursor-pointer max-w-2xl hover:drop-shadow-lg h-fit">
      <div className="flex justify-between">
        <div className="flex item-center align-middle">
          <img
            className="rounded-full"
            height={48}
            width={48}
            //   src={data?.profile_pict}
            src="https://randomuser.me/api/portraits/men/19.jpg"
            alt="user-profile"
          />
          <div className="ml-3">
            <div className="text-sm">
              <Link
                // href={`user/${data?.user?.username}`}
                href={`user`}
              >
                <a className="font-semibold hover:underline">
                  {/* {data?.user?.username} */}
                  username
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
              {/* {moment(data?.created_at).fromNow()} */}
              created_at
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer">
          <PopOver targetId={1} targetType={3} />
        </div>
      </div>
      <div className="mt-2 p-1">
        <div className="mt-1">
          <p dangerouslySetInnerHTML={{ __html: comments }} />
        </div>
      </div>
      <div className="flex items-center text-grayTxt text-xs mt-3">
        <div className="flex items-center text-sm border rounded-md">
          {action.upvote ? (
            <BsTriangleFill
              size={28}
              className="cursor-pointer bg-gray p-1 rounded-l-md"
              color="green"
              onClick={handleUpvote}
            />
          ) : (
            <BsTriangle
              size={28}
              className="hover:text-white cursor-pointer hover:bg-green p-1 rounded-l-md"
              onClick={handleUpvote}
            />
          )}
          <span className="ml-1.5 mr-1 sm:mr-3 font-semibold">{vote}</span>
          {action.downvote ? (
            <BsTriangleFill
              size={28}
              className="cursor-pointer rotate-180 bg-gray p-1 rounded-l-md"
              color="red"
              onClick={handleDownvote}
            />
          ) : (
            <BsTriangle
              size={28}
              className="rotate-180 hover:text-white cursor-pointer hover:bg-red p-1 ml-1.5 border-r-2"
              onClick={handleDownvote}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentResult;
