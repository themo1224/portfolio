import React from "react";
import { MdOutlinePhp } from "react-icons/md";
import { DiRedis } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaWordpressSimple } from "react-icons/fa";


export const Technologies = () => {
  return (
    <div className="pb-4 border-b border-neutral-800">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap  items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <MdOutlinePhp className="text-5xl " />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaLaravel className="text-5xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-5xl text-cyan-500 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className="text-5xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-5xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaWordpressSimple className="text-5xl text-cyan-700" />
        </div>
      </div>
    </div>
  );
};
