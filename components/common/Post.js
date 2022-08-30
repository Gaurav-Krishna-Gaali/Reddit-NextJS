import Vote from "../feed/Vote";
import Actions from "../feed/Actions";
import Info from "../feed/Info";

const style = {
  post: "flex flex-col space-y-1 cursor-pointer",
  wrapper: "flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]",
  postTitle: "text-lg font-medium text-[#D7DADC]",
  postContent: "text-sm text-[#3D7DADC]/80 font-light",
};

const Post = () => {
  return (
    <div className={style.wrapper}>
      <Vote />
      <div className={style.post}>
        <Info />
        <h1 className={style.postTitle}>Reddit Clone</h1>
        <p className={style.postContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, hic?
          Quisquam harum magni fugiat sapiente ad. Nihil reiciendis inventore
          deleniti unde neque fuga, corporis facere?
        </p>
        <Actions className={style.actions} />
      </div>
    </div>
  );
};

export default Post;