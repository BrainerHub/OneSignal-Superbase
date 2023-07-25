import { supabase } from "@/pages";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, TextField, Modal, Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
// import styles from "@/styles/Home.module.css";
import supabaseUsers from "@/services/supabaseServices/supabase-users";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const UserSupabase = () => {
  const [user, setUser] = useState<User | null>(null);
  const [allUser, setAllUser] = useState<any>([]);
  const [selectedCardId, setSelectedCardId] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = (userData: any) => {
    setOpen(true);
    setSelectedCardId(userData.id);
    setEmail(userData.email);
    setPassword(userData.password);
    setUserName(userData.userName);
  };
  const handleOpenModal = (userData: any) => {
    setOpenModal(true);
  };
  const handleClose = () => setOpen(false);
  const handleCloseModal = () => setOpenModal(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // const [oneSignalInitialized, setOneSignalInitialized] =
  //   useState<boolean>(false);

  const sendMagicLink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email } = Object.fromEntries(new FormData(event.currentTarget));
    if (typeof email !== "string") return;

    const { error } = await supabase.auth.signInWithOtp({ email: email });
    if (error) {
      alert(error.message);
    } else {
      alert("Check your email inbox");
    }
  };
  const getAllUser = async () => {
    const user = await supabaseUsers.getAllUser();
    if (!user.error) {
      setAllUser(user.data);
    }
  };

  const addUser = async (userName: string, password: string, email: string) => {
    const user = await supabaseUsers.createUser(userName, password, email);
    if (!user.error) {
      await getAllUser();
    }
  };

  const deleteUser = async (id: string) => {
    const user = await supabaseUsers.deleteUser(id);
    if (!user.error) {
      await getAllUser();
    }
  };

  const updateUser = async (userName: string, password: string, email: string, id: string) => {
    const updatedUser = await supabaseUsers.updateUser(userName, password, email, id);
    if (!updatedUser.error) {
      await getAllUser();
    }
  };

  useEffect(() => {
    getAllUser();

    const authListener = supabase.auth.onAuthStateChange(async (event, session) => {
      const user = session?.user ?? null;
      setUser(user);
      // if (user) {
      //   initializeOneSignal(user.id);
      // }
    });

    return () => {
      authListener.data.subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="pageLayout">
        {user ? (
          <>
            <div className="pageLayout__header">
              <Typography className="pageLayout__title">SupaBase User List</Typography>
              <Button onClick={handleOpenModal} className="blueBtn">Add User Details</Button>
            </div>
          </>
        ) : (
          <form className="formCard" onSubmit={sendMagicLink}>
            <Typography className="formCard__title">Login With Magic Link</Typography>
            <Box className="pageLayout__form">
              <TextField type="email" name="email" placeholder="Email" id="outlined-basic" label="Enter Email" variant="outlined" />

              <Button variant="contained" type="submit">
                Send Magic Link
              </Button>
            </Box>
          </form>
        )}

        {user && (
          <Box className="pageLayout__data">
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>User Name</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Email ID</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allUser.map((user: any, index: any) => (
                    <TableRow
                      key={user?.id + index}
                      style={{
                        outlineColor: selectedCardId === user?.id ? "#0d4b85" : "#f2f9ff",
                      }}
                    >
                      <TableCell>{user?.userName}</TableCell>
                      <TableCell>{user?.password}</TableCell>
                      <TableCell>{user?.email}</TableCell>
                      <TableCell>
                        <Box className="tableActionBtn">
                          <IconButton onClick={() => handleOpen(user)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              deleteUser(user.id);
                            }}
                            className="deleteBtn"
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        <Modal open={openModal} className="formModel" onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Box className="formModel__head">
              <Typography className="formModel__title">Add User Details</Typography>
              <IconButton onClick={() => handleCloseModal()}>
                <CloseIcon />
              </IconButton>
            </Box>
            <div className="formGroup">
              <TextField
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                name="userName"
                id="outlined-basic"
                label="Enter User Name"
                variant="outlined"
              />
            </div>
            <div className="formGroup">
              <TextField
                type="number"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                id="outlined-basic"
                label="Enter Password"
                variant="outlined"
              />
            </div>
            <div className="formGroup">
              <TextField
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                id="outlined-basic"
                label="Enter Email"
                variant="outlined"
              />
            </div>
            <Box className="formModel__btn">
              <Button
                className="blueBtn"
                variant="contained"
                onClick={() => {
                  addUser(userName, password, email);
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Modal>

        <Modal open={open} className="formModel" onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Box className="formModel__head">
              <Typography className="formModel__title">Edit User</Typography>
              <IconButton onClick={() => handleClose()}>
                <CloseIcon />
              </IconButton>
            </Box>
            <div className="formGroup">
              <TextField type="text" value={userName} onChange={(e) => setUserName(e.target.value)} name="userName" id="outlined-basic" label="Enter User Name" variant="outlined" />
            </div>
            <div className="formGroup">
              <TextField type="number" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="outlined-basic" label="Enter Password" variant="outlined" />
            </div>
            <div className="formGroup">
              <TextField type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="outlined-basic" label="Enter Email" variant="outlined" />
            </div>
            <Box className="formModel__btn">
              <Button
                className="blueBtn"
                variant="contained"
                onClick={() => {
                  updateUser(userName, password, email, selectedCardId).then(() => {
                    setOpen(false);
                  });
                }}
              >
                Update user
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default UserSupabase;
