import { AnnotationIcon, GiftIcon, ShareIcon } from "@heroicons/react/outline";

const style = {
  icon: "w-4 h-4 ",
  iconsContainer: "flex space-x-1 text-[#818384] items-center",
  wrapper: "flex space-x-4 p-2 item-center ",
};

const Actions = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.iconsContainer}>
        <AnnotationIcon className={style.icon} />
        <span className="text-xs">19 comments</span>
      </div>

      <div className={style.iconsContainer}>
        <GiftIcon className={style.icon} />
        <span className="text-xs">Awards</span>
      </div>

      <div className={style.iconsContainer}>
        <ShareIcon className={style.icon} />
        <span className="text-xs">Share</span>
      </div>
    </div>
  );
};

export default Actions;
