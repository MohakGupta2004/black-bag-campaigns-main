import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="min-h-[150vh]">
        {/* Hero Section */}
        <div className="text-white flex flex-col justify-center items-center h-[56vh] gap-4 px-4 md:px-0">
          <div className="text-5xl font-bold flex flex-wrap justify-center text-center">
            Black Bag Campaigns
            <span className="inline-block">
              <img
                src="https://cdn.pixabay.com/animation/2022/11/13/07/16/07-16-41-158_512.gif"
                width={70}
                className="inline-block"
              />
            </span>
          </div>
          <p className="text-center">
            Creating positive change through crowdfunding, one campaign at a
            time. Join the movement to create positive change, one black bag
            campaign at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-purple-600/60 transition-shadow duration-300">
              Start here
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-purple-600/60 transition-shadow duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white h-2 opacity-5"></div>

        {/* Middle Section */}
        <div className="text-white container mx-auto px-4 md:px-0">
          <h1 className="font-bold flex justify-center p-7 text-4xl text-center">
            Your Supporters Can Donate And Help You
          </h1>
          <div className="flex flex-wrap gap-5 justify-center text-gray-300">
            <div className="item space-y-3 text-center max-w-xs">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8596/8596934.png"
                width={100}
                className="rounded-full p-2 mx-auto"
              />
              <p>
                Welcome to Black Bag Campaigns, where people come together to
                support the causes they care about.
              </p>
            </div>
            <div className="item space-y-3 text-center max-w-xs">
              <img
                src="https://cdn-icons-png.freepik.com/512/3430/3430447.png"
                width={100}
                className="rounded-full p-2 mx-auto"
              />
              <p>
                Our platform makes it easy for anyone to create and share a
                crowdfunding campaign, and to connect with a community of people
                who are passionate about making a difference.
              </p>
            </div>
            <div className="item space-y-3 text-center max-w-xs">
              <img
                src="https://www.svgrepo.com/show/194220/donation.svg"
                width={100}
                className="rounded-full p-2 mx-auto"
              />
              <p>
                To get started, simply create a campaign and tell us about the
                cause you're supporting. Then, share your campaign with your
                network and beyond and watch as the donations start rolling in.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white h-2 opacity-5 mt-9"></div>
        <div className="text-white container mx-auto px-4 md:px-0 m-5">
          <h2 className="font-bold flex justify-center p-7 text-4xl text-center">
            Learn More About Us
          </h2>
          <div className="flex flex-wrap gap-5 justify-center text-gray-300">
            <div className="item space-y-3 flex flex-col justify-center items-center max-w-xl">
              <iframe
                className="rounded-lg w-full"
                height="315"
                src="https://www.youtube.com/embed/QMnEP2DYfmI?si=NkWnaF8MIz30ofpZ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="item space-y-3 flex flex-col justify-center items-center max-w-xs text-center">
              <img
                src="favicon.ico"
                width={100}
                className="rounded-full p-2"
              />
              <p>
                Our platform makes it easy for anyone to create and share a
                crowdfunding campaign, and to connect with a community of people
                who are passionate about making a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
