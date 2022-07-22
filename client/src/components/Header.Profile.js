import { useEffect, useState } from "react";
import { Avatar, Dropdown, Grid, Text } from "@nextui-org/react";
import { getUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

function Profile({ user }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUser(user.id).then((res) => setUserInfo(res.data.targetUser));
  }, [userInfo]);

  const logoutHandler = () => {
    localStorage.clear();
    navigate(0);
  };

  return (
    <>
      <Grid>
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <Avatar
              bordered
              size="lg"
              as="button"
              color="secondary"
              src={
                userInfo.length !== 0 && userInfo.profilePicture.picture !== ""
                  ? userInfo.profilePicture.picture
                  : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
              }
            />
          </Dropdown.Trigger>
          <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {user.username}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              <span onClick={logoutHandler}>Log Out</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    </>
  );
}

export default Profile;
