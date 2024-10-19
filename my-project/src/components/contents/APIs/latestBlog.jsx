import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "../link";
import Loading from "./loading";

const  LatestBlogs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit, setPostLimit] = useState(3); // Adjust limit as needed

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    posts {
      id
      title
      slug
      date
      excerpt
      coverImage {
        url
        fileName
      }
      content {
        html
      }
      author {
        name
      }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query: query,
        });
        setData(response.data.data.posts);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error fetching data</p>;

  

  return (
    <section className="relative flex justify-center flex-col items-center w-full h-auto overflow-hidden">
      <div className="blog-container w-full flex flex-col justify-start items-start overflow-hidden">
        <div className="grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-5 w-full">
          {data.slice(0, postLimit).map((post) => (
            <div
              key={post.id}
              className="flex gap-[16px] flex-col justify-center items-start w-full"
            >
              {post.coverImage && (
                <img
                  className="h-[220px] w-full rounded-[8px] object-cover"
                  src={post.coverImage.url}
                  alt={post.coverImage.fileName}
                />
              )}
              <Link to={`/posts/${post.slug}`}>
                <div className="flex flex-col gap-[8px] silver:w-[357px]">
                  <h6 className="text-[#353F50]">{post.title}</h6>
                  <span className="text-[#7E8EA2] txt">{post.excerpt}</span>
                  <span className="text-[#353F50] leading-[18.9px] text-[14px]">
                    by &nbsp;
                    <strong className="text-[#353F50] txt4">
                      {post.author?.name}
                    </strong>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
