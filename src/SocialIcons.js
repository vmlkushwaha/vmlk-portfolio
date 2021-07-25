import React from "react";
import Lottie from "react-lottie";
import LinkedInSocial from "./assets/Icon(1).json";
import GitHubSocial from "./assets/Icon.json";
import TwitterSocial from "./assets/Icon(2).json";
import Plane from "./assets/plane.json";
import Code from "./assets/code.json";

export const GitHubIcon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GitHubSocial,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={40} width={40} />
    </>
  );
};

export const LinkedInIcon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LinkedInSocial,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={40} width={40} />
    </>
  );
};

export const TwitterIcon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TwitterSocial,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={40} width={40} />
    </>
  );
};

export const PaperPlane = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Plane,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={100} width={100} />
    </>
  );
};

export const CodeIcon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Code,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={100} width={100} />
    </>
  );
};
