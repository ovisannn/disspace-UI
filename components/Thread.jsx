import { useState } from "react";
import { BsDot, BsTriangle, BsTriangleFill } from "react-icons/bs";
import {
  AnnotationIcon,
  ShareIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import moment from "moment";
import Popover from "./PopOver";
import CreateComment from "./CreateComment";

function Thread({ data }) {
  const [active, setActive] = useState(false);
  const [comment, setComment] = useState(false);

  const voterList = data?.votes;

  const upvoteFilter = (item) =>
    item.user_id === "redflavor12345" && item.status === 1;

  const downvoteFilter = (item) =>
    item.user_id === "redflavor12345" && item.status === -1;

  const checkUpvote = voterList?.some(upvoteFilter);
  const checkDownvote = voterList?.some(downvoteFilter);

  if (checkUpvote === undefined && checkDownvote === undefined) {
    checkUpvote = false;
    checkDownvote = false;
  }

  const [action, setAction] = useState({
    upvote: checkUpvote,
    downvote: checkDownvote,
  });

  const [status, setStatus] = useState(0);
  const [vote, setVote] = useState(data?.num_votes);

  const handleUpvote = () => {
    setAction({
      upvote: !action.upvote,
      downvote: false,
    });
    action.upvote
      ? checkUpvote
        ? setVote(data?.num_votes - 1)
        : setVote(data?.num_votes)
      : checkUpvote
      ? setVote(data?.num_votes)
      : setVote(data?.num_votes + 1);
    action.upvote ? setStatus(0) : setStatus(1);
  };

  const handleDownvote = () => {
    setAction({
      downvote: !action.downvote,
      upvote: false,
    });
    action.downvote
    ? checkDownvote
      ? setVote(data?.num_votes + 1)
      : setVote(data?.num_votes)
    : checkDownvote
    ? setVote(data?.num_votes)
    : setVote(data?.num_votes - 1);
    action.downvote ? setStatus(0) : setStatus(-1);
  };

  const toggleComment = () => {
    setComment(!comment);
  };

  const toggleActive = () => {
    setActive(true);
  };

  console.log(action);
  return (
    <div className="bg-white shadow-md px-4 py-3 mt-3 mx-2 md:mx-0 rounded cursor-pointer max-w-xl hover:drop-shadow-lg h-fit">
      <div className="flex justify-between">
        <div className="flex items-center">
          {/* <Image
                      className="rounded-full"
                      height={48}
                      width={48}
                      src={data?.profile}
                      alt="user-profile"
                    /> */}
          <div className="ml-3">
            <div className="text-sm">
              <span className="font-semibold hover:underline">
                {data?.username}
              </span>
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
          <Popover targetId={data?._id} targetType={3} />
        </div>
      </div>
      <div className="mt-2">
        <div className="font-bold text-lg mb-1">{data?.title}</div>
        <div
          className={
            active
              ? "unreset h-fit font-medium text-sm"
              : "unreset h-8 truncate font-medium text-sm"
          }
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
        {active ? (
          ""
        ) : data?.content?.length >= 100 ? (
          <div
            className="text-lightBlue hover:text-blue mt-2 text-sm text-center"
            onClick={toggleActive}
          >
            (read more)
          </div>
        ) : (
          ""
        )}
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
        <div
          className="flex items-center ml-1 sm:ml-5 hover:bg-gray p-1 rounded-md cursor-pointer"
          onClick={toggleComment}
        >
          <AnnotationIcon className="h-6 w-6 text-grayTxt font-medium" />
          <span className="ml-1 sm:text-sm font-semibold">
            {data?.num_comments}
          </span>
        </div>
        <div className="flex items-center ml-1 sm:ml-6 hover:bg-gray p-1 rounded-md cursor-pointer">
          <ShareIcon className="h-5 w-5" />
        </div>
      </div>
      {comment ? (
        <div>
          <hr className="w-full text-gray mt-4" />
          <div className="mt-3">
            <CreateComment threadId={data?._id} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Thread;
