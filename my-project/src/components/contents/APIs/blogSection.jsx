

import React, { useEffect, useState } from "react";
import axios from "axios";
// import ErrorPage from "../errorMessage/errorPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import Icon from "./blog-img/arrow-up.png";
import Link from "../link";
import "swiper/css";
// import "./blog.css";
import "../../slider/swiper/pagination.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSlide = () => {
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [postLimit, setPostLimit] = useState(12); // Increase limit to show enough posts

  useEffect(() => {
    axios
      .get("https://finchglowtravels.agency/wp-json/wp/v2/posts?_embed=&page=1")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setHasError(true);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);



  if (hasError) {
    return <ErrorPage />;
  }

  // Helper to group posts into chunks of 6
  const chunkPosts = (posts, size) => {
    const chunks = [];
    for (let i = 0; i < posts.length; i += size) {
      chunks.push(posts.slice(i, i + size));
    }
    return chunks;
  };

  const groupedPosts = chunkPosts(posts.slice(0, postLimit), 6); // Group by 6 posts per slide

  return (
    <section className="relative bg-[#EEF5FF] flex justify-center flex-col items-center w-full h-auto overflow-hidden">
      <div className="static w-full flex flex-col justify-center items-center 2xl:w-[1280px] px-[15px] py-[70px] at500:px-[70px] my-0 mx-auto">
        <div className="blog-container w-full flex flex-col justify-center items-start overflow-hidden">
          <Swiper
            className="relative flex flex-col !overflow-hidden  !h-auto"
            style={{ width: "100%" }}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={25}
            slidesPerView={1} // Show one set of 6 cards per slide
            navigation={{
              nextEl: ".swiper-button-next-blog",
              prevEl: ".swiper-button-prev-blog",
            }}
          >
            {groupedPosts.map((group, index) => (
              <SwiperSlide
                key={index}
                className="!flex !justify-center !items-center !w-full z-[4]"
              >
                <div className="flex flex-col gap-[20px]">
                  {/* First Row: 3 cards */}
                  <div className="flex flex-row gap-[20px]">
                    {group.slice(0, 3).map((post) => (
                      <div
                        data-aos="zoom-in"
                        key={post.id}
                        className="flex flex-col  max-w-[350px] overflow-hidden rounded-b-[14px]"
                      >
                        <div className="flex flex-col relative w-full  overflow-hidden">
                          {post._embedded["wp:featuredmedia"] && (
                            <img
                              className="h-auto w-full min-h-[270px]"
                              src={
                                post._embedded["wp:featuredmedia"][0]
                                  .media_details.sizes.full.source_url
                              }
                              alt={
                                post._embedded["wp:featuredmedia"][0]
                                  .alt_text || post.title.rendered
                              }
                              style={{ maxWidth: "100%", objectFit: "cover" }}
                            />
                          )}
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="flex flex-col overflow-hidden gap-[20px]"
                        >
                          <div className="flex flex-col justify-center w-full p-[5px] max-h-[300px]">
                            {post._embedded["wp:term"] && (
                              <p
                                data-aos="fade-up"
                                className="txt4 text-[#0260EE] leading-[24px]"
                              >
                                {post._embedded["wp:term"][0] &&
                                  post._embedded["wp:term"][0][0].name}
                              </p>
                            )}
                            <div className="flex justify-between items-start w-full">
                              <h5
                                data-aos="fade-up"
                                className="text-[#101828] !leading-[25px] ip8:w-[268px]"
                              >
                                {post.title.rendered}
                              </h5>
                              <span data-aos="fade-up" className="arrow">
                                {/* <img
                                  className="relative group-hover:right-[-6px] h-auto object-cover"
                                  src={Icon}
                                  alt="arrow up"
                                /> */}
                              </span>
                            </div>
                            <span
                              data-aos="fade-up"
                              className="txt5 !font-medium text-[#667085]"
                              dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered,
                              }}
                            ></span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Second Row: 3 cards */}
                  <div data-aos="zoom-in" className="flex flex-row gap-[20px] ">
                    {group.slice(3, 6).map((post) => (
                      <div
                        key={post.id}
                        className="flex flex-col bg-[#E6EFFD] max-w-[350px] overflow-hidden rounded-b-[14px]"
                      >
                        {/* Same structure for the second row of posts */}
                        <div className="flex flex-col relative w-full overflow-hidden">
                          {post._embedded["wp:featuredmedia"] && (
                            <img
                              className="h-auto w-full min-h-[270px]"
                              src={
                                post._embedded["wp:featuredmedia"][0]
                                  .media_details.sizes.full.source_url
                              }
                              alt={
                                post._embedded["wp:featuredmedia"][0]
                                  .alt_text || post.title.rendered
                              }
                              style={{ maxWidth: "100%", objectFit: "cover" }}
                            />
                          )}
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="flex flex-col overflow-hidden gap-[20px]"
                        >
                          <div className="flex flex-col justify-center w-full p-[30px] max-h-[300px]">
                            {post._embedded["wp:term"] && (
                              <p
                                data-aos="fade-up"
                                className="txt4 text-[#0260EE] leading-[24px]"
                              >
                                {post._embedded["wp:term"][0] &&
                                  post._embedded["wp:term"][0][0].name}
                              </p>
                            )}
                            <div className="flex justify-between items-start w-full">
                              <h5
                                data-aos="fade-up"
                                className="text-[#101828] !leading-[25px] ip8:w-[268px]"
                              >
                                {post.title.rendered}
                              </h5>
                              <span data-aos="fade-up" className="arrow">
                                <img
                                  className="relative group-hover:right-[-6px] h-auto object-cover"
                                  src={Icon}
                                  alt="arrow up"
                                />
                              </span>
                            </div>
                            <span
                              data-aos="fade-up"
                              className="txt5 !font-medium text-[#667085]"
                              dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered,
                              }}
                            ></span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative flex !items-end !justify-end w-full gap-2 2xl:w-[1280px] px-[15px] at500:px-[10px] py-[20px] md:py-[40px] my-0 mx-auto">
          <div className="next p-2">
            <FaArrowLeft className="swiper-button-prev-blog relative top-0 text-[#05284C] hover:text-[#05284C] w-[20px]" />
          </div>
          <div className="prev p-2">
            <FaArrowRight className="swiper-button-next-blog relative text-[#05284C] top-0 hover:text-[#05284C] w-[20px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlide;
