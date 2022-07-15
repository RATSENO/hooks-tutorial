import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState("");

  /* 렌더링 될때마다
  useEffect(()=>{
    console.log('렌더링이 완료되었습니다.');
    console.log({
        name,
        nickName
    })
  });
 */

  /* 마운트될 때만
  useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
  }, []);
 */

  useEffect(()=>{
    console.log('특정값이 변경될 때만')
    console.log(name);
  }, [name])

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
