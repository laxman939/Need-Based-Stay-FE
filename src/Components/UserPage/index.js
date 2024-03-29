import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

function UserPage() {
  const name = useSelector((state) => state.UserName.userName);

  const [profileImg, setProfileImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  function handleImage(e) {
    let filesArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );

    console.log("filesArray " + filesArray);

    setProfileImg(filesArray);
  }

  return (
    <>
      <div className="user-section">
        <div className="user-main">
          <h2 style={{ textAlign: "center" }}>User Information</h2>
          <div className="card">
            <div className="img-container">
              <h4 className="heading">Add your Image</h4>
              <div className="img-holder">
                <img src={profileImg} alt="" id="img" className="img" />
              </div>
              <input
                type="file"
                accept="image/*"
                name="image-upload"
                id="input"
                onChange={handleImage}
              />
              <div className="label-img">
                <label className="image-upload" htmlFor="input">
                  <i className="material-icons">add_photo_alternate</i>
                  Choose your Photo
                </label>
              </div>
            </div>
            <h3>UserName:{name}</h3>
            <p>Mail: </p>
          </div>
        </div>
        <div className="logout">
          <button type="submit" className="logout-btn lg-button">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default UserPage;
