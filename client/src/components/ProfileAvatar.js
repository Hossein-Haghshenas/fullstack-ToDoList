import { Avatar } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getUser } from "../api/userApi";
import { userInfo } from "./AuthChecker";

const ProfileAvatar = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUser(userInfo.id).then((res) => setUserData(res.data.targetUser));
  }, [userData]);
  return (
    <Avatar
      bordered
      size="lg"
      as="button"
      color="secondary"
      src={
        userData.length !== 0 && userData.profilePicture.picture !== ""
          ? userData.profilePicture.picture
          : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
      }
    />
  );
};

export default ProfileAvatar;
