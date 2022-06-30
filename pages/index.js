import React, { useState, useEffect } from "react";
import Head from "next/head";

let videos = ["videos/file2.mp4", "videos/file1.mp4", , "videos/file3.mp4"];

export default function Home() {
  const [video, setVideo] = useState(0);
  useEffect(() => {
    function handleKeyDown(e) {
      console.log(e.keyCode);
      //Right arrow
      console.log("Esto vale video", video);
      if (e.keyCode === 39) {
        setVideo(video + 1);
      }
      //LEft arrow
      console.log("Esto vale video", video);
      if (e.keyCode === 37) {
        setVideo(video - 1);
      }
    }

    document.addEventListener("keyup", handleKeyDown);
    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keyup", handleKeyDown);
    };
  }, []);
  console.log("El video que queremos:", videos[video]);
  return (
    <div className=" bg-gray-300 h-screen">
      <Head>
        <title>Beacons Take Home</title>
        <meta name="description" content="Take home excercise" />
      </Head>
      <div className="flex flex-col  h-screen justify-between relative">
        <div className="absolute w-full">
          <video className=" h-screen w-full object-fill" loop autoPlay muted>
            <source src={videos[video]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="z-30 flex w-screen">
          <div className="w-full h-screen flex flex-col justify-between">
            <div className="flex justify-between w-full p-4 ">
              <div>
                <p className=" font-bold text-white text-2xl drop-shadow">
                  Reels {video}
                </p>
              </div>
              <div>
                <div className="text-white drop-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-between bg-gradient-to-t  from-slate-800 via-slate-700 to-transparent">
              <div className="text-white text-sm flex flex-col justify-end">
                <div className="flex space-x-3 drop-shadow-2xl">
                  <div>
                    <img src="profile.jpeg" className="h-8 w-8 rounded-full" />
                  </div>
                  <div>
                    <p className="drop-shadow-lg">jeronimocosio</p>
                  </div>
                  <div>
                    <button className="text-sm p-1 px-2 text-white border border-gray-50 rounded drop-shadow-2xl">
                      Follow
                    </button>
                  </div>
                </div>
                <div>
                  <p>Check out my latest video! 🌷</p>
                </div>
                <div>
                  <p>♫ Andrea - Bad Bunny</p>
                </div>
              </div>
              <div className="text-white text-xs">
                <div>
                  <div className="h-12 w-12 bg-white rounded-full animate-pulse animate-bounce"></div>
                </div>
                <div>
                  <div className="h-6 w-6 text-white mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <p className="mb-2">998k</p>
                </div>
                <div>
                  <div className="h-6 w-6 text-white mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <p>639</p>
                </div>
                <div className="mb-2 mt-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <div>
                  <div className="h-6 w-6 bg-white rounded mb-2">
                    <img src="profile.jpeg" className="h-6 w-6 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
