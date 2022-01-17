import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import axios from "axios";
import Thread from "../../components/thread";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Search() {
  const [threads, setThreads] = useState();
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [threadsData, commentsData] = await Promise.all([
          axios.get("http://localhost:8080/v1/threads/search"),
          axios.get("http://localhost:8080/v1/comments/search"),
        ]);
        setThreads(threadsData?.data);
        setComments(commentsData?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  let [categories] = useState({
    Threads: threads,
    Comments: comments,
    Users: [],
  });

  console.log(loading ? "lagi loading" : "selesai");
  console.log(threads?.data);
  console.log(comments?.data);

  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-2xl px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 rounded-md space-x-1 shadow bg-white">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2 text-sm leading-5 font-semibold text-grayTxt rounded-lg",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-orange shadow shadow-white text-white"
                      : "text-blue-100 hover:bg-gray"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          {loading ? (
            // <div>
            //   <div
            //     className="w-8 h-8 border-4 border-orange border-solid rounded-full animate-spin border-t-white"
            //   ></div>
            // </div>
            <div className="flex items-center justify-center mt-10 space-x-2 animate-bounce">
              <div className="w-5 h-5 bg-orange rounded-full"></div>
              <div className="w-5 h-5 bg-lightOrange rounded-full"></div>
              <div className="w-5 h-5 bg-gray rounded-full"></div>
            </div>
          ) : (
            <Tab.Panels>
              <Tab.Panel>
                <Thread data={threads?.data} limit={limit} />
                <div className="mx-3 md:mx-0">
                  <button
                    className="bg-lightOrange hover:bg-orange text-white font-bold py-2 px-4 rounded mt-4 w-full"
                    onClick={() => setLimit(threads?.data?.length)}
                  >
                    View All
                  </button>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          )}
        </Tab.Group>
      </div>
    </div>
  );
}

export default Search;
