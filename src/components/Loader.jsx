import React, { useEffect, useState } from "react";
import "./Loader.css";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const gallery = document.querySelector(".loader_gallery");
    const galleryItems = document.querySelectorAll(".loader_gallery_figure");
    const circleTop = document.querySelector(".loader_circle-top");
    const circleBottom = document.querySelector(".loader_circle-bottom");
    const heroImageContainer = document.querySelector(".loader_hero-image");

    const centerIndex = Math.floor(galleryItems.length / 2);
    const centerItem = galleryItems[centerIndex];
    const centerImage = centerItem?.querySelector(".loader_gallery_image");
    const heroImg = heroImageContainer?.querySelector("img");

    if (centerImage && heroImg) {
      heroImg.src = centerImage.src;
    }

    if (!gallery || !centerItem) return;

    gsap.set(gallery, { scale: 0.75 });
    gsap.set([circleBottom, circleTop], { yPercent: 0 });
    gsap.set(heroImageContainer, { opacity: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 2.2, ease: "expo.inOut" },
      onComplete: () => {
        setIsAnimating(false);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      },
    });

    tl.to(gallery, { scale: 1 }, 0)
      .to(centerItem, { width: "100vw" }, 0)
      .to(circleTop, { yPercent: -100 }, 0.2)
      .to(circleBottom, { yPercent: 100 }, 0.2)
      .to(heroImageContainer, { opacity: 1, duration: 0.4 }, 1.2)
      .to(".loader", { opacity: 0, duration: 0.3 }, 1.6);
  }, [onComplete]);

  return (
    <div className={`loader ${!isAnimating ? "loader--hidden" : ""}`}>
      <div className="loader_hero-image">
        <img src="" alt="Hero" />
      </div>
      <div className="loader_wrapper">
        <div className="loader_gallery">
          {[
            "QmWFAzgnA4nPPhJbfpuzuYfRppeR9LkcBduspJ1JqhEgpY",
            "QmPGzNV7RHjaSwmPMM6gMCq9LP85uz2rdnADbyV72FCQwi",
            "QmZXNt8T7nYwhDmnQGx9mh9VKSseEBBn22uJ59Nyve2PHP",
            "QmWuGk36GjvoG3BYJ8U3GxmkA3Pv1sFA2Mfbf9AbEJsjmb",
            "QmdgCNQTnzWBX2Ym55cvkPQjXrGVTjAwJzbPV3WVGw7tUf",
            "QmX1NaN3o5sPFEU3YjkaccG3F7Yg9HzJbKCATSondTRw6X",
            "QmeEfr79Wp8NYsEP4Uz7uCWxcR5rx4t8QCWGkwnpKSNZ8o",
            "QmdRNbnR7P1pGAo8crCpuYp7WoY9yVyMX84BWH7N3dvWaB",
            "QmaXMhaCPAg1ZUMwDRMCpCWeHP4Nr3Gy593W4kRSgEKWAJ",
          ].map((id, index) => (
            <div key={index} className="loader_gallery_figure">
              <img
                src={`/loader-assets/${id}.webp`}
                alt=""
                className="loader_gallery_image"
              />
            </div>
          ))}
        </div>
        <div className="loader_circle loader_circle-top"></div>
        <div className="loader_circle loader_circle-bottom"></div>
      </div>
    </div>
  );
};

export default Loader;
