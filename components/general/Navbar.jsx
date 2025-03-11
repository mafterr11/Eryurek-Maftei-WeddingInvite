import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    path: "",
    name: "Acasă",
  },
  {
    path: "",
    name: "Noi doi",
  },
  {
    path: "",
    name: "Eveniment",
  },
  {
    path: "",
    name: "Unde și cand",
  },
  {
    path: "",
    name: "Confirmare",
  },
];

const Navbar = () => {
  return (
    <div className="h-screen md:w-[22rem] bg-accentGreen bg-center bg-no-repeat bg-cover fixed top-0 left-0 z-50 flex-shrink-0">
      {/* Main inside wrapper */}
      <div className="flex flex-col items-center justify-between py-16 h-full">
        {/* Top part wrapper */}
        <div className="flex flex-col items-center justify-center gap-y-18">
          {/* Name Date */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-12">
              <Image
                src="/assets/branch.png"
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
          <div className="flex flex-col items-center justify-center space-y-3">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="hover:underline underline-offset-4 transition-all ease-linear duration-100 hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom part */}
        <div>
          <div className="w-36 bg-amber-700 h-[1px] mx-auto mb-2" />
          <p className="text-sm">Vă asteptăm cu drag!</p>
          <Heart
            size={24}
            strokeWidth={1.5}
            className="mx-auto"
            color="red"
            fill="red"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
