// id int [pk, increment]
// nama_kategori varchar
// descrciption text
// rules text
// header varchar
// color_theme varchar

exports.dummyCategory = {
  id: 123,
  nama_kategori: "gaming",
  description:
    "A topic for (almost) anything related to games - video games, board games, card games, etc. (but not sports).",
  rules: [
    {
      no: 1,
      text: "Lorem ipsum dolor sit amet",
    },
    {
      no: 2,
      text: "Lorem ipsum dolor sit amet",
    },
    {
      no: 3,
      text: "Lorem ipsum dolor sit amet",
    },
    {
      no: 4,
      text: "Lorem ipsum dolor sit amet",
    },
    {
      no: 5,
      text: "Lorem ipsum dolor sit amet",
    },
    {
      no: 6,
      text: "Lorem ipsum dolor sit amet",
    },
  ],
  headerPath: "",
  color_theme: "#AC6BFE",
};

exports.momodList = [
  {
    id: 123,
    user_id: "@gmomo",
  },
  {
    id: 23,
    user_id: "@admin123",
  },
  {
    id: 3,
    user_id: "@prindapan",
  },
  {
    id: 154,
    user_id: "@huehue",
  },
];

exports.topUser = [
  {
    full_name: "ovi sanjaya",
    username: "@op123",
    password: "op123",
    email: "ovi.sanjaya11@gmail.com",
    gender: "male",
    role: 1,
    status: "active",
    profilePict: ["https://randomuser.me/api/portraits/lego/5.jpg"],
    created_at: 7042229571969613827,
    updated_at: 7042229571969613828,
  },
  {
    full_name: "asd",
    username: "@oasdas",
    password: "op123",
    email: "ovi.sanjaya11@gmail.com",
    gender: "male",
    role: 1,
    status: "active",
    profilePict: ["https://randomuser.me/api/portraits/lego/1.jpg"],
    created_at: 7042229571969613827,
    updated_at: 7042229571969613828,
  },
  {
    full_name: "asd",
    username: "@hero",
    password: "op123",
    email: "ovi.sanjaya11@gmail.com",
    gender: "male",
    role: 1,
    profilePict: ["https://randomuser.me/api/portraits/lego/2.jpg"],
    status: "active",
    created_at: 7042229571969613827,
    updated_at: 7042229571969613828,
  },
  {
    full_name: "asd",
    username: "@shiroe",
    password: "op123",
    email: "ovi.sanjaya11@gmail.com",
    gender: "male",
    role: 1,
    status: "active",
    profilePict: ["https://randomuser.me/api/portraits/lego/3.jpg"],
    created_at: 7042229571969613827,
    updated_at: 7042229571969613828,
  },
  {
    full_name: "asd",
    username: "@nyanta",
    password: "op123",
    email: "ovi.sanjaya11@gmail.com",
    profilePict: ["https://randomuser.me/api/portraits/lego/4.jpg"],
    gender: "male",
    role: 1,
    status: "active",
    created_at: 7042229571969613827,
    updated_at: 7042229571969613828,
  },
];

exports.categoryList = [
  {
    id: 1,
    name: "gaming",
  },
  {
    id: 2,
    name: "health",
  },
  {
    id: 3,
    name: "politics",
  },
  {
    id: 4,
    name: "lifestyle",
  },
  {
    id: 5,
    name: "menganggur",
  },
];

exports.threadData = [
  {
    _id: 1,
    username: "Greatowl12345",
    date: "4 days ago",
    profile: "https://randomuser.me/api/portraits/men/28.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mi faucibus",
    content: `<p><strong>Bold</strong></p><p><em>italic</em></p><p><u>underline</u></p><p><s>strikethrough</s></p><blockquote>quote</blockquote><ol><li>num list</li><li>num list</li><li>num list</li></ol><p><br></p><ul><li>bullet list</li><li>bullet list</li></ul><p><br></p><p class="ql-indent-1">indent 1</p><p class="ql-indent-2">indent 2</p><p><br></p><p><a href="http://localhost:3000/google.com" rel="noopener noreferrer" target="_blank">link</a></p>`,
    num_votes: 1222,
    num_comments: 176,
    liked: true,
    active: false,
  },
  {
    _id: 2,
    username: "disneyprincess111",
    date: "2 days ago",
    profile: "https://randomuser.me/api/portraits/women/52.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mi faucibus",
    content: `<p><em>italic</em></p><p><u>underline</u></p><p><s>strikethrough</s></p><blockquote>quote</blockquote><ol><li>num list</li><li>num list</li><li>num list</li></ol><p><br></p><ul><li>bullet list</li><li>bullet list</li></ul><p><br></p><p class="ql-indent-1">indent 1</p><p class="ql-indent-2">indent 2</p><p><br></p><p><a href="http://localhost:3000/google.com" rel="noopener noreferrer" target="_blank">link</a></p>`,
    num_votes: 365,
    num_comments: 44,
    image_url:
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    liked: false,
    active: false,
  },
  {
    _id: 3,
    username: "Greatowl12345",
    date: "4 days ago",
    profile: "https://randomuser.me/api/portraits/men/28.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mi faucibus",
    content:
      "Lorem ipsum dolor",
    num_votes: 1222,
    num_comments: 176,
    liked: true,
    active: false,
  },
  {
    _id: 4,
    username: "disneyprincess111",
    date: "2 days ago",
    profile: "https://randomuser.me/api/portraits/women/52.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mi faucibus",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat nec ipsum mollis, quis laoreet orci lobortis. Vestibulum nec libero tincidunt, hendrerit magna sit amet, ullamcorper arcu. Sed et bibendum felis. Cras luctus laoreet dui id rutrum. Aliquam ut.",
    num_votes: 365,
    num_comments: 44,
    image_url:
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    liked: false,
    active: false,
  },
  {
    _id: 5,
    username: "Greatowl12345",
    date: "4 days ago",
    profile: "https://randomuser.me/api/portraits/men/28.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mi faucibus",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat nec ipsum mollis, quis laoreet orci lobortis. Vestibulum nec libero tincidunt, hendrerit magna sit amet, ullamcorper arcu. Sed et bibendum felis. Cras luctus laoreet dui id rutrum. Aliquam ut.",
    num_votes: 1222,
    num_comments: 176,
    liked: true,
    active: false,
  },
  {
    _id: 6,
    username: "disneyprincess111",
    date: "2 days ago",
    profile: "https://randomuser.me/api/portraits/women/52.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mi faucibus",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat nec ipsum mollis, quis laoreet orci lobortis. Vestibulum nec libero tincidunt, hendrerit magna sit amet, ullamcorper arcu. Sed et bibendum felis. Cras luctus laoreet dui id rutrum. Aliquam ut.",
    num_votes: 365,
    num_comments: 44,
    image_url:
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    liked: false,
    active: false,
  },
];

exports.comments = [
  {
    id: 123,
    user_id: 123,
    thread_id: 123,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    liked_by: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: 123,
    user_id: 123,
    thread_id: 123,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    liked_by: [1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: 123,
    user_id: 123,
    thread_id: 123,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    liked_by: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
];

exports.currentUser = {
  _id: "62dc7d9ed23cd8284d011234",
  full_name: "Harry Von Potter",
  username: "harryvpotter1",
  email: "harry@gmail.com",
  role: 3,
  profile_pict: "https://randomuser.me/api/portraits/men/82.jpg",
};
