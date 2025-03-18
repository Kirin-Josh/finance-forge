/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex items-start justify-center md:space-x-[4rem] py-8 md:py-10">
      <div className="flex flex-col space-y-4 md:w-[580px]">
        <div>
          <p className="leading-[4rem] text-[1rem] md:text-[3rem] font-bold">
            Maximize Your
            <span className="text-purple-500"> Tax Benefits</span> with Expert
            Guidance
          </p>
        </div>
        <p className="flex-wrap md:w-[35rem]">
          Navigating taxes can be overwhelming, but our dedicated team is here
          to simplify the process for you. Experience peace of mind knowing you
          have professionals working to maximize your returns and minimize your
          liabilities.
        </p>
        <div>
          <Button className="bg-purple-500" size="md">
            Learn More
          </Button>
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          alt="tax"
          className="rounded-md hover:translate-x-1 transition-all duration-500"
          height={400}
          src="/assets/tax1.png"
          width={400}
        />
      </div>
    </section>
  );
}
