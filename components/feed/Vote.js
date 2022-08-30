import { UpvoteIcon } from "../common/UpvoteIcon";
import { DownvoteIcon } from "../common/DownvoteIcon";

const style = {
  votes: "py-1 text-white text-xs  font-bold ",
  wrapper: "flex flex-col items-center",
};

const Vote = () => {
  const upvote = 110;
  const downvote = 5;
  return (
    <>
      <div className={style.wrapper}>
        <button>
          <UpvoteIcon />
        </button>
        <p className={style.votes}>{upvote - downvote}</p>
        <button>
          <DownvoteIcon />
        </button>
      </div>
    </>
  );
};

export default Vote;
