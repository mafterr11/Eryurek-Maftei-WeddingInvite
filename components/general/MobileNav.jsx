"use client";
import { motion } from "framer-motion";
import { Heart, Menu, SquareX } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
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
const navVariants = {
  closed: { x: "-100%", opacity: 0 },
  open: { x: 0, opacity: 1 },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-50 md:hidden">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 transition-all duration-200 ease-in-out active:scale-90"
      >
        <Menu size={40} color="white" />
      </div>
      <motion.div
        variants={navVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.35, ease: "linear" }}
        className="bg-accentGreen fixed top-0 left-0 z-50 h-screen w-full bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute top-3 right-3 transition-all duration-200 ease-in-out active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SquareX size={32} strokeWidth={1.2} />
        </div>
        {/* Main inside wrapper */}
        <div className="flex h-full flex-col items-center justify-between py-16">
          {/* Top part wrapper */}
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
          <div className="flex flex-col items-center justify-center space-y-6">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                duration={500}
                smooth={true}
                spy={true}
                className="underline-offset-4 transition-all duration-100 ease-linear hover:scale-105 hover:underline"
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom part */}
          <div>
            <div className="mx-auto mb-2 h-[1px] w-36 bg-[#7BA05B]" />
            <p className="text-sm">Vă asteptăm cu drag!</p>
            <Heart
              size={24}
              strokeWidth={1.5}
              className="mx-auto"
              color="#7BA05B"
              fill="#7BA05B"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
