import React from "react"
import SectionTitle from "../shared/SectionTitle"

const SocialBuzz = () => {
  return (
    <section className="my-16 sm:my-24 relative flex items-center justify-center mx-4 sm:mx-10 lg:mx-12 lg:space-x-10 max-w-8xl">
      <img
        src={require("@site/static/images/about/grid-large.png").default}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="flex flex-col gap-6 lg:gap-y-44">
        <div className="ml-4 lg:ml-20">
          <SectionTitle title="About Us" />
          <span className="text-title-semi-large sm:text-display-small">Social & Buzz</span>
        </div>

        <img
          src={require("@site/static/images/about/tweet-2.jpg").default}
          alt="tweet 2"
          className="rounded-3xl p-2 lg:hidden"
          style={{
            border: "1px solid #CECECF",
          }}
        />

        <img
          src={require("@site/static/images/about/tweet-1.jpg").default}
          alt=""
          className=" rounded-3xl p-2"
          style={{
            border: "1px solid #CECECF",
          }}
        />
      </div>
      <img
        src={require("@site/static/images/about/tweet-2.jpg").default}
        alt="tweet 2"
        className="rounded-3xl p-2 lg:block hidden"
        style={{
          border: "1px solid #CECECF",
        }}
      />
    </section>
  )
}

export default SocialBuzz
