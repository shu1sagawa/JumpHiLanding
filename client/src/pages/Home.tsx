import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";

export default function Home() {
  // Smooth scroll functionality
  const handleSmoothScroll = (e: MouseEvent) => {
    const target = e.target as HTMLAnchorElement;
    if (!target) return;
    
    if (target.tagName === 'A' && target.hash) {
      const targetElement = document.querySelector(target.hash);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>JumpHi - Basketball Training App</title>
        <meta name="description" content="Elevate your basketball game with JumpHi - the ultimate basketball training app for players of all levels" />
        <meta name="keywords" content="basketball, training, app, skills, coaching, drills, workouts" />
        <meta property="og:title" content="JumpHi - Basketball Training App" />
        <meta property="og:description" content="Elevate your basketball game with JumpHi - the ultimate basketball training app for players of all levels" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jumphiapp.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JumpHi - Basketball Training App" />
        <meta name="twitter:description" content="Elevate your basketball game with JumpHi - the ultimate basketball training app for players of all levels" />
      </Helmet>

      <div className="flex flex-col min-h-screen font-body text-dark">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <AppPreview />
          <Testimonials />
          <Faq />
          <DownloadCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
