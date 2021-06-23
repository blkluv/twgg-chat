import { useContext } from "react";
import { BadgesContext } from "./ChatList";
import { BadgeData } from "../api/Twitch";
import styles from "./ChatBadge.module.css";

type ChatBadgeProps = {
  badge: BadgeData;
};

function ChatBadge({ badge }: ChatBadgeProps) {
  const badges = useContext(BadgesContext);
  const b = badges?.[badge._id]?.versions[badge.version];
  if (!b) return null;

  return (
    <img
      src={b.image_url_1x}
      srcSet={`${b.image_url_1x} 1x, ${b.image_url_2x} 2x, ${b.image_url_4x} 4x`}
      alt={b.title}
      className={`${styles.badge} align-middle`}
    ></img>
  );
}

export default ChatBadge;
