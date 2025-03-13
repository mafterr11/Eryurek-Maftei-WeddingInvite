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
    <div className="bg-accentGreen fixed top-0 left-0 z-50 h-screen flex-shrink-0 bg-cover bg-center bg-no-repeat max-md:hidden md:w-[22rem]">
      {/* Main inside wrapper */}
      <div className="flex h-full flex-col items-center justify-between py-16">
        {/* Name Date */}
        <div className="flex flex-col items-center">
          <div className="relative h-12 w-28">
            <Image
              src="/assets/branch2.png"
              fill
              alt="Branch icon"
              className="object-contain"
            />
          </div>
          <div className="font-alexBrush mb-1 text-3xl font-light tracking-widest">
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
              className="decoration-lightGreen decoration-2 underline-offset-4 transition-all duration-100 ease-linear hover:scale-110 hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom part */}
        <div>
          <div className="mx-auto mb-2 h-[1px] w-36 bg-[#7f8d72]" />
          <p className="text-sm">Vă asteptăm cu drag!</p>
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
