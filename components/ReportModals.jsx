import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { GetCommentByID } from "../pages/api/Helpers";
import axios from "axios";

export default function ReportModals({ targetType, targetId }) {
  let [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const handleGet = async (e) => {
    setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: GetCommentByID(targetId),
      });
      setData(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    handleGet();
  }

  const handleDelete = () => {};

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-transparent hover:bg-lightBlue text-lightTeal font-semibold hover:text-white py-1.5 px-3 border border-lightBlue hover:border-transparent rounded"
      >
        View details
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray opacity-60" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {loading ? (
                  <div className="flex items-center justify-center mt-10 space-x-2 animate-bounce">
                    <div className="w-5 h-5 bg-orange rounded-full"></div>
                    <div className="w-5 h-5 bg-lightOrange rounded-full"></div>
                    <div className="w-5 h-5 bg-gray rounded-full"></div>
                  </div>
                ) : (
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <div className="flex items-center">
                        <img
                          className="rounded-full"
                          height={48}
                          width={48}
                          src={data?.user?.profile_pict}
                          alt="user-profile"
                        />
                        <div className="ml-3">
                          <div className="md:text-lg text-md">
                            <span className="font-semibold hover:underline">
                              {data?.user?.username}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Dialog.Title>
                    <div className="mt-3 border border-gray rounded-xl">
                      <p
                        className="text-sm p-3"
                        dangerouslySetInnerHTML={{ __html: data?.text }}
                      />
                    </div>

                    <div className=" mt-4 flex justify-around mx-16">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 w-24 text-sm font-medium text-white bg-red border border-transparent rounded-md hover:bg-darkRed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 w-24 text-sm font-medium text-white bg-lightBlue opacity-60 border border-transparent rounded-md hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
