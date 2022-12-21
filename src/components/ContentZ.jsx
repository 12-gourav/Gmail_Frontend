import { Form, Input, Popover, List, Image } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { send } from "../redux/actions/action";
import { toast } from "react-toastify";
import FileUpload from "./FileUpload";
const { TextArea } = Input;
const { Search } = Input;
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { displayTemplate } from "../redux/actions/action";
import { Collapse } from "antd";
const { Panel } = Collapse;

const ContentZ = () => {
  const { msg } = useSelector((state) => state.user);
  const [account, setAccount] = useState(msg?.sender);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [template, setTemplate] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const onChange = (key) => {
    console.log(key);
  };
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const onSearch = (value) => setSearch(value);

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = () => {
    const token = localStorage.getItem("token");
    displayTemplate(token)
      .then((res) => {
        setTemplate(res?.data.data);
        console.log(res.data.data);
        dispatch({ type: "template", payload: res?.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    setLoading(true);
    const authtoken = localStorage.getItem("token");
    const sender = user?.account;
    const senderImage = user?.image;
    const date = Date.now();
    send(sender, senderImage, account, date, subject, message, image, authtoken)
      .then((res) => {
        if (res?.data) {
          setLoading(false);
          toast.success("Message Send SuccessFully");
          console.log(res?.data);
          setImage("");
          setAccount("");
          setSubject("");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };
  const searched = (search) => (r) => r.title.toLowerCase().includes(search);
  return (
    <>
      <div className="send">
        {loading ? (
          <h4 className="text-danger text-bold">Loading.....</h4>
        ) : (
          <h4 className="text-primary text-bold"> Message</h4>
        )}
        <div className="row">
          <div className="col-sm-8" style={{ marginTop: "1rem" }}>
            <Form layout="vertical" hideRequiredMark>
              <Form.Item
                label="Account Address"
                rules={[
                  {
                    required: true,
                    message: "Please enter Account Address",
                  },
                ]}
              >
                <Input
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  placeholder="Please enter user name"
                />
              </Form.Item>
              <Form.Item
                label="Subject"
                rules={[
                  {
                    required: true,
                    message: "Please enter Subject",
                  },
                ]}
              >
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Please enter subject"
                />
              </Form.Item>
              <Form.Item
                label="Message"
                rules={[
                  {
                    required: true,
                    message: "Please enter Message",
                  },
                ]}
              >
                <ReactQuill
                  theme="snow"
                  value={message}
                  onChange={(value) => setMessage(value)}
                />
              </Form.Item>
              <FileUpload
                setImage={setImage}
                image={image}
                setLoading={setLoading}
              />
              <br></br> <br></br>
              <button
                onClick={handleSubmit}
                disabled={account == "" && subject == "" && message == ""}
                className="btn bg-primary"
              >
                Send Message
              </button>
            </Form>
          </div>
          <div className="col-sm-4 " style={{ paddingRight: "1rem" }}>
            <h6 className="text-primary">Templates</h6>
            <Search
              placeholder="Search Your Templates"
              allowClear
              onSearch={onSearch}
              style={{
                width: "100%",
                marginBottom: "1.5rem",
              }}
            />
            <br></br>

            {template?.filter(searched(search)).map((r, i) => (
              <Collapse key={i} onChange={onChange(i)}>
                <Panel header={r.title} key="1">
                  <ReactQuill
                    value={r.message}
                    readOnly={true}
                    theme="bubble"
                  />
                </Panel>
              </Collapse>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentZ;
