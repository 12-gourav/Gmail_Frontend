import React from "react";
import { Tabs } from "antd";
import { useState } from "react";
import { Form, Input, Popover, List, Image } from "antd";
import { Collapse } from "antd";
const { Panel } = Collapse;
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  createTemplate,
  deleteTemplate,
  displayTemplate,
} from "../redux/actions/action";
import { useEffect } from "react";
const onChange = (key) => {
  console.log(key);
};

const Template = () => {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      await createTemplate(title, message, token)
        .then((res) => {
          if (res?.data) {
            toast.success("Template Create SuccessFully");
            setTitle("");
            setMessage("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = () => {
    const token = localStorage.getItem("token");
    displayTemplate(token)
      .then((res) => {
        setResult(res?.data.data);
        console.log(res.data.data);
        dispatch({ type: "template", payload: res?.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await deleteTemplate(id, token)
        .then((res) => {
          if (res?.data) {
            toast.error("Template Deleted SuccessFully");
            loadUser();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const createForm = () => (
    <Form layout="vertical" hideRequiredMark>
      <Form.Item
        label="Template Title"
        rules={[
          {
            required: true,
            message: "Please enter Account Address",
          },
        ]}
      >
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Please enter Template Title"
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
        <ReactQuill theme="snow" value={message} onChange={setMessage} />
      </Form.Item>
      <button
        disabled={title == "" && message == ""}
        className="btn btn-primary bg-primary"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </Form>
  );
  const onChange = (key) => {
    console.log(key);
  };
  const display = () =>
    result?.map((r, i) => (
      <Collapse key={i} onChange={onChange(i)}>
        <Panel header={r.title} key="1">
          <ReactQuill value={r.message} readOnly={true} theme="bubble" />
          <button
            className="btn btn-sm btn-danger bg-danger"
            onClick={() => handleDelete(r?._id)}
          >
            Delete
          </button>
        </Panel>
      </Collapse>
    ));

  return (
    <>
      <div className="container" style={{ padding: "1rem" }}>
        <h4>Templates</h4>
        <div className="row">
          <div className="col-sm-12">
            <Tabs
              defaultActiveKey="1"
              onChange={onChange}
              items={[
                {
                  label: "Create Template",
                  key: "1",
                  children: createForm(),
                },
                {
                  label: `Display Templates`,
                  key: "2",
                  children: display(),
                },
                {
                  label: `Coming Soon`,
                  key: "3",
                  children: `Coming Soon`,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
