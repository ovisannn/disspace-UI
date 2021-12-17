import Thread from "../../components/thread";

export default function Temporary() {
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
      <Thread data={data} />
    </>
  );
}
