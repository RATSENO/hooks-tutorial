import React, { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  }
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickName: ''
  })

  const { name, nickName } = state;

  const onChange = e => {
    dispatch(e.target);
  }

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickName" value={nickName} onChange={onChange}></input>
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
