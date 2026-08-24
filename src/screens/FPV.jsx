import React, { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ArrowRight,
} from "lucide-react";

const FPV_VIDEO =
  "https://zephyr-media.s3.us-east-1.amazonaws.com/fpv.mp4";

const FPV = () => {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const fullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative bg-black overflow-hidden">
        <div className="relative min-h-[72vh] md:min-h-[82vh]">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={FPV_VIDEO}
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />

          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />

          {!playing && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 z-20 grid place-items-center group"
              aria-label="Play FPV reel"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 text-black grid place-items-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play
                  className="w-9 h-9 md:w-11 md:h-11 ml-1"
                  fill="currentColor"
                />
              </div>
            </button>
          )}

          <div className="absolute left-0 right-0 bottom-0 z-30">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-7 md:pb-10">
              <div className="flex items-end justify-between gap-6">
                <div className="text-white max-w-3xl">
                  <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/65 mb-3">
                    Zephyr Visions FPV
                  </p>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    Move through the story.
                  </h1>

                  <p className="mt-4 text-base md:text-xl text-white/75 max-w-2xl">
                    Immersive first-person-view cinematography built around
                    movement, proximity, and perspective.
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur transition"
                  >
                    {playing ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  <button
                    onClick={fullscreen}
                    className="p-3 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur transition"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-logo-blue font-semibold">
              FPV Cinematography
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-950 leading-tight">
              Where aerial cinematography meets immersive movement.
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-lg md:text-xl leading-relaxed text-gray-600">
              FPV drones create continuous, immersive movement through
              spaces and events. Instead of simply viewing a location from
              above, the camera can move through entrances, around objects,
              alongside action, and transition naturally between indoor and
              outdoor environments.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-950 text-white px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Applications
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Designed for movement.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            <div className="bg-gray-950 p-7">
              <span className="text-white/30 text-sm">01</span>
              <h3 className="mt-8 text-xl font-semibold">
                Commercial Spaces
              </h3>
              <p className="mt-3 text-white/55 leading-relaxed">
                Dynamic fly-throughs of facilities, warehouses, venues,
                and unique commercial properties.
              </p>
            </div>

            <div className="bg-gray-950 p-7">
              <span className="text-white/30 text-sm">02</span>
              <h3 className="mt-8 text-xl font-semibold">
                Live Events
              </h3>
              <p className="mt-3 text-white/55 leading-relaxed">
                Immersive footage that moves with the energy and action of
                an event.
              </p>
            </div>

            <div className="bg-gray-950 p-7">
              <span className="text-white/30 text-sm">03</span>
              <h3 className="mt-8 text-xl font-semibold">
                Indoor Fly-Throughs
              </h3>
              <p className="mt-3 text-white/55 leading-relaxed">
                Controlled FPV movement through environments where
                traditional aerial drones aren't practical.
              </p>
            </div>

            <div className="bg-gray-950 p-7">
              <span className="text-white/30 text-sm">04</span>
              <h3 className="mt-8 text-xl font-semibold">
                Cinematic Content
              </h3>
              <p className="mt-3 text-white/55 leading-relaxed">
                Fast, low, sweeping perspectives for promotional content,
                social media, and branded productions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FPV */}
      <section className="px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-logo-blue">
                Indoor
              </div>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Move naturally through doorways, corridors, venues,
                warehouses, and other complex spaces.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-logo-blue">
                Dynamic
              </div>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Follow subjects and action from perspectives that aren't
                possible with conventional camera movement.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-logo-blue">
                Immersive
              </div>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Create the feeling of actually moving through the location
                rather than simply watching it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-5xl mx-auto rounded-3xl bg-logo-blue text-white p-8 md:p-14 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            Have a project in mind?
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Let's build the flight around your space.
          </h2>

          <p className="mt-5 text-white/75 max-w-2xl mx-auto text-lg">
            Tell me about the location, event, or concept and we can
            determine whether FPV is the right approach.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-white text-gray-950 font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-transform"
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default FPV;