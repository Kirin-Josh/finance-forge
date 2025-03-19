/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import React from "react";

export default function HeroAboutUs() {
  return (
    <section className="relative py-8 md:py-8 bg-cover bg-center bg-no-repeat">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg" 
        style={{ backgroundImage: `url('/assets/tax5.jpg')` }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:items-center">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="w-full">
              <p className="text-[12px]">Integrity</p>
              <p className="leading-[1.2] text-[2.5rem] md:text-[3.5rem] font-bold text-white">
                Your
                <span className="text-lime-500"> Trusted</span> Advisors
              </p>
            </div>
            <p className="text-white text-lg">
              Dedicated to providing expert tax solutions and ensuring
              compliance for individuals and businesses alike.
            </p>
            <div className="flex flex-col min-w-full md:flex-row gap-4 ">
              <Button className="h-[3rem] bg-[#6F951E]" size="md">
                Learn More
              </Button>
              <Button
                className="h-[3rem] border-[#6F951E]"
                size="md"
                variant="bordered"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
