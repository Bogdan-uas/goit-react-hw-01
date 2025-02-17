import style from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
	return (
	<ul className={style.friend_list}>
	{friends.map(friend => {
		return (
			<li key={friend.id} className={style.friend_item}>
				<FriendListItem
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
				/>
			</li>
		)
	})}
    </ul>
	);
}