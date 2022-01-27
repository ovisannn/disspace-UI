import { useState } from "react";
import { BsTriangle, BsTriangleFill } from "react-icons/bs";
import { PutVoteAPI } from "../pages/api/Helpers";
import axios from "axios";

function VoteButtonLogic({ data, currentUsername }) {
  const voterList = data?.votes;
  const votersData = voterList?.find(
    (item) => item.username === currentUsername
  );

  const checkUpvote = false;
  const checkDownvote = false;

  if (votersData?.status === 1) {
    checkUpvote = true;
  } else if (votersData?.status === -1) {
    checkDownvote = true;
  }

  const [action, setAction] = useState({
    upvote: checkUpvote,
    downvote: checkDownvote,
  });

  const [vote, setVote] = useState(data?.num_votes);

  const handleVote = async (value) => {
    try {
      const response = await axios({
        method: "put",
        url: PutVoteAPI(username, data?._id),
        data: {
          status: value,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpvote = () => {
    setAction({
      upvote: !action.upvote,
      downvote: false,
    });
    action.upvote
      ? checkUpvote
        ? setVote(data?.num_votes - 1)
        : checkDownvote
        ? setVote(data?.num_votes + 1)
        : setVote(data?.num_votes)
      : checkUpvote
      ? setVote(data?.num_votes)
      : checkDownvote
      ? setVote(data?.num_votes + 2)
      : setVote(data?.num_votes + 1);
    action.upvote ? handleVote(0) : handleVote(1);
  };

  const handleDownvote = () => {
    setAction({
      downvote: !action.downvote,
      upvote: false,
    });
    action.downvote
      ? checkDownvote
        ? setVote(data?.num_votes + 1)
        : checkUpvote
        ? setVote(data?.num_votes - 1)
        : setVote(data?.num_votes)
      : checkDownvote
      ? setVote(data?.num_votes)
      : checkUpvote
      ? setVote(data?.num_votes - 2)
      : setVote(data?.num_votes - 1);
    action.downvote ? handleVote(0) : handleVote(-1);
  };

  return (
    <div className="flex items-center text-sm border rounded-md">
      {action.upvote ? (
        <BsTriangleFill
          size={28}
          className="cursor-pointer bg-gray p-1 rounded-l-md"
          color="green"
          onClick={handleUpvote}
        />
      ) : (
        <BsTriangle
          size={28}
          className="hover:text-white cursor-pointer hover:bg-green p-1 rounded-l-md"
          onClick={handleUpvote}
        />
      )}
      <span className="ml-1.5 mr-1 sm:mr-3 font-semibold">{vote}</span>
      {action.downvote ? (
        <BsTriangleFill
          size={28}
          className="cursor-pointer rotate-180 bg-gray p-1 rounded-l-md"
          color="red"
          onClick={handleDownvote}
        />
      ) : (
        <BsTriangle
          size={28}
          className="rotate-180 hover:text-white cursor-pointer hover:bg-red p-1 ml-1.5 border-r-2"
          onClick={handleDownvote}
        />
      )}
    </div>
  );
}

export default VoteButtonLogic;
