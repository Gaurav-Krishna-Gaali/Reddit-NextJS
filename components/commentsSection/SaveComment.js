import { RedditContext } from "../../context/RedditContext";
import { useContext, useState } from "react";
import { supabase } from "../../services/supabaseClient";

const style = {
  wrapper: "flex flex-col rounded bg-[#1a1a1b] p-4 space-y-2",
  input:
    "rounded border border-[#343536] bg-[#1a1a1b] px-4 py-2 text-left text-sm text-white focus:outline-none",
  commentBtn:
    "rounded-full bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1a1a1b]",
};

const SaveComment = ({ postId }) => {
  const { currentUser } = useContext(RedditContext);
  const [input, setInput] = useState("");

  const saveComment = async () => {
    try {
      //   setIsLoading(true);

      await supabase.from("comments").insert({
        author: currentUser.user_metadata_fullname,
        text: input,
        postId: postId,
        userEmail: currentUser.email,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setInput("");
    }
  };

  return (
    <div className={style.wrapper}>
      <div className="text-sm">
        Comment as {"  "}
        <span className="text-[#4296CA]">
          {currentUser?.user_metadata.full_name}
        </span>
      </div>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        value={input}
        cols="30"
        rows="8"
        className={style.input}
        placeholder="What's on your mind?"
      />
      <div className="flex justify-end pt-2">
        <button className={style.commentBtn} onClick={saveComment}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default SaveComment;
