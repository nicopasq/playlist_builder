"use client"
import SpotifyAuth from "../../spotifyAuth/SpotifyAuth";
import NavBar from "./NavBar";

export default function Home() {
  SpotifyAuth()
  return (
   <div>
    <NavBar/>
   </div>
  );
}
