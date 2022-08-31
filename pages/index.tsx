import type { NextPage } from "next";
import Header from "../components/header";
import Banner from "../components/community/Banner";
import CreatePost from "../components/feed/CreatePost";
import About from "../components/community/About";
import Feed from "../components/feed";
import useSWR from "swr";
import { useState, useEffect } from "react";
import axios from "axios";

const style = {
  wrapper: `flex min-h-screen flex-col bg-black text-white`,
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
};

const Home: NextPage = () => {
  const [myPosts, setMyPosts] = useState([]);

  // const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR("/api/get-post", fetcher, {
    refreshInterval: 200,
  });
  console.log(data, "🧹");

  useEffect(() => {
    if (!data) return;

    setMyPosts(data.data);
  }, [data]);

  return (
    <div className={style.wrapper}>
      <Header />
      <Banner />
      <main className={style.main}>
        <div className={style.content}>
          <CreatePost />
          <Feed posts={myPosts} />
        </div>
        <div className={style.infoContainer}>
          <About />
        </div>
      </main>
    </div>
  );
};

export default Home;
