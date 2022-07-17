import { useState } from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return <div onClick={() => { setVisible(!visible) }}>
    <button>{visible ? '숨기기' : '보이기'}</button>
    <hr />
    {visible && <Info />}
  </div>
}

export default App;
