import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import axios from "axios";
import Thread from "../../components/thread";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import UserResult from "../../components/UserResult";
import CommentResult from "../../components/CommentResult";

import {
  SearchCommentAPI,
  SearchThreadAPI,
  SearchUserAPI,
} from "../api/Helpers";
import { useRouter } from "next/router";
import NavbarV2 from "../../components/NavbarV2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Search() {
  const [threads, setThreads] = useState();
  const [comments, setComments] = useState();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(3);

  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [threadsData, commentsData, usersData] = await Promise.all([
          axios({
            method: "get",
            url: SearchThreadAPI(),
            params: {
              q: q,
            },
          }),
          axios({
            method: "get",
            url: SearchCommentAPI(),
            params: {
              q: q,
            },
          }),
          axios({
            method: "get",
            url: SearchUserAPI(),
            params: {
              q: q,
            },
          }),
        ]);
        setThreads(threadsData?.data);
        setComments(commentsData?.data);
        setUsers(usersData?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, [q]);

  let [categories] = useState({
    Threads: threads,
    Comments: comments,
    Users: users,
  });

  return (
    <>
    < NavbarV2 />
    <div className="flex justify-center ">
      <div className="w-full max-w-2xl px-2 py-8 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 rounded-md space-x-1 shadow bg-white">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2 text-sm leading-5 font-semibold text-grayTxt rounded-lg",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-opacity-60",
                    selected ? "bg-orange text-lightGray" : " hover:bg-gray"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          {loading ? (
            <div className="flex items-center justify-center mt-10 space-x-2 animate-bounce">
              <div className="w-5 h-5 bg-orange rounded-full"></div>
              <div className="w-5 h-5 bg-lightOrange rounded-full"></div>
              <div className="w-5 h-5 bg-gray rounded-full"></div>
            </div>
          ) : (
            <Tab.Panels>
              <Tab.Panel>
                {threads?.data
                  ?.slice(0, limit != null ? limit : threadData?.length)
                  .map((data) => (
                    <Thread data={data} key={data?._id} limit={limit} />
                  ))}
                <div className="mx-3 md:mx-0">
                  {limit == threads?.data?.length ? (
                    ""
                  ) : (
                    <button
                      className="bg-lightOrange hover:bg-orange text-white font-bold py-2 px-4 rounded mt-4 w-full"
                      onClick={() => setLimit(threads?.data?.length)}
                    >
                      View All
                    </button>
                  )}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                {comments?.data
                  ?.slice(0, limit != null ? limit : commentsData?.length)
                  .map((comment) => (
                    < CommentResult data={comment}/>
                  ))}
              </Tab.Panel>
              <Tab.Panel>
                {users?.data
                  ?.slice(0, limit != null ? limit : usersData?.length)
                  .map((user) => (
                    <UserResult data={user} key={user?.username} />
                  ))}
              </Tab.Panel>
            </Tab.Panels>
          )}
        </Tab.Group>
      </div>
    </div>
    </>
  );
}

export default Search;
