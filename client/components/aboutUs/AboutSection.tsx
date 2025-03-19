/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="flex items-center px-4 lg:px-0 md:space-x-[4rem] py-8 md:py-10">
      <div className="flex">
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div>
            <p className="text-[12px] mx-auto font-normal">Integrity</p>
          </div>
          <div className="lg:w-[42rem]">
            <h2 className="font-bold text-center lg:text-start text-[2rem] lg:text-[3rem]">
              Your <span className="text-lime-500">Trusted Partner</span> in
              Taxation Solutions
            </h2>
          </div>
          <div className="lg:w-[35rem] text-center lg:text-start">
            <p className="font-light">
              At our taxation office, we pride ourselves on delivering expert
              guidance and support tailored to your financial needs. With years
              of experience, we navigate the complexities of tax regulations to
              ensure compliance and maximize your benefits.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              className="md:h-[3rem] border-lime-500"
              size="md"
              variant="bordered"
            >
              Learn More
            </Button>
            <Button
              className="md:h-[3rem] px-[5rem] bg-[#6F951E]"
              size="md"
              variant="solid"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          alt="image"
          className="lg:h-[30rem] lg:w-[50rem] rounded-md"
          height={10}
          src="/assets/tax2.jpg"
          width={400}
        />
      </div>
    </section>
  );
}
