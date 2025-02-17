"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";



const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [sliderItems, setSliderItems] = useState([]);
  const apiEndpoint = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}/user/parking/stations/`);
        setSliderItems(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error("Error fetching slider items:", error);
      }
    };

    fetchData();
  }, [apiEndpoint]);



  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{ height: "850px" }}
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div
                  className="slider-slide-item"
                  style={{
                    backgroundImage: item.images && item.images.length > 0
                      ? `url(http://localhost:8000${item.images[0].image})`
                      : "url(/images/default-placeholder.jpg)", // Fallback image
                  }}
                  data-thumb={
                    item.images && item.images.length > 0
                      ? `http://localhost:8000${item.images[0].image}`
                      : "/images/default-placeholder.jpg"
                  }
                >

                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-left position-relative">
                        <h4 className="h1 slider-subtitle text-white">
                          {item.price}
                        </h4>
                        <h3 className="h6 slider-title text-white">
                          {item.owner_name}
                        </h3>
                        <p className="mb30 slider-text text-white">
                          {item.description}
                        </p>
                        <div className="slider-btn-block">
                          <Link
                            href={`/single-v5/${item.ownerID}/`}
                            className="ud-btn btn-white slider-btn"
                          >
                            View Details
                            <i className="fal fa-arrow-right-long" />
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom_thumbs">
        <Swiper
          direction="vertical" // Set the direction to vertical
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={sliderItems.length} // Display all thumbs at once
          spaceBetween={0} // Adjust the space between thumbs
          style={{ height: "268px" }} // Set a fixed height for the thumbs gallery
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={50}
                height={50}
                className="cover"
                src={
                  item.images && item.images.length > 0
                    ? `http://localhost:8000${item.images[0].image}`
                    : "/images/default-placeholder.jpg"
                }
                alt="thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
