import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  video,
  tags = [],
  closeModal
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Prepare slides array: first image, then video
  const slides = [];
  if (image) slides.push({ type: "image", src: image });
  if (video) slides.push({ type: "video", src: video });

  // LinkedIn URL
  const linkedinURL = "https://www.linkedin.com/posts/vandit-agrawal-a56b972a8_vrgame-unity3d-studentproject-activity-7320333697876938753-5hFg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo20iIBIAhiYrTyqZUy_1cpaNH3V-q0DaI";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/50 backdrop-blur-sm p-5">
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Media carousel */}
        <div className="relative w-full mb-5">
          {slides.length > 0 && (
            <>
              {slides[currentSlide].type === "image" ? (
                <img
                  src={slides[currentSlide].src}
                  alt={title}
                  className="w-full rounded-t-2xl"
                />
              ) : (
                <video
                  src={slides[currentSlide].src}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full rounded-t-2xl"
                />
              )}

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 p-2 rounded-sm bg-midnight hover:bg-gray-500 z-20"
              >
                <img src="/models/close.svg" className="w-6 h-6" alt="Close" />
              </button>

              {/* Carousel navigation buttons */}
              {slides.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev === 0 ? slides.length - 1 : prev - 1
                      )
                    }
                    className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-midnight/70 hover:bg-midnight text-white rounded-full z-20"
                  >
                    ◀
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev === slides.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-midnight/70 hover:bg-midnight text-white rounded-full z-20"
                  >
                    ▶
                  </button>
                </>
              )}
            </>
          )}
        </div>

        {/* Project content */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}

          {/* Tags and LinkedIn link */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-10 h-10 hover-animation"
                />
              ))}
            </div>

            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project
              <img src="/models/arrow-right.svg" className="w-4 h-4" alt="Arrow Right" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
