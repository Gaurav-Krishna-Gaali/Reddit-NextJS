import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../../services/supabaseClient";

const style = {
  wrapper: "flex flex-col space-y-6",
  input:
    "bg-[#1a1a1b] border border-[#343536] px-6 py-2 text-left text-sm text-white  focus:outline-none",
  title: "text-2xl pb-3 text-white font-medium border-b border-[#343536]",
  postBtn:
    "bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1a1a1b] rounded-full",
  postBtnContainer: "flex justify-end  pt-2",
};

const PostForm = () => {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const createPost = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await supabase.from("feed").insert([
        {
          author: "Gaurav Krishna",
          title,
          content,
        },
      ]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      router.push("/");
    }
  };
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Create a new post</h1>

      <div className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4">
        <input
          type="text"
          className={style.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={style.input}
          placeholder="Text (required) "
          cols="30"
          rows="10"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className={style.postBtnContainer}>
          <button onClick={createPost} className={style.postBtn}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
