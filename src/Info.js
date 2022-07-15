import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickName} onChange={onChangeNickname}></input>
      </div>
      <div>
        <div>
          <b>이름 : {name}</b>
        </div>
        <div>
          <b>닉네임 : {nickName}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
