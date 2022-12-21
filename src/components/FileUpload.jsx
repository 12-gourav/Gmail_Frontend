import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Resizer from "react-image-file-resizer";
import { Avatar, Image, Badge } from "antd";

const FileUpload = (Props) => {
  const [state, setState] = useState([{}]);
  const token = localStorage.getItem("token");

  const fileUploadChange = (e) => {
    let files = e.target.files;
    let allUploadedFiles = Props.image;

    //resize algorithm
    if (files) {
      Props.setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            //upload image
            axios
              .post(
                "http://localhost:5000/api/v1/uploadImages",
                { image: uri },
                {
                  headers: {
                    authtoken: token,
                  },
                }
              )
              .then((res) => {
                console.log("images upload", res);
                Props.setLoading(false);
                allUploadedFiles.push(res.data);
                Props.setImage(allUploadedFiles);
              })
              .catch((err) => {
                console.log("cloudinary image upload err", err);
                Props.setLoading(false);
              });
          },
          "base64"
        );
      }
    }
    ///end algo;
  };
  const handleImageRemove = (id) => {
    Props.setLoading(true);
    console.log("click");
    axios
      .post(
        "http://localhost:5000/api/v1/removeImages",
        { public_id: id },
        {
          headers: {
            authtoken: token,
          },
        }
      )
      .then((res) => {
        Props.setLoading(false);
        const images = Props.image;
        let filteredImages = images.filter((item) => {
          return item.public_id !== id;
        });
        Props.setImage(filteredImages);
      })
      .catch((err) => {
        console.log(err);
        Props.setLoading(false);
      });
  };

  return (
    <>
      <div className="row" style={{ width: "100%" }}>
        {Props?.image &&
          Props.image.map((image) => (
            <Badge
              count="X"
              key={image.public_id}
              onClick={() => {
                handleImageRemove(image.public_id);
              }}
              style={{ cursor: "pointer" }}
            >
              <Avatar
                style={{ margin: "0 1rem", marginBottom: "1rem" }}
                size={60}
                shape="square"
                src={
                  <Image
                    src={image.url}
                    style={{
                      width: 110,
                    }}
                  />
                }
              />
            </Badge>
          ))}
      </div>
      <div className="row">
        <label className="btn btn-primary">
          <span>
            {" "}
            <PlusOutlined />
          </span>{" "}
          Upload Images
          <input
            type="file"
            hidden
            multiple
            accept="images/*"
            onChange={fileUploadChange}
          />
        </label>
      </div>
    </>
  );
};

export default FileUpload;
