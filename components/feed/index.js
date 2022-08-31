import Post from "../common/Post";

const style = {
  wrapper: "space-y-2.5",
};

// Dummy data for the feed
// const posts = [
//   { id: 0, title: "Post 1", author: "gaurav" },
//   { id: 1, title: "Cloneing manifests", author: "gaurav" },
//   { id: 2, title: "Web3 and it's intrinsic uses", author: "gaurav" },
// ];

const Feed = ({ posts }) => {
  return (
    <div className={style.wrapper}>
      {posts.map((post, id) => (
        <Post {...post} key={id} />
      ))}
    </div>
  );
};

export default Feed;
