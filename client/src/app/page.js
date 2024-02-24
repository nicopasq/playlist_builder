"use client"
import NavBar from "./NavBar";
import { useSelector } from 'react-redux'

export default function Home() {
  const access_token = useSelector(state => state.access_token);
  console.log(access_token)
  return (
   <div>
    <NavBar/>
   </div>
  );
}
