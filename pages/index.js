import React, { useState, useEffect, useRef, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Head from "next/head";

let videos = [
  {
    url: "videos/file1.mp4",
    username: "jeronimocosio",
    song: "Andrea - Bad Bunny",
    profileImage: "profile.jpeg",
    text: "Check out my latest video! 🌷",
  },
  {
    url: "videos/file2.mp4",
    username: "myBestPlant",
    song: "Harvest Moon - Poolside",
    profileImage: "profile2.jpeg",
    text: "Testing out my new products",
    products: true,
  },
  {
    url: "videos/file3.mp4",
    username: "jeronimocosio",
    song: "Mushaboom - Feist",
    profileImage: "profile.jpeg",
    text: "Who can create this sound at home?",
  },
];

const solutions = [
  {
    name: "Teapot - $29.95",
    description: "Lorem Ipsum Dolor itsum",
    href: "##",
  },
  {
    name: "Coaster - $4.95",
    description: "Lorem Ipsum Dolor itsum",
    href: "##",
  },
  {
    name: "Teaspoon - 9.95",
    description: "Lorem Ipsum Dolor itsum",
    href: "##",
  },
];

export default function Home() {
  const [video, setVideo] = useState(0);
  const videoRef = useRef();

  const nextVideo = () => {
    if (video < 2) {
      setVideo(video + 1);
    } else {
      setVideo(0);
    }
  };

  useEffect(() => {
    videoRef.current?.load();
  }, [video]);

  console.log("El video que queremos:", videos[video]);

  const { url, username, song, profileImage, text, products } = videos[video];

  return (
    <div className=" bg-gray-300 h-screen">
      <Head>
        <title>Beacons Take Home</title>
        <meta name="description" content="Take home excercise" />
      </Head>
      <div className="flex flex-col  h-screen justify-between relative">
        <button
          className="absolute bg-transparent h-1/2 w-full z-40"
          onClick={nextVideo}
        ></button>
        <div className="absolute w-full z-10">
          <video
            className=" h-screen w-full object-fill"
            loop
            autoPlay
            muted
            ref={videoRef}
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="z-30 flex w-screen">
          <div className="w-full h-screen flex flex-col justify-between">
            <div className="flex justify-between w-full p-4 ">
              <div>
                <p className=" font-bold text-white text-2xl drop-shadow">
                  Reels
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
                    <img src={profileImage} className="h-8 w-8 rounded-full" />
                  </div>
                  <div>
                    <p className="drop-shadow-lg">{username}</p>
                  </div>
                  <div>
                    <button className="text-sm p-1 px-2 text-white border border-gray-50 rounded drop-shadow-2xl">
                      Follow
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <p>{text}</p>
                </div>
                <div>
                  <p>♫ {song}</p>
                </div>
              </div>
              <div className="text-white text-xs">
                {products && (
                  <div className=" mb-14 mr-10 ">
                    <div className="fixed bottom-23">
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button className="mb-4 z-50">
                              <span className="relative inline-block animate-pulse animate-bounce">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-10 w-10"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                  />
                                </svg>
                                <span className="z-40 absolute right-2 top-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                                  3
                                </span>
                              </span>
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute z-50 mt-3 w-screen max-w-sm -translate-x-[85%] -translate-y-[150%] transform px-4 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                    {solutions.map((item) => (
                                      <button
                                        key={item.name}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                      >
                                        <div className="ml-4">
                                          <p className="text-sm font-medium text-gray-900">
                                            {item.name}
                                          </p>
                                          <p className="text-sm text-gray-500">
                                            {item.description}
                                          </p>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </div>
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 text-white mb-2">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <p className="mb-2">998k</p>
                </div>
                <div className="flex flex-col items-center">
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
                <div className="mb-3 mt-2 text-white flex flex-col items-center">
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
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 bg-white rounded mb-2 flex flex-col items-center">
                    <img src={profileImage} className="h-6 w-6 rounded" />
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
