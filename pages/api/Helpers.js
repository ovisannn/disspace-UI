// const Domain = "http://localhost:8080"

export const Domain = () => {
  return "http://localhost:8080";
};

export const GetThreadAPI = () => {
  return `${Domain()}/v1/threads`;
};

export const GetCategoriesAPI = () => {
  return `${Domain()}/v1/categories`;
};

export const CreateCommentAPI = (id) => {
  return `${Domain()}/v1/users/${id}/comments`;
};

export const SearchThreadAPI = () => {
  return `${Domain()}/v1/threads/search`;
};

export const SearchCommentAPI = () => {
  return `${Domain()}/v1/comments/search`;
};

export const SearchUserAPI = () => {
  return `${Domain()}/v1/users/search`;
};

export const ReportTargetAPI = (username) => {
  return `${Domain()}/v1/users/${username}/reporting`;
};

export const GetAllReports = () => {
  return `${Domain()}/v1/reports`;
};

export const DeleteThreadAPI = (id) => {
  return `${Domain()}/v1/threads/${id}`;
};

export const PutVoteAPI = (username, refId) => {
  return `${Domain()}/v1/users/${username}/votes/${refId}`;
};

export const GetCommentByID = (id) => {
  return `${Domain()}/v1/comment/${id}`;
};

export const GetCommentsReports = () => {
  return `${Domain()}/v1/reports/comments`;
};

export const GetUserReports = () => {
  return `${Domain()}/v1/reports/users`;
};

export const LoginAPI = () => {
  return `${Domain()}/v1/user/login`;
};

export const GetUserProfile = (username) => {
  return `${Domain()}/v1/userProfile/${username}`;
};

export const GetLeaderboard = () => {
  return `${Domain()}/v1/TopUser`;
};

export const GetCategoryByID = (id) => {
  return `${Domain()}/v1/categories/${id}`;
};

export const GetModeratorsByCategoryID = (id) => {
  return `${Domain()}/v1/moderators/${id}`;
};

export const GetThreadsByCategoryID = (id) => {
  return `${Domain()}/v1/threads/category/${id}`;
};

export const GetThreadByID = (threadId) => {
  return `${Domain()}/v1/threads/${threadId}`;
};

export const GetAllCommentInThread = (threadId, parentId) => {
  return `${Domain()}/v1/threads/${threadId}/comment/${parentId}`;
};

export const RegisterAPI = () => {
  return `${Domain()}/v1/user/register`;
};
