import  React from "react"
import { useState } from "react"
import Avatar from "../components/Avatar"
// import Card from "../components/Card"
// import PostBar from "../components/PostBar"
// import Header from "../components/header"
import Search from "../components/Search/Search"
import {TutorPost, TutorInfor} from "../components/Tutor"
import { UserPost, UserPostBar } from "../components/User"
import {ImgCard, TutorCard} from "../components/Card"
import { AccountAvatar, AccountInfo } from "../components/Account"
import FilterBar from "../components/Post/FilterBar"
import { ToggleBtn } from "../components/Button"
const user = {
  "username": "Le Quoc Hung",
  "userId": "999",
  "att": {
      "Danh gia": "*****",
      "Giai thuong": "Gia su xuat sac thang 10",
  },
  "spec": {
      "Mon": "Toan, Ly, Hoa",
      "Lop": "10, 11, 12",
      "Hinh thuc": "Offline / Online"
  }
}
const post = {
  "username": "ABC",
  "time":  "2023-04-01T07:00:00+07:00",
  "content": {
    "Mon": "Toan",
    "Hinh thuc": "Of",
    "Dia diem": 'afkjd',
    "Yeu cau": "svn",
    "Luong": "124/a"
  },
  "status": {
    "Da lien he": "3",
    "link": "/"
  }
}
const tutor = {
  "userName": "Phi H",
  "imgLink": "https://play-lh.googleusercontent.com/2gk4MOJoUf_yqndIXUxiVuVSFhecQBReW1jbZyEvKVU3nslC66_0l1iBFggqPjbkiA",
  "content": {
    "Danh gia": "******",
    "Chuyen mon": "Toan, Hoa",
    "Cap day": "10, 11, 12"
  }
}
const personalInfo = {
  "Tên đầy đủ": "Nguyễn Đình Minh Đạt",
  "Email": "minhdat15012002@gmail.com",
  "Số điện thoại": "02929922929",
  "Vai trò": "Phụ huynh",
  "Địa chỉ": "8- Thà"
}
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
      {/* <div className="w-2 h-2 bg-black"></div> */}
      {/* <div className="flex grow w-[100%] bg-slate-200">
        <Search placeholder="Hello"></Search>
      </div> */}
      {/* <SideBarCard user={tutor}/> */}
      {/* <div className="w-[300px]">
        <Card header="xin chao" items={items} color={"bg-violet-50"}></Card>
      </div> */}
      {/* <PostBar></PostBar> */}
      {/* <TutorPost post={post}/> */}
      {/* <TutorInfor user={user}/> */}
      {/* <FilterBar/> */}
      {/* <UserPostBar></UserPostBar> */}
      {/* <ImgCard/> */}
      {/* <TutorCard info = {tutor}/> */}
      {/* <AccountInfo info={personalInfo}/> */}
      {/* <Avatar></Avatar> */}
      {/* <AccountAvatar info ={personalInfo}/> */}
      <TutorPost/>
      </main>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
