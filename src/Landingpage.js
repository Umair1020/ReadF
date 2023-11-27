import React from "react";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
import Pricing from "./Pages/Pricing/Pricing";
import Pricingcomp from "./components/PricingComp/Pricingcomp";

const Landingpage = () => {
  return (
    <div>
      <Header />
      <div class="sc-32a7df2f-0 gExBKk">
        <div class="sc-32a7df2f-1 hWYZpb">
          <div class="sc-32a7df2f-2 btULvV">
            <h1>Chat with any PDF document</h1>
            <p>
              From legal agreements to financial reports, brings your documents
              to life. You can ask questions, get summaries, find information,
              and more.
            </p>
            <div class="sc-32a7df2f-3 jCfMGX">
              <Link to="/login">Get started for free</Link>
            </div>
            <div class="flex justify-start mt-6">
              <img
                class="relative z-30 inline-block h-6 w-6 my-auto object-cover rounded-full ring-2 ring-green-950"
                src="/assets/rita.jpg"
                alt=""
              />
              <img
                class="relative z-20 inline-block h-6 w-6 my-auto object-cover rounded-full ring-2 ring-green-950"
                src="/assets/christina.jpg"
                alt=""
              />
              <img
                class="relative z-10 inline-block h-6 w-6 my-auto object-cover rounded-full ring-2 ring-green-950"
                src="/assets/courtney.jpg"
                alt=""
              />
              <img
                class="relative z-0 inline-block h-6 w-6 my-auto object-cover rounded-full ring-2 ring-green-950"
                src="/assets/irene.jpg"
                alt=""
              />
              <img
                class="relative z-0 inline-block h-6 w-6 my-auto object-cover rounded-full ring-2 ring-green-950"
                src="/assets/etty.jpg"
                alt=""
              />
              <p class="ml-2 my-auto text-gray-600">
                Loved by 500,000+ happy users
              </p>
            </div>
          </div>
          <div class="sc-32a7df2f-4 kflDvB">
            <div style={{ position: "relative", paddingTop: "65.534%" }}>
              <iframe
                src="https://customer-k5rghq683w5sm3cf.cloudflarestream.com/08305713d67ee6e204c0435b7ae5ce7f/iframe?muted=true&amp;preload=true&amp;loop=true&amp;autoplay=true&amp;poster=https%3A%2F%2Fcustomer-k5rghq683w5sm3cf.cloudflarestream.com%2F08305713d67ee6e204c0435b7ae5ce7f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen=""
                style={{
                  borderradius: "7px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
              ></iframe>
            </div>
          </div>
          <section class="relative isolate overflow-hidde px-6 py-12 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-4xl">
              <figure class="mt-6">
                <blockquote class="text-center text-xl font-semibold leading-8  sm:leading-9">
                  <p>
                    “Magicaldocs is one of the most useful AI applications I've
                    used.”
                  </p>
                </blockquote>
                <figcaption class="mt-4">
                  {/* <img class="mx-auto h-10 w-10 rounded-full" src="https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/d6f2b9f3-7f9c-4ef7-424f-1bd87f6cd700/public" alt="Sam Szuchan" /> */}
                  <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                    <a
                      class="font-semibold  hover:underline"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7087039277296959489/"
                      target="_blank"
                    >
                      Sam Szuchan
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
          <Pricingcomp />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
