import { COMPANY_INFO } from "@/lib/constants";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background pt-10 pb-6 sm:py-12 border-t border-secondary/20 select-none" id="developer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          <div className="flex flex-col items-start">
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-3 sm:mb-4">
              AMARAN
            </h3>
            <p className="text-sm sm:text-base text-foreground/80 max-w-sm">
              The epic journey through realms unknown begins October 31, 2024.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="#about"
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-0.5"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#characters"
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-0.5"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#characters");
                  }}
                >
                  Characters
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-0.5"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#gallery");
                  }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-0.5"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#videos");
                  }}
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-0.5"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#news");
                  }}
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-base sm:text-lg font-bold text-yellow-500 mb-3 sm:mb-4">
              Developer
            </h4>
            <div className="flex items-center gap-4 mb-3">
              <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-accent/40 shadow-md bg-muted">
                <img
                  src="/Profile.webp"
                  alt="Dharun Kumar S H"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-foreground text-base leading-tight">
                  Dharun Kumar S H
                </p>
                <p className="text-xs text-foreground/80 mt-0.5 leading-tight">
                  Software Developer
                </p>
                <p className="text-xs text-foreground/60 mt-0.5 leading-tight">
                  Craze on creating responsive websites.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-sm">
                This project was designed and developed as a portfolio showcase.
              </p>
              <div className="flex items-center space-x-3 pt-1">
                <a
                  href="https://www.linkedin.com/in/dharunkumar-sh/"
                  className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/dharunkumar-sh"
                  className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:dharunkumar.dev@gmail.com"
                  className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-muted/30" />

        <div className="pt-6 text-center text-foreground/60 text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Amaran - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
