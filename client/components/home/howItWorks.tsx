/* eslint-disable prettier/prettier */
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export default function HowItWorks() {
  return (
    <section className="flex flex-col justify-between gap-4 md:flex-row py-8">
      <motion.div className="transition-all duration-300 mx-auto" whileHover={{ scale: 0.9 }}>
        <Card className="w-[20rem] md:w-[25rem] ">
          <CardHeader className="p-0">
            <Image
              alt="image1"
              className="rounded-t-md h-[20rem]"
              height={10}
              src="/assets/tax1.jpg"
              width={400}
            />
          </CardHeader>
          <CardBody className="flex flex-col justify-center items-center">
            <div className="w-[15rem]">
              <h3 className="text-white text-center font-semibold">
                How to Get Started with Our Taxation Office Services.
              </h3>
            </div>
            <div className="md:w-[15rem]">
              <p className="text-center text-[13px] py-2">
                Our streamlined process makes it easy for you to manage your
                taxes.
              </p>
            </div>
          </CardBody>
        </Card>
      </motion.div>
      <motion.div className="transition-all mx-auto duration-300" whileHover={{ scale: 0.9 }}>
        <Card className="w-[20rem] md:w-[25rem]">
          <CardHeader className="p-0">
            <Image
              alt="image1"
              className="rounded-t-md h-[20rem]"
              height={10}
              src="/assets/tax2.jpg"
              width={400}
            />
          </CardHeader>
          <CardBody className="flex flex-col justify-center items-center">
            <div className="w-[16rem]">
              <h3 className="text-white text-center font-semibold">
                Step-by-Step Guidance for Your Tax Filing Needs
              </h3>
            </div>
            <div className="md:w-[17rem]">
              <p className="text-center text-[13px] py-2">
                We provide personalized support to ensure you maximize your tax
                benefits.
              </p>
            </div>
          </CardBody>
        </Card>
      </motion.div>
      <motion.div className="transition-all duration-300 mx-auto" whileHover={{ scale: 0.9 }}>
        <Card className="w-[20rem] md:w-[25rem]">
          <CardHeader className="p-0">
            <Image
              alt="image1"
              className="rounded-t-md h-[20rem]"
              height={100}
              src="/assets/tax3.jpg"
              width={400}
            />
          </CardHeader>
          <CardBody className="flex flex-col justify-center items-center">
            <div className="w-[18rem]">
              <h3 className="text-white text-center font-semibold">
                Expert Advice to Navigate Your Tax Obligations with Confidence
              </h3>
            </div>
            <div className="md:w-[16rem]">
              <p className="text-center text-[13px] py-2">
                Our experienced team is here to answer all your tax-related
                questions.
              </p>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
}
