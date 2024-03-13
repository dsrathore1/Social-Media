import React from "react";
import Share from "../../Components/Share";
import Post from "../../Components/Post";

const Home = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <Share />
      <Post />
      <Post />
    </div>
  );
};

export default Home;
