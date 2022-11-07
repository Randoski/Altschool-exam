import useFetch from "../components/useFetch";
import '../assets/profile.css';


function Profile() {
    const url = "https://api.github.com/users/randoski"
    const { loading, data } = useFetch(url)
    return (
        <div className="header-container container">
            <h1 className="heading">Personal details</h1>

            {/* Image and Names */}
            <div className="details-holder extra">
                <img className="user-img" src={data.avatar_url} alt="Github Dp" />

                {/* Names */}
                <div>
                    <p className="extra-head">{data.name}</p>

                    {/* Following */}
                    <div className="followers">
                        <p>{data.followers} Followers</p>
                        <p>{data.following} Following</p>
                    </div>
                </div>
            </div>

            {/* Bio */}
            <h1 className="heading">My bio</h1>
            <div className="details-holder">
                <p>{data.bio}</p>
            </div>
                
        </div>
    )
}

export default Profile;