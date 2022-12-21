import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Drag = (Props) => {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);

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

        setLoading(false);
        setState("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="drag" style={{ width: "100%" }}>
        <div className="and1">
          <h5>Upload Images</h5>
          <input type="file" onChange={(e) => setState(e.target.files[0])} />
          <button
            onClick={uploadData}
            disabled={state == ""}
            className="btn btn-sm btn-primary"
          >
            {loading ? <LoadingOutlined /> : "Upload"}
          </button>
        </div>
        <div className="and1">
          <h5>Upload Audio and Videos</h5>
          <input type="file" onChange={(e) => setState(e.target.files[0])} />
          <button
            onClick={uploadData}
            disabled={state == ""}
            className="btn btn-sm btn-primary"
          >
            {loading ? <LoadingOutlined /> : "Upload"}
          </button>
        </div>
        <div className="and1">
          <h5>Upload Documents</h5>
          <input type="file" onChange={(e) => setState(e.target.files[0])} />
          <button
            onClick={uploadData}
            disabled={state == ""}
            className="btn btn-sm btn-primary"
          >
            {loading ? <LoadingOutlined /> : "Upload"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Drag;
