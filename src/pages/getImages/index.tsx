import { ChangeEvent, useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from "@mui/material";
import styles from "@/styles/Home.module.css";
import { supabase } from "@/pages";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import Image from "next/image";

const GetImages = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [getFiles, setGetFiles] = useState<any[]>([]);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const { data, error } = await supabase.storage
        .from("message-bucket")
        .upload("public/" + Date.now().toString() + file.name, file);

      const img = supabase.storage
        .from("message-bucket")
        .getPublicUrl(data!.path);
      setImageUrl(img.data.publicUrl);

      if (data) {
        console.log({ data, img });
      } else if (error) {
        console.log(error);
      }
    }
  };

  async function getAllFiles() {
    const { data, error } = await supabase.storage
      .from("message-bucket")
      .list("public", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (data) {
      console.log("show get files", data);

      setGetFiles(
        data.map((item) => {
          return {
            ...item,
            url:
              "https://tzmmgtltbmsctuihxshn.supabase.co/storage/v1/object/public/message-bucket/public/" +
              item.name,
          };
        })
      );
    } else {
      setGetFiles([]);
    }
  }

  async function deleteImage(imageKey: string) {
    const { data, error } = await supabase.storage
      .from("message-bucket")
      .remove(["public/" + imageKey]);
    console.log("show image data", data);

    if (data) {
      setGetFiles((prev) => {
        return [...prev.filter((item) => item.name !== imageKey)];
      });
    }
  }

  useEffect(() => {
    getAllFiles();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button
              className={styles.upload_img}
              variant="contained"
              component="label"
              id="upload_image"
            >
              Upload Image{" "}
              <DriveFolderUploadIcon style={{ marginLeft: "20px" }} />
              <input
                hidden
                accept="*/*"
                multiple
                onChange={handleUpload}
                type="file"
                id="file_input"
              />
            </Button>
          </Toolbar>
        </AppBar>
        <div>
          {" "}
          {imageUrl && (
            <><Image src={imageUrl} alt="" className={styles.img_url} />
            <video src={imageUrl} className={styles.img_url}></video></>
          )}{" "}
        </div>
        <div>
          {getFiles.map((img) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={styles.img_btn}>
                {img.url.includes(".png") || img.url.includes(".jpg") || img.url.includes(".jpeg") || img.url.includes(".gif") ? <Image src={img.url} alt="" className={styles.img_url} /> :
                <video
                autoPlay={true}
                ref={currentRef=>{
                  currentRef?.play()
                }} src={img.url} className={styles.img_url}></video> }

                <Button
                  className={styles.upload_btn}
                  variant="contained"
                  component="label"
                  id="delete_file"
                  onClick={() => deleteImage(img.name)}
                >
                  Delete File{" "}
                  <DeleteForeverSharpIcon
                  style={{ marginLeft: "20px" }}
                   />
                </Button>
              </div>
            );
          })}
        </div>
      </Box>
    </>
  );
};

export default GetImages;
