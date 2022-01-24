import React from "react";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";
import {
  HiOutlineClipboardList,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiFileListLine } from "react-icons/ri";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import ReportList from "../../components/ReportList";
import UserList from "../../components/UserList";
import CommentReportList from "../../components/CommentReportList";

function Admin() {
  return (
    <>
      <Tab.Group>
        <div className="fixed flex flex-col top-16 left-0 w-14 mt-1 hover:w-64 md:w-64 bg-white h-full transition-all duration-300 border-none z-10 shadow-md">
          <Tab.List>
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block text-center text-orange my-3">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-xl font-bold text-center tracking-wide">
                      Welcome, Admin!
                    </div>
                  </div>
                </li>
                <li>
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "h-11 focus:outline-none bg-gray text-black w-full border-l-4 border-black pr-6"
                        : "h-11 focus:outline-none hover:bg-gray text-grayTxt hover:text-black w-full border-l-4 border-white hover:border-black pr-6"
                    }
                  >
                    <a href="#" className="relative flex flex-row items-center">
                      <span className="inline-flex justify-center items-center ml-4">
                        <HiOutlineClipboardList size={24} />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate mt-0.5">
                        Report List
                      </span>
                    </a>
                  </Tab>
                </li>
                <li>
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "h-11 focus:outline-none bg-gray text-black w-full border-l-4 border-black pr-6"
                        : "h-11 focus:outline-none hover:bg-gray text-grayTxt hover:text-black w-full border-l-4 border-white hover:border-black pr-6"
                    }
                  >
                    <a href="#" className="relative flex flex-row items-center">
                      <span className="inline-flex justify-center items-center ml-4">
                        <RiFileListLine size={24} />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate mt-0.5">
                        Threads
                      </span>
                    </a>
                  </Tab>
                </li>
                <li>
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "h-11 focus:outline-none bg-gray text-black w-full border-l-4 border-black pr-6"
                        : "h-11 focus:outline-none hover:bg-gray text-grayTxt hover:text-black w-full border-l-4 border-white hover:border-black pr-6"
                    }
                  >
                    <a href="#" className="relative flex flex-row items-center">
                      <span className="inline-flex justify-center items-center ml-4">
                        <HiOutlineUserGroup size={24} />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate mt-0.5">
                        Users
                      </span>
                    </a>
                  </Tab>
                </li>
              </ul>
            </div>
          </Tab.List>
        </div>
        <div className="flex align-middle justify-center items-center h-full ml-14 mt-14 mb-10 md:ml-64">
          <Tab.Panels>
            <Tab.Panel>
              {" "}
              <ReportList />
            </Tab.Panel>
            <Tab.Panel>
              <CommentReportList />
            </Tab.Panel>
            <Tab.Panel>
              <UserList />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

export default Admin;

Admin.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
