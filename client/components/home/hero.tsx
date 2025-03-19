/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative py-10 md:py-10 bg-cover bg-center bg-no-repeat"
    >
       <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg" // Added rounded-lg here
        style={{ backgroundImage: `url('/assets/tax1.png')` }}
      />
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:items-center">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div>
              <p className="leading-[1.2] text-[2.5rem] md:text-[3.5rem] font-bold text-white">
                Maximize Your
                <span className="text-lime-500"> Tax Benefits</span> with
                Expert Guidance
              </p>
            </div>
            <p className="text-white text-lg">
              Navigating taxes can be overwhelming, but our dedicated team is
              here here here here to simplify the process for you. Experience
              peace knowing you have professionals working to maximize your
              returns and minimize your liabilities.
            </p>
            <div>
              <Button className="h-[3rem] bg-[#6F951E]" size="md">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
