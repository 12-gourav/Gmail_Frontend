import React from "react";
import img from "../assets/ct5.svg";
const update = () => {
  return (
    <div className="container-fluid">
      <h4 className="text-primary" style={{ marginTop: "1rem" }}>
        Updates #FlowMail
      </h4>
      <p style={{ textAlign: "justify", padding: "1rem" }}>
        Flow Mail is the best, fast and easy to use Mail App for your Windows 10
        Device. Flow Mail lets you manage your Mail and More. Manage your mails
        very easily without having to open Multiple Apps or Browsers Tabs. With
        built in support for native downloading, it is way easier to download
        your mail attachments. With the increase in cases of security breach
        nowadays, Flow Mail protects you in many ways as the app runs in
        sandboxed environment aka in protected environment. it is a lot to
        better to use flow mail instead of opening your mails in browsers
        because your login info can be easily leaked from browsers if you are
        not careful but that's not the case with Flow Mail. Flow Mail offers
        more security features like Built in Windows Hello and Custom Password
        Support. The easiest way you can manage your mails instantly is with
        Flow Mail. It has a bunch of settings to customize your personal
        experience like support for Jumplist in Windows 10 PC, ability to set
        start-up page and more. Flow mail also have some unique features like
        Split View which let's you manage your mails from different page
        side-by-side on large screen devices like PC. Flow mail also remembers
        your log in so that you won't have to log in everytime you open app. We
        do not store any information about you. We do not store any kind of
        personal info like password or username. You can see our Privacy Policy
        or contact us if you have any concern about it. features require to
        unlock within app. Thank You for reading this.
      </p>
      <p style={{ float: "left", marginRight: "1rem", fontWeight: "bold" }}>
        Developed By{" "}
        <span className="text-primary">CoolDeveloper (Gaurav Bajpai)....</span>
      </p>
      <img
        src={img}
        alt="gghd"
        style={{
          width: "200px",
          height: "200px",
          float: "right",
          marginRight: "2rem",
        }}
      />
    </div>
  );
};

export default update;
