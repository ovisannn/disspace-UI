import React, { useState } from "react";
import CommentReportList from "./CommentReportList";
import ReportList from "./ReportList";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AdminDashboard() {
  let [categories] = useState({
    Threads: {
      name: "Threads",
    },
    User: {
      name: "Users",
    },
    Comments: {
      name: "Comment",
    },
  });

  return (
    <div>
      <Tab.Group>
        <Tab.List className="p-1 rounded-md text-center min-w-fit mb-5 py-1 bg-white shadow-md mx-96">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-36 py-2 text-sm leading-5 font-semibold text-grayTxt px-8 mx-1",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-opacity-60",
                  selected
                    ? "underline underline-offset-4 decoration-orange decoration-4"
                    : " hover:underline hover:underline-offset-8"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ReportList />{" "}
          </Tab.Panel>
          <Tab.Panel>
            <CommentReportList />
          </Tab.Panel>
          <Tab.Panel>
            <CommentReportList />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default AdminDashboard;
