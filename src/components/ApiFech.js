import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const ApiFech = () => {

  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [clicked, setClicked] = useState(false)

  const handlerClicked = () => {
    setClicked(!clicked)
  }

  useEffect( ()=> {
    // // axiosを使用してAPIを取得する方法
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // // resはgetの返り値、thenの引数として渡される
    // .then(res => {
    //   // .dataでjsonオブジェクトを取得できる
    //   setPosts(res.data)
    // })
    
    // fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
    // バッククオテーション＋${}で文字列の中に変数を設定できる
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'})

    // fetchで取得するとHTML形式になるためJSONに変換
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  }, [clicked])

  return (
    <div>
      <input type='text' value={id} onChange={evt=>setId(evt.target.value)} />
      <br />
      <button type='button' onClick={handlerClicked}>Get post</button>
      <br />
      {posts.title}
      {/* <ul>
        {
          // mapで展開する際にはkeyを指定する必要がある
          posts.map(post => <li key={post.id}> {post.title} </li>)
        }
      </ul> */}
    </div>
  )
}
