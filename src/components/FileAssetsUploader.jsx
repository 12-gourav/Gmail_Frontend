import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const FileAssetsUploader = (Props) => {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(state);
  const uploadData = () => {
    const data = new FormData();
    data.append("file", state);
    data.append("upload_preset", "whatsup_clone");
    data.append("cloud_name", "cooldeveloper");
    data.append("allowedFormats", ["jpg", "png", "pdf"]);
    // "https://api.cloudinary.com/v1_1/cooldeveloper/video/upload" //for video
    // "https://api.cloudinary.com/v1_1/cooldeveloper/upload"//for files data

    fetch("https://api.cloudinary.com/v1_1/cooldeveloper/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Props.setImage(data?.url);
        setLoading(false);
        setState("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <input type="file" onChange={(e) => setState(e.target.files[0])} />
      <button
        onClick={uploadData}
        disabled={state == ""}
        className="btn btn-sm btn-primary"
      >
        {loading ? <LoadingOutlined /> : "Upload"}
      </button>
    </div>
  );
};

export default FileAssetsUploader;
