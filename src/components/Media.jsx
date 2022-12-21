import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { displayMedia } from "../redux/actions/action";
import { Image, Skeleton } from "antd";
import imgz from "../assets/ct7.svg";
const Media = () => {
  const { user } = useSelector((state) => state.user);
  const [loading, setloading] = useState(false);
  const [result, setresult] = useState([]);

  const sender = user?.account;
  useEffect(() => {
    setloading(true);
    const token = localStorage.getItem("token");
    displayMedia(sender, token)
      .then((res) => {
        console.log(res);
        setresult(res?.data.list);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);
  console.log(result, "result");
  return (
    <div className="container-fluid">
      <h4
        className="text-primary"
        style={{
          textShadow: "var(--box-shaodw)",
          paddingTop: "1rem",
          fontWeight: "bolder",
        }}
      >
        Media & Files
      </h4>
      <div className="row">
        <div className="col-sm-12">
          {result == "" ? (
            <center
              style={{ paddingTop: "1.5rem", width: "100%", height: "80%" }}
            >
              <img
                src={imgz}
                alt="img"
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
              <p style={{ marginTop: "1rem" }}>No Media & Files Available</p>
            </center>
          ) : (
            <>
              {loading ? (
                <Skeleton
                  avatar
                  paragraph={{
                    rows: 8,
                  }}
                />
              ) : (
                <>
                  {result.map((r, i) => (
                    <div className="zxcv" style={{ margin: "1rem 0" }} key={i}>
                      <div className="row">
                        <div className="col-sm-8">
                          <p>{r.id}</p>
                        </div>
                        <div className="col-sm-4">
                          <p className="text-primary">{r.createdAt}</p>
                        </div>
                      </div>

                      <div className="row" key={i} style={{ padding: "1rem" }}>
                        {r.image.map((t, i) => (
                          <Image.PreviewGroup key={i}>
                            <Image
                              download
                              src={t.url}
                              width={200}
                              height={120}
                            />
                          </Image.PreviewGroup>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Media;
