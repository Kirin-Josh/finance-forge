/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import React from "react";

export default function CallToAction() {
  return (
    <section className="py-8 mx-auto lg:space-x-4 space-y-2">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-[75rem]">
          <h2 className="font-bold text-[1.5rem] md:text-[3rem]">
            Get Expert <span className="text-lime-500"> Tax Guidance</span> Today
          </h2>
      </div>
      <div className="flex flex-col md:justify-start mx-auto space-y-2 ">
        <div className="lg:w-[34rem]">
          <p className="text-[14px] text-center lg:text-start md:text-[1rem]">
            Navigating taxes can be overwhelming, but you don&apos;t have to do
            it alone. Schedule a consultation with our experienced team and take
            the first step towards financial clarity.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start space-x-2">
          <Button
            className="md:h-[3rem] bg-[#6F951E]"
            size="md"
            variant="solid"
          >
            Consult
          </Button>
          <Button
            className="md:h-[3rem] border-lime-500"
            size="md"
            variant="bordered"
          >
            Learn More
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
}
