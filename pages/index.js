import Head from "next/head";

export default function Home() {
  return (
    <div className=" bg-gray-300 h-screen">
      <Head>
        <title>Beacons Take Home</title>
        <meta name="description" content="Take home excercise" />
      </Head>
      <div className="flex flex-col  h-screen justify-between relative">
        <div className="absolute w-full">
          <video className=" h-screen w-full object-fill" loop autoPlay muted>
            <source src="videos/file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="z-30">
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
          <div className="p-4 flex justify-between  ">
            <div className="text-white text-sm flex flex-col justify-end">
              <div className="flex space-x-3 drop-shadow-2xl">
                <div>Foto</div>
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
                <p>Título....</p>
              </div>
              <div>
                <p>Andrea - Bad Bunny</p>
              </div>
            </div>
            <div className="text-white text-xs">
              <div>
                <div className="h-6 w-6 bg-white mb-2"></div>
                <p>998k</p>
              </div>
              <div>
                <div className="h-6 w-6 bg-white mb-2"></div>
                <p>639</p>
              </div>
              <div className="mb-2 mt-2">...</div>
              <div>
                <div className="h-6 w-6 bg-white rounded mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
