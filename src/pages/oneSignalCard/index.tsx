import * as React from "react";
import Button from "@mui/material/Button";
// import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import userServices from "@/services/user/user-services";
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";

export default function CardUser() {
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [selectedCardId, setSelectedCardId] = useState("");

  const getUsers = async () => {
    const users = await userServices.GetAllOneSignalUser();
    if (!users.error) {
      setUserData(users.user.players);
      console.log("Dataa ", users.user);
    }
  };

  const addUser = async (email: string) => {
    const newUser = await userServices.createOneSignalUser(email);
    if (!newUser.error) {
      await getUsers();
    }
  };

  const updateUser = async (playerId: string, email: string) => {
    const updatedUser = await userServices.editOneSignalUser(playerId, email);
    if (!updatedUser.error) {
      await getUsers();
    }
  };

  const deleteUser = async (playerId: string) => {
    const deletedUser = await userServices.DeleteUser(playerId);
    if (!deletedUser.error) {
      //   await getUsers();
      setUserData((prevState) => [...prevState.filter((user: any) => user.id !== playerId)]);
    }
  };

  const onCardSelect = (id: string) => {
    console.log("Selected ID:", id);
    setSelectedCardId(id);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="pageLayout">
      <div className="pageLayout__header">
        <Typography className="pageLayout__title">One Signal User List</Typography>
        <Box className="pageLayout__form">
          <TextField id="outlined-password-input" label="Enter Email" type="text" onChange={(e) => setEmail(e.target.value)} />
          <Button variant="contained" onClick={() => addUser(email)}>
            Add User
          </Button>
        </Box>
      </div>

      <Box className="pageLayout__data">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>IP Address</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((user: any, index) => (
                <TableRow
                  key={user?.id + index}
                  onClick={() => onCardSelect(user?.id)}
                  style={{
                    outlineColor: selectedCardId === user?.id ? "#0d4b85" : "#f2f9ff",
                  }}
                >
                  <TableCell>{user?.identifier}</TableCell>
                  <TableCell>{user?.ip}</TableCell>
                  <TableCell>{user.language}</TableCell>
                  <TableCell>
                    <Box className="tableActionBtn">
                      <IconButton onClick={() => deleteUser(user?.id)} className="deleteBtn">
                        <DeleteForever />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* {userData.map((user: any, index) => {
        return (
          <div
            key={user?.id + index}
            onClick={() => onCardSelect(user?.id)}
            style={{
              padding: 20,
              backgroundColor: selectedCardId === user?.id ? "#ccc" : "#f1f1f1",
              margin: "20px 20px",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Email: {user?.identifier}</span>
            <span>IP: {user?.ip}</span>
            <span>Language: {user.language}</span>
            <div className={styles.icon}>
              <Button onClick={() => deleteUser(user?.id)} variant="outlined" startIcon={<DeleteForever />}>
                Delete
              </Button>
            </div>
          </div>
        );
      })} */}

        {selectedCardId ? (
          <Box mt={"25px"}>
            <Typography className="pageLayout__formTitle">Update User Email Id</Typography>
            <Box className="pageLayout__form" mt={"8px"}>
              <TextField id="outlined-password-input" label="Enter Email" type="text" onChange={(e) => setEmail(e.target.value)} />
              <Button variant="contained" onClick={() => updateUser(selectedCardId, email)}>
                Update
              </Button>
            </Box>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
