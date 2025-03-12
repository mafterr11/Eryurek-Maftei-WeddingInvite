"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";

const links = [
  {
    path: "acasa",
    name: "Acasă",
  },
  {
    path: "noi-doi",
    name: "Noi doi",
  },
  {
    path: "unde-si-cand",
    name: "Unde și cand",
  },
  {
    path: "confirmare",
    name: "Confirmare",
  },
];

const Navbar = () => {
  return (
    <div className="max-md:hidden h-screen md:w-[22rem] bg-accentGreen bg-center bg-no-repeat bg-cover fixed top-0 left-0 z-50 flex-shrink-0 ">
      {/* Main inside wrapper */}
      <div className="flex flex-col items-center justify-between py-16 h-full">
        {/* Name Date */}
        <div className="flex flex-col items-center">
          <div className="relative w-28 h-12">
            <Image
              src="/assets/branch2.png"
              fill
              alt="Branch icon"
              className="object-contain"
            />
          </div>
          <div className="font-alexBrush tracking-widest font-light mb-1 text-3xl">
            Deniz & Alexandru
          </div>
          <div>30 Mai 2026</div>
        </div>
        {/* Link list */}
        <div className="flex flex-col items-center justify-center space-y-7">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              duration={500}
              smooth={true}
              spy={true}
              className="hover:underline decoration-2 underline-offset-4 transition-all ease-linear duration-100 hover:scale-110 decoration-lightGreen"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom part */}
        <div>
          <div className="w-36 bg-[#7f8d72] h-[1px] mx-auto mb-2 " />
          <p className="text-sm ">Vă asteptăm cu drag!</p>
          <Heart
            size={24}
            strokeWidth={1.5}
            className="mx-auto"
            color="#7f8d72"
            fill="#7f8d72"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
