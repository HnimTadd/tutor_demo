import * as React from "react"
import Post from "../components/Post"
// import Avatar from "../components/Avatar"
// import Card from "../components/Card"
// import PostBar from "../components/PostBar"
// import Header from "../components/header"
import Search from "../components/Search/Search"


const IndexPage = () => {
  // const items = [
  //   {
  //     "link": "/",
  //     "content": "Hello"
  //   },    {
  //     "link": "/",
  //     "content": "Hello1"
  //   },    {
  //     "link": "/",
  //     "content": "Hello2"
  //   },    {
  //     "link": "/",
  //     "content": "Hello3"
  //   },    {
  //     "link": "/",
  //     "content": "Hello4"
  //   }
  //   ]
  return (
    <main>
      <div className="flex grow w-[100%] bg-slate-200">
        <Search placeholder="Hello"></Search>
      </div>
      {/* <div className="w-[300px]">
        <Card header="xin chao" items={items} color={"bg-violet-50"}></Card>
      </div> */}
      {/* <PostBar></PostBar> */}
      <Post></Post>
      </main>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
