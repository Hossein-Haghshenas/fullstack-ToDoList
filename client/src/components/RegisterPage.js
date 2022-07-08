import { useMemo, useState, useRef } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Dropdown,
  Grid,
  Input,
  Text,
} from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { signUp } from "../api/authApi";
import { convertToBase64 } from "./ImageToBase64";

function RegisterPage() {
  const navigate = useNavigate();
  /* profile picture input state*/
  const [profile, setProfile] = useState("");

  /* name & family inputs state*/
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");

  /* age & language inputs state*/
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState(["Choose your language"]);
  const selectedValue = useMemo(
    () => Array.from(language).join(", ").replaceAll("_", " "),
    [language]
  );

  /* address inputs state*/
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  /* abilities input state*/
  const abilityInput = useRef();
  const [ability, setAbility] = useState([]);

  /* username & password inputs state*/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /* adminity input state*/
  const [adminity, setAdminity] = useState(false);

  const submitHandler = () => {
    const data = {
      profilePicture: { picture: profile },
      firstName: name,
      lastName: family,
      age: age,
      language: Object.values(language)[0],
      githubAddress: github,
      linkedinAddress: linkedin,
      abilities: ability,
      username: username,
      password: password,
      adminity: adminity,
    };

    console.log(data);
    signUp(data).then((result) => result && navigate("/login"));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setProfile(base64);
  };

  return (
    <section className="signup-page bg-dark text-secondary p-5">
      <section className="signup-container bg-white">
        {/* image */}

        <section className="signup-img d-none d-sm-block">
          <img
            className="w-100 h-100"
            src={require("../image/decor.png")}
            alt=""
          />
        </section>

        {/* form inputs */}

        <form className="signup-inputs-container">
          {/* profile picture row */}

          <section className="w-100 d-flex justify-content-center">
            <input
              className="d-none"
              type="file"
              accept=".png, .jpg, .jpeg"
              name="profile"
              id="profile"
              onChange={handleFileUpload}
            />

            <section className="profile">
              <Avatar
                className="profile-picture"
                size="xl"
                src={
                  profile !== ""
                    ? profile
                    : "https://i.pravatar.cc/150?u=a042581f4e25056704b"
                }
                color="gradient"
                bordered
              />
              <label className="add-profile" htmlFor="profile">
                <BiPlus></BiPlus>
              </label>
            </section>
          </section>

          {/* name & family row */}

          <section className="signup-inputs-row flex-md-row">
            <Grid className="signup-input">
              <Input
                fullWidth
                underlined
                aria-label="First Name"
                placeholder="First Name"
                color="secondary"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid className="signup-input">
              <Input
                fullWidth
                underlined
                aria-label="Last Name"
                placeholder="Last Name"
                color="secondary"
                type="text"
                value={family}
                onChange={(e) => setFamily(e.target.value)}
              />
            </Grid>
          </section>

          {/* age & language row */}

          <section className="signup-inputs-row flex-md-row">
            <Grid className="signup-input">
              <Input
                fullWidth
                underlined
                aria-label="Age"
                placeholder="Age"
                color="secondary"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
            <Grid className="signup-input mt-3">
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{ tt: "capitalize" }}
                >
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={language}
                  onSelectionChange={setLanguage}
                >
                  <Dropdown.Item key="Choose your language">
                    Choose your language
                  </Dropdown.Item>
                  <Dropdown.Item key="English">English</Dropdown.Item>
                  <Dropdown.Item key="Persian">Persian</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </section>

          {/* github & linkedin row */}

          <section className="signup-inputs-row flex-md-row">
            <Grid className="signup-input">
              <Input
                fullWidth
                underlined
                aria-label="Github address"
                placeholder="Github address"
                color="secondary"
                type="url"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </Grid>
            <Grid className="signup-input">
              <Input
                fullWidth
                underlined
                aria-label="Linkedin address"
                placeholder="Linkedin address"
                color="secondary"
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </Grid>
          </section>

          {/* abilities row */}

          <section className="signup-inputs-row flex-md-row">
            <Grid className="signup-input" id="ability-input">
              <Input
                ref={abilityInput}
                fullWidth
                underlined
                aria-label="abilitis"
                color="secondary"
                contentRightStyling={false}
                placeholder="Enter your abilities..."
              />
              <BiPlus
                className="add-ability-btn"
                onClick={() => {
                  setAbility([...ability, abilityInput.current.value]);
                  abilityInput.current.value = "";
                }}
              ></BiPlus>
            </Grid>

            <Grid.Container gap={2} justify="center" className="signup-input">
              {ability.map((item) => (
                <Button
                  className="m-1"
                  size={"xs"}
                  key={nanoid()}
                  animated
                  color="gradient"
                  auto
                  onPress={() =>
                    setAbility([
                      ...ability.filter((ability) => ability !== item),
                    ])
                  }
                >
                  {item}
                </Button>
              ))}
            </Grid.Container>
          </section>

          {/* username & password row */}

          <section className="signup-inputs-row flex-md-row">
            <Grid className="signup-input">
              <Input
                fullWidth
                underlined
                color="secondary"
                type="text"
                aria-label="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid className="signup-input">
              <Input.Password
                fullWidth
                underlined
                color="secondary"
                type="password"
                aria-label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </section>

          {/* admin row */}

          <section className="signup-inputs-row flex-md-row mt-2">
            <Grid>
              <Checkbox
                color="secondary"
                value={adminity}
                onChange={(e) => setAdminity(!adminity)}
              >
                I'm Admin
              </Checkbox>
            </Grid>
          </section>

          {/* submit btn */}

          <section className="login-btns w-100 d-flex flex-column align-items-center mt-3">
            <Grid className="d-flex justify-content-center w-100">
              <Button
                className="w-75"
                color="gradient"
                auto
                ghost
                onPress={submitHandler}
              >
                Create Account
              </Button>
            </Grid>
            <Grid className="mt-2">
              <Text className="d-flex" size={12} color="black">
                <span>Already have an account ?</span>
                <span className="ms-1 signup-link">
                  <NavLink to="/login">Login</NavLink>
                </span>
              </Text>
            </Grid>
          </section>
        </form>
      </section>
    </section>
  );
}

export default RegisterPage;
