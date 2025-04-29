"use client"
import About from "@/Sections/About";
import Contact from "@/Sections/Contact";
import Hero from "@/Sections/Hero";
import Projects from "@/Sections/Projects";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useState } from "react";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-indigo-600 dark:border-teal-400 rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-medium text-indigo-600 dark:text-teal-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>

  );
}
