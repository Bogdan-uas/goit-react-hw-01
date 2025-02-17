import friend from "../friends.json";
import style from "./FriendList.module.css";

function FriendListItem({ avatar = friend.avatar, name = friend.name, isOnline = friend.isOnline }) {
	if (isOnline === true) {
		return (
			<div>
				<img src={avatar} alt="Avatar" width="48" />
				<p>{name}</p>
				<p className={style.isOnlinee}>Online</p>
			</div>
		);
	} else {
	return (
        <div>
        <img src={avatar} alt="Avatar" width="48" />
		<p>{name}</p>
		<p className={style.isOffline}>Offline</p>
        </div>
	);
	};
}

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