export const Domain =()=>{
  return "http://localhost:8080"
}

export const GetThreadAPI = () => {
  return "http://localhost:8080/v1/threads";
};

export const GetCategoriesAPI = () => {
  return "http://localhost:8080/v1/categories";
};

export const CreateCommentAPI = (id) => {
  return `http://localhost:8080/v1/users/${id}/comments`;
};

export const SearchThreadAPI = () => {
  return "http://localhost:8080/v1/threads/search";
};

export const SearchCommentAPI = () => {
  return "http://localhost:8080/v1/comments/search";
};

export const SearchUserAPI = () => {
  return "http://localhost:8080/v1/users/search";
};

export const ReportTargetAPI = (username) => {
  return `http://localhost:8080/v1/users/${username}/reporting`;
};

export const GetAllReports = () => {
  return "http://localhost:8080/v1/reports";
};

export const DeleteThreadAPI = (id) => {
  return `http://localhost:8080/v1/threads/${id}`;
};

export const PutVoteAPI = (username, refId) => {
  return `http://localhost:8080/v1/users/${username}/votes/${refId}`;
};

export const GetCommentByID = (id) => {
  return `http://localhost:8080/v1/comment/${id}`;
};

export const GetCommentsReports = () => {
  return "http://localhost:8080/v1/reports/comments";
};

export const GetUserReports = () => {
  return "http://localhost:8080/v1/reports/users";
};























































































export const GetThreadByID = (threadId) => {
  return `${Domain()}/v1/threads/${threadId}`
}

export const GetAllCommentInThread = (threadId, parentId) => {
  return `${Domain()}/v1/threads/${threadId}/comment/${parentId}`
}