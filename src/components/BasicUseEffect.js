import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {

  const [count, setCount] = useState(0)
  const [item, setItem] = useState('')

  // useEffectはレンダリングのたびに実行される
  // 第二引数に指定されたステートを対象として設定できる,空の場合は最初の一回だけ起動する
  useEffect(() => {
    console.log('useEffect invoked')
  },[count])

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount+1)}>Click {count}</button>
      <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}/>
    </div>
  )
}

export default BasicUseEffect
