import React from 'react';
import CharacterCounter from "./CharacterCounter";
import {
  RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil/dist";
import TodoList from "./TodoList";
import Main from "./mainPage/Main";

function App() {
  return (
   <RecoilRoot>
     {/*<CharacterCounter/>*/}
     {/*<TodoList/>*/}
     <Main/>
   </RecoilRoot>
  );
}

export default App;
