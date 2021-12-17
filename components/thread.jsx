import { BsDot, BsTriangle, BsTriangleFill } from "react-icons/bs";
import {
  AnnotationIcon,
  ShareIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

function Thread() {
  const data = [
    {
      id: 1,
      username: "Greatowl12345",
      date: "4 days ago",
      profile: "https://randomuser.me/api/portraits/men/28.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mi faucibus",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat nec ipsum mollis, quis laoreet orci lobortis. Vestibulum nec libero tincidunt, hendrerit magna sit amet, ullamcorper arcu. Sed et bibendum felis. Cras luctus laoreet dui id rutrum. Aliquam ut.",
      total_likes: 1222,
      total_comments: 176,
      liked: true,
    },
    {
      id: 2,
      username: "disneyprincess111",
      date: "2 days ago",
      profile: "https://randomuser.me/api/portraits/women/52.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mi faucibus",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat nec ipsum mollis, quis laoreet orci lobortis. Vestibulum nec libero tincidunt, hendrerit magna sit amet, ullamcorper arcu. Sed et bibendum felis. Cras luctus laoreet dui id rutrum. Aliquam ut.",
      total_likes: 365,
      total_comments: 44,
      image_url:
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
      liked: false,
    },
  ];

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="bg-lightTeal p-3 flex flex-col w-screen h-screen overflow-y-scroll">
          {data?.map((data) => (
            <div className="bg-white shadow-md px-4 py-3 mt-3 rounded-md max-w-2xl cursor-pointer hover:drop-shadow-lg h-fit">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Image
                    className="rounded-full"
                    height={48}
                    width={48}
                    src={data.profile}
                    alt="user-profile"
                  />
                  <div className="ml-3">
                    <div className="text-sm">
                      <span className="font-semibold hover:underline">
                        {data.username}
                      </span>
                      <span>
                        <BsDot className="inline" size={16} color="gray" />
                      </span>
                      <span className="text-orange font-bold cursor-pointer hover:text-lightOrange">
                        Follow
                      </span>
                    </div>
                    <div className="text-grayTxt font-medium text-xs">
                      {data?.date}
                    </div>
                  </div>
                </div>
                <div className="flex cursor-pointer">
                  <DotsHorizontalIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="grid place-items-center sm:flex items-center mt-3 mb-2">
                {data?.image_url ? (
                  <div className="mr-3.5">
                    <Image
                      className="object-cover rounded-md"
                      src={data.image_url}
                      height={180}
                      width={180}
                      layout="fixed"
                      alt="cover"
                    />
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <h3 className="font-bold text-md mb-1 text-center sm:text-left">
                    {data?.title}
                  </h3>
                  <p className="font-medium text-sm text-md text-justify">
                    {data?.content}
                  </p>
                </div>
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
                      className="upvote-icon cursor-pointer hover:bg-gray p-1 rounded-l-md"
                    />
                  )}
                  <span className="ml-0.5 mr-1 sm:mr-3 font-semibold">
                    {data.total_likes}
                  </span>
                  <BsTriangle
                    size={28}
                    className="downvote-icon cursor-pointer hover:bg-gray p-1 ml-1.5 border-r-2 rounded-l-md"
                  />
                </div>
                <div className="flex items-center ml-1 sm:ml-5 hover:bg-gray p-1 rounded-md cursor-pointer">
                  <AnnotationIcon className="h-6 w-6" />
                  <span className="ml-1.5 sm:text-sm font-semibold">
                    {data.total_comments} comments
                  </span>
                </div>
                <div className="flex items-center ml-1 sm:ml-6 hover:bg-gray p-1 rounded-md cursor-pointer">
                  <ShareIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Thread;
