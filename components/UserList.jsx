import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { SearchUserAPI } from "../pages/api/Helpers";
import { FaEdit } from "react-icons/fa";

function UserList() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: SearchUserAPI(),
      params: {
        q: keyword,
      },
    }).then((response) => {
      setUsers(response?.data);
      setLoading(false);
    });
  }, [keyword]);

  console.log(users?.data);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center mt-10 space-x-2 animate-bounce">
          <div className="w-5 h-5 bg-orange rounded-full"></div>
          <div className="w-5 h-5 bg-lightOrange rounded-full"></div>
          <div className="w-5 h-5 bg-gray rounded-full"></div>
        </div>
      ) : (
        <div>
          <div className="md:mx-32">
            <table className="table-auto bg-white shadow-md mt-2">
              <thead className="bg-gray">
                <tr className="text-lg">
                  <th className="p-3 px-5">Username</th>
                  <th className="p-3 px-5">Reputation</th>
                  <th className="p-3 px-5">Following</th>
                  <th className="p-3 px-5">Followers</th>
                  <th className="p-3 px-5"></th>
                  <th className="p-3 px-5"></th>
                  <th className="p-3 px-5"></th>
                </tr>
              </thead>
              <tbody>
                {users?.data?.map((data) => (
                  <tr key={data?._id} className="border-t border-gray">
                    <td className="px-4 py-2">
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
                          <div className="md:text-base text-xs">
                            <span className="font-semibold">
                              {data?.username}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{data?.reputation}</td>
                    <td className="text-center">{data?.following}</td>
                    <td className="text-center">{data?.followers}</td>
                    <td className="text-center">
                      {" "}
                      <div className="flex cursor-pointer">
                        <button
                          type="button"
                          className="flex justify-center align-middle items-center bg-lightOrange hover:bg-orange text-white md:text-sm text-xs font-semibold md:px-4 px-2 rounded-lg h-10 ml-3"
                        >
                          <span className="mr-1.5 -mt-0.5">
                            <FaEdit size={18}/>
                          </span>{" "}
                          Edit Role
                        </button>
                      </div>
                    </td>
                    <td className="text-center">
                      {" "}
                      <div className="flex cursor-pointer">
                        <Link href={`user/${data?.username}`}>
                          <button
                            type="button"
                            className="bg-lightTeal hover:bg-lightBlue text-white md:text-sm text-xs font-semibold md:px-4 px-2 rounded-lg h-10 ml-3"
                          >
                            View Profile
                          </button>
                        </Link>
                      </div>
                    </td>
                    <td className="text-center pr-2">
                      {" "}
                      <div className="flex cursor-pointer">
                        <button
                          type="button"
                          className="bg-red hover:bg-darkRed text-white md:text-sm text-xs font-semibold md:px-4 px-2 rounded-lg h-10 ml-3"
                        >
                          Ban
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
