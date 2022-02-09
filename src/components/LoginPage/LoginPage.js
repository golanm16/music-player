import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box, width } from "@mui/system";
import "./LoginPage.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useContext, useEffect, useRef, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import UserContext from "../../contexts/UserContext";
import { useCookies } from "react-cookie";

export const LoginPage = () => {
  const serverUrl = process.env.REACT_APP_SONGS_SERVER_URL;
  const [expanded, setExpanded] = useState(false);
  const [isButtonLogin, setIsButtonLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([
    "access-token",
    "user-name",
  ]);

  const { userAccessToken, setUserAccessToken } = useContext(UserContext);

  const rememberMeRef = useRef(false);

  useEffect(() => {
    if (cookies["access-token"] && cookies["user-name"]) {
      setLoggedIn(true);
      setUserName(cookies["user-name"]);
      setExpanded(false);
      setUserAccessToken(cookies["access-token"]);
    }
    console.log(userAccessToken);
  }, [userAccessToken]);

  //functions
  const login = async (userName, password) => {
    try {
      const rsp = await fetch(serverUrl + "users/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          userName,
          password,
        }),
      });
      if (rsp.ok) {
        const accessToken = await rsp.json();

        setExpanded(false);
        setUserAccessToken(accessToken);
        setUserName(userName);
        setLoggedIn(true);
        if (rememberMeRef.current) {
          setCookie("access-token", accessToken, { path: "/" });
          setCookie("user-name", userName, { path: "/" });
        }
      } else {
        console.log(await rsp.json());
      }
    } catch (e) {
      console.log(e);
    }
  };

  const register = async (userName, password) => {
    console.log(userName, password);
    try {
      const rsp = await fetch("http://localhost:5215/users/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          userName: userName,
          password: password,
        }),
      });
      if (rsp.ok) {
        const savedUser = await rsp.json();
        console.log(savedUser);
        login(userName, password);
      } else {
        console.log(await rsp.json());
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    setPassword("");
    setUserAccessToken(null);
    setLoggedIn(false);
    removeCookie("access-token");
    removeCookie("user-name");
  };

  return (
    <Accordion
      sx={{ position: "fixed", top: 10, left: 10, width: 250 }}
      expanded={expanded}
      onChange={() => (loggedIn ? "" : setExpanded(!expanded))}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{ display: "flex", justifyContent: "space-between", width: 250 }}
      >
        <Typography>
          Hello, {loggedIn ? userName : "Guest. please login."}
        </Typography>
        {loggedIn ? (
          <Button onClick={logout} sx={{ backgroundColor: "red" }}>
            log out
          </Button>
        ) : (
          ""
        )}
      </AccordionSummary>

      <AccordionDetails>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign in</Typography>
          <Box component="form" noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="user name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
            />
            <TextField
              required
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              onChange={(e) => {
                rememberMeRef.current = e.target.value;
              }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                isButtonLogin
                  ? login(userName, password)
                  : register(userName, password);
              }}
            >
              {isButtonLogin ? "login" : "sign up"}
            </Button>
            <Typography>
              {isButtonLogin ? "don't" : "already"} have an account?
              <Link
                onClick={() => {
                  setIsButtonLogin(!isButtonLogin);
                }}
              >
                {isButtonLogin ? "sign up" : "login"}
              </Link>
            </Typography>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
