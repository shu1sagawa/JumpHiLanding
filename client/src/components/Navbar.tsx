import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Volleyball } from "lucide-react";
import jumphiLogo from "../assets/jumphi-logo.png";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="font-medium hover:text-primary transition-colors text-[10px] tracking-tight"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="font-medium py-2 hover:text-primary transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: "#000000" }}>
      <div className="container mx-auto px-4 py-0 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src={jumphiLogo} alt="JumpHi Logo" className="h-120 md:h-144" />
        </Link>
        
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#training">Training</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a 
            href="#download" 
            className="hidden md:block bg-primary hover:bg-opacity-90 text-white px-3 py-1 rounded-full text-[10px] font-medium transition-all transform hover:scale-105"
          >
            Download
          </a>
          <button 
            className="md:hidden text-2xl text-foreground"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="py-4 px-6 shadow-inner md:hidden overflow-hidden"
            style={{ backgroundColor: "#000000" }}
          >
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#training">Training</MobileNavLink>
              <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
              <MobileNavLink href="#faq">FAQ</MobileNavLink>
              <a 
                href="#download" 
                className="bg-primary text-white py-3 mt-2 rounded-full font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Now
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
