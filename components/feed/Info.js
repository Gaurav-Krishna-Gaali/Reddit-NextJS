/* eslint-disable @next/next/no-img-element */
const style = {
  profilePic: "h-4 w-4 rounded-full",
  wrapper: "flex items-center space-x-1 text-xs text-[#818384]",
  profilePicContainer: "flex items-center space-x-1 ",
  tag: "cursor-pointer text-xs text-[#D7DADC] font-semibold hover:underline",
  postedBy: "flex items-center space-x-1",
};

const Info = ({ author, created_at }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
        <img
          src="https://tvovermind.com/wp-content/uploads/2021/10/harvey-specter-tile-750x422.jpg"
          alt="logo"
          className={style.profilePic}
        />
      </div>

      <div className={style.tag}>r/Gauravkrishna</div>

      <div className="">•</div>

      <div className={style.postedBy}>
        <span>Posted by {author}</span>
        <div className="">•</div>
        <span>{created_at}</span>
      </div>
    </div>
  );
};

export default Info;
