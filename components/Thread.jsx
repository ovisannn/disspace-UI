import { useState } from "react";
import { BsDot, BsTriangle, BsTriangleFill } from "react-icons/bs";
import {
  AnnotationIcon,
  ShareIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import moment from "moment";

function Thread({ data }) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(true);
  };

  return (
    <div className="bg-white shadow-md px-4 py-3 mt-3 mx-2 rounded cursor-pointer max-w-xl hover:drop-shadow-lg h-fit">
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
          <DotsHorizontalIcon className="h-5 w-5" />
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
        ) : (
          <div
            className="text-lightBlue hover:text-blue mt-1 text-sm font-semibold"
            onClick={toggleActive}
          >
            (read more)
          </div>
        )}
      </div>
      <div className="flex items-center text-grayTxt text-xs mt-1.5">
        <div className="flex items-center text-sm border rounded-md">
          {data?.liked ? (
            <BsTriangleFill
              size={28}
              className="cursor-pointer bg-gray p-1 rounded-l-md"
              color="green"
            />
          ) : (
            <BsTriangle
              size={28}
              className="hover:text-white cursor-pointer hover:bg-green p-1 rounded-l-md"
            />
          )}
          <span className="ml-1.5 mr-1 sm:mr-3 font-semibold">
            {data?.num_votes}
          </span>
          <BsTriangle
            size={28}
            className="rotate-18 hover:text-white cursor-pointer hover:bg-red p-1 ml-1.5 border-l-2 rounded-l-md"
          />
        </div>
        <div className="flex items-center ml-1 sm:ml-5 hover:bg-gray p-1 rounded-md cursor-pointer">
          <AnnotationIcon className="h-6 w-6 text-grayTxt font-medium" />
          <span className="ml-1 sm:text-sm font-semibold">
            {data?.num_comments}
          </span>
        </div>
        <div className="flex items-center ml-1 sm:ml-6 hover:bg-gray p-1 rounded-md cursor-pointer">
          <ShareIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export default Thread;
