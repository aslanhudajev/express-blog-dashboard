import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PostGrid from "../Parts/PostGrid";
import PostCardSkeleton from "../Parts/PostSkeleton";

//!TODO Add fetch to get posts
//!TODO Specify which props, instead of destructuring props with ...
const Posts = () => {
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const posts = await axios.get(
          `https://${import.meta.env.VITE_API_URL}/api/dashboard/posts`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          },
        );

        return posts.data;
      } catch (error) {
        navigate("/login");
      }
    },
  });

  if (isPending) {
    return (
      <section className="content grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </section>
    );
  }

  if (error) {
    return (
      <section className="content">
        <h2>Uh oh, there are no posts here...</h2>
        <span>Error: {error.message}</span>
      </section>
    );
  }

  return (
    <section className="content">
      <PostGrid posts={data} />
    </section>
  );
};

export default Posts;
