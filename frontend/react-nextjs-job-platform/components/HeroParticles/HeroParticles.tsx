import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import styles from "./HeroParticles.module.css";

const HeroParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };


return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        className={styles.particlesCanvas}
        options={{
            fullScreen: {
                enable: false,
                zIndex: 1,
            },
            particles: {
                number: {
                    value: 120,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#404040",
                },
                shape: {
                    type: "circle",
                },
                stroke: {
                    width: 1,
                    color: "#a80000",
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: { min: 2, max: 2 },
                    random: false,
                    anim: {
                        enable: false,
                        speed: 10,
                        size_min: 10,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#990000",
                    opacity: 0.4,
                    width: 2,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: true,
                            force: 10,
                            smooth: 30,
                        },
                    },
                    onclick: {
                        enable: false,
                        mode: "push",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 600,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 600,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
            background: {
                color: "#0d0d0d",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover",
            },
        }}
    />
  );
};

export default HeroParticles;
