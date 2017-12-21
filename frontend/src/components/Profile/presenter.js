import React from "react";
import Loading from "components/Loading";

const Profile = props => {
  console.log(props);
  const { profile } = props;
  if (!props.profile) {
    return <Loading />;
  } else {
    return (
      <div>
        <img src={profile.profile_image} alt={profile.name} />
        <h1>name: {profile.name}</h1>
        <p>Bio: {profile.bio}</p>
      </div>
    );
  }
};

export default Profile;
