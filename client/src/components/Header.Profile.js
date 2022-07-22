import { useEffect, useState } from "react";
import { Avatar, Dropdown, Grid, Text } from "@nextui-org/react";
import { getUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { userInfo } from "./AuthChecker";

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUser(userInfo.id).then((res) => setUserData(res.data.targetUser));
  }, [userData]);

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
                userData.length !== 0 && userData.profilePicture.picture !== ""
                  ? userData.profilePicture.picture
                  : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
              }
            />
          </Dropdown.Trigger>
          <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
            <Dropdown.Item
              textValue="Signed-in-as"
              key="profile"
              css={{ height: "$18" }}
            >
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {userInfo.username}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item textValue="Settings" key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item textValue="Analytics" key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item
              textValue="Feedback"
              key="help_and_feedback"
              withDivider
            >
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item
              textValue="Log-Out"
              key="logout"
              color="error"
              withDivider
            >
              <span onClick={logoutHandler}>Log Out</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    </>
  );
}

export default Profile;
