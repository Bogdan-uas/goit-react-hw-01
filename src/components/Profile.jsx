import "../userData.json";
import "./Profile.module.css"


export default function Profile({ name, tag, location, image, stats }) {
    return (
    <div className="card">
        <div className="card-upper-part">
            <img
                src={image}
                    alt="User avatar"
                    className="card-image"
            />
        <p className="username">{name}</p>
        <p className="user-tag">@{tag}</p>
        <p className="user-location">{location}</p>
    </div>

    <ul className="stats-list">
        <li className="stats-item">
            <span className="stats-title">Followers</span>
            <span className="stats-info">{stats.followers}</span>
        </li>
        <li className="stats-item">
            <span className="stats-title">Views</span>
            <span className="stats-info">{stats.views}</span>
        </li>
        <li className="stats-item">
            <span className="stats-title">Likes</span>
            <span className="stats-info">{stats.likes}</span>
        </li>
    </ul>
    </div>
    );
}