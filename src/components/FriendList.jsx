import style from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
	return (
	<ul className={style.friend_list}>
	{friends.map(friend => {
	<li key={friend.id}>
		<FriendListItem />
	</li>
	})}
    </ul>
	);
}