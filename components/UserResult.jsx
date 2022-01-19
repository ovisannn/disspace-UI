import { useState } from "react";
import Popover from "./PopOver";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

function UserResult({ data }) {
  return (
    <div className="bg-white shadow-md px-4 py-3 mt-3 mx-2 md:mx-0 rounded cursor-pointer max-w-2xl hover:drop-shadow-lg h-fit">
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center">
          <img
            className="rounded-full"
            height={48}
            width={48}
            src={data?.profile_pict}
            // src="https://randomuser.me/api/portraits/men/19.jpg"
            alt="user-profile"
          />
          <div className="ml-3">
            <div className="md:text-lg text-xs">
              <span className="font-semibold hover:underline">
                {data?.username}
              </span>
              <span>
                <BsDot className="inline" size={16} color="gray" />
              </span>
              <span className="hover:text-orange font-bold cursor-pointer text-lightOrange">
                Follow
              </span>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer">
          <Link href={`user/${data?.username}`}>
            <button
              type="button"
              className="bg-lightTeal hover:bg-lightBlue text-white md:text-lg text-xs font-semibold md:px-5 px-2 rounded-full h-10 ml-3 mt-1"
            >
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserResult;
