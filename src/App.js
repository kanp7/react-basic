import logo from './logo.svg';
import './App.css';
import { ApiFech } from './components/ApiFech';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
// import TimerContainer from './components/TimerContainer';
import AppContext from './contexts/AppContext';
import B from './components/B';
import BasicReducer from './components/BasicReducer';
import CompB from './components/CompB';
import {useReducer, useState, useCallback} from 'react';
import Memo from './components/Memo';
import CountDisplay from './components/CountDisplay';
import CountClick from './components/CountClick';

const initialState = 0
const reducer = (currentState, action) => {
  switch(action) {
    case 'add_1':
      return currentState + 1
    case 'multiple_3':
      return currentState * 3
    case 'reset':
      return initialState
    default:
      return currentState
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // useCallbackの第二引数を空[ ]にすることで、AddCount1, AddCount2関数のclick毎の再定義を防ぐことが出来、CountClick コンポーネントのレンダリングを初回のみに減らすことが出来る
  const AddCount1 = useCallback(() => {
    setCount1(prevCount1 => prevCount1 + 1)
  },[count1])
  const AddCount2 = useCallback(() => {
    setCount2(prevCount2 => prevCount2 + 1)
  },[count2])

  return (
    // Provaiderで囲むとその中のコンポーネントはProviderから提供されるvalueを使用できるようになる
    // 値が複数の場合は、{{}}と二重にする
    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic1 name="hoge"/>
          {/* <Basic2 /> */}
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFech /> */}
          {/* <B /> */}
          {/* <BasicReducer /> */}
          {/* Count {count}
          <CompB /> */}
          {/* <Memo /> */}
          <CountDisplay name="count1" count={count1}/>
          <CountClick handleClick={AddCount1}>AddCount1</CountClick>
          <CountDisplay name="count2" count={count2}/>
          <CountClick handleClick={AddCount2}>AddCount2</CountClick>

      
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
