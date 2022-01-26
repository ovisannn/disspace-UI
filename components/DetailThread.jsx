import { useEffect, useState } from "react";
import { BsDot, BsTriangle, BsTriangleFill } from "react-icons/bs";
import { AnnotationIcon, ShareIcon } from "@heroicons/react/outline";
import Image from "next/image";
import moment from "moment";
import PopOver from "./PopOver";
import Link from "next/link";
import CreateComment from "./CreateComment";
import VoteButtonLogic from "./VoteButtonLogic";

function DetailThread({ data }) {
  const [comment, setComment] = useState(false);

  const toggleComment = () => {
    setComment(!comment);
  };

  return (
    <div className="bg-white shadow-md px-4 py-3 mt-3 mx-2 md:mx-0 rounded cursor-pointer max-w-2xl hover:drop-shadow-lg h-fit">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            className="rounded-full"
            height={48}
            width={48}
            src={data?.user?.profile_pict}
            alt="user-profile"
          />
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
          <PopOver targetId={data?._id} targetType={3} />
        </div>
      </div>
      <div className="mt-2">
        <div className="font-bold text-lg mb-1 hover:underline">
          {data?.title}
        </div>
        <div className="bg-gray flex justify-center my-5">
          <div className="w-1/3 h-72 relative">
            <Image src={data?.image_url} layout="fill" objectFit="fit"/>
          </div>
        </div>
        <div
          className={"unreset h-fit font-medium text-sm"}
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      </div>
      <div className="flex items-center text-grayTxt text-xs mt-5">
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

export default DetailThread;
