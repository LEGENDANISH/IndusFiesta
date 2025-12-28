import React from "react"
import NavBar from "./component/NavBar"
import LeftBar from "./component/LeftBar"
import RightBar from "./component/RightBar"

const App = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <video
        src="./test.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0  -z-10" />
      <NavBar />
      <LeftBar/>
      <RightBar/>

    </main>
  )
}

export default App
