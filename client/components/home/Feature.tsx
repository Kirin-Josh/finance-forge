/* eslint-disable prettier/prettier */
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

export default function FeatureSection() {
  return (
    <section className="flex items-start justify-center md:space-x-[4rem] py-8 md:py-10">
      <div className="flex flex-col space-y-4 mx-auto">
        <p className="text-base">Expertise</p>
        <div className="w-[30rem]">
          <h2 className="font-bold text-[1.5rem] md:text-[2.5rem]">
            Your Trusted Partner in Tax Filling Assistance
          </h2>
        </div>
        <div className="w-[36rem]">
          <p className="text-16 font-light">
            Navigating tax season can be overwhelming. Our dedicated team is
            here to simplify the process and ensure you maximize your returns.
          </p>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="flex flex-col space-y-2">
            <Image
              alt="box"
              className=""
              height={50}
              src="/assets/box.png"
              width={50}
            />
            <h3 className="font-bold text-[1.2rem]">Maximize Returns</h3>
            <div className="w-[19rem]">
              <p className="text-[14px] md:text-[16px]">
                Get expert guidance to ensure you claim all eligible deductions
                and credits.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Image
              alt="box"
              className=""
              height={50}
              src="/assets/box.png"
              width={50}
            />
            <h3 className="font-bold text-[1.2rem]">Stress-Free</h3>
            <div className="w-[19rem]">
              <p className="text-[14px] md:text-[16px]">
                Let us handle the paperwork while you focus on what matters
                most.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button className="md:h-[3rem] bg-[#6F951E]" size="md" variant="bordered">
          Learn More
        </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          alt="tax"
          className="h-[30rem] rounded-md hover:translate-x-1 transition-all duration-500"
          height={400}
          src="/assets/tax4.jpg"
          width={500}
        />
      </div>
    </section>
  );
}
