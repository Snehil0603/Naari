import React, { useEffect } from "react";
import complaint from "../assests/complaint.png";
import chat from "../assests/chat.png";
import laws from "../assests/laws.png";
import session from "../assests/session.png";
import counselling from "../assests/counselling.png";
import track from "../assests/track.png";
const Features = () => {
  const featureData = [
    {
      img: complaint,
      title: "File Complain",
      description: "File your complain with easy process",
    },
    {
      img: chat,
      title: "Chat",
      description: "Have one to one conversation with authority",
    },
    {
      img: track,
      title: "Track Complain",
      description: "Track your complain status",
    },
    {
      img: laws,
      title: "Laws",
      description: "Learn about the laws of harassment",
    },
    {
      img: session,
      title: "Mentoring Sessions",
      description: `Information of the session conducted by NGOs`,
    },
    {
      img: counselling,
      title: "Counselling",
      description: "Join counselling for any problem without any hesitation",
    },
  ];

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="py-6 bg-black">
      <h2 className="text-white font-bold text-center text-3xl my-6">
        ASSISTANCE
      </h2>
      <div className="grid grid-cols-3 place-items-center gap-6">
        {featureData.map((features) => {
          return (
            <div className="mt-6 flex items-center flex-col cursor-pointer group">
              <img
                className="max-w-[120px] group-hover:scale-110 transition-all"
                src={features.img}
                alt=""
                srcset=""
              />
              <h2 className="text-white font-bold text-2xl my-2">
                {features.title}
              </h2>
              <p className="text-white font-light mx-4">
                {features.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
