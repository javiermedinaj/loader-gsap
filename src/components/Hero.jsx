import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const img = hero.querySelector(".hero_bg-image");
      if (img) {
        img.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero_image-frame">
        <img
          src="/loader-assets/QmdgCNQTnzWBX2Ym55cvkPQjXrGVTjAwJzbPV3WVGw7tUf.webp"
          alt=""
          className="hero_bg-image"
        />
      </div>

      <div className="hero_overlay"></div>
      <div className="hero_vignette"></div>
      <div className="hero_noise"></div>

      <div className="hero_accent-line"></div>

      <div className="hero_content">
        <h1 className="hero_title">
          <span className="hero_title-line" data-reveal>
            Say Bye To
          </span>
          <span className="hero_title-line" data-reveal>
            <em className="hero_title-word">Dull</em>{" "}
            <span className="hero_title-word hero_title-word--secondary">
              Doodles
            </span>
          </span>
        </h1>

        <p className="hero_desc" data-reveal>
          The best free illustrations, 3D renders, and royalty-free doodles.
          Powered by robots everywhere.
        </p>

        <a href="#products" className="hero_cta" data-reveal>
          <span className="hero_cta-text">View Our Work</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
