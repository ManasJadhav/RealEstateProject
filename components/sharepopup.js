import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";

const SharePop = (props) => {
  return (
    <div
      className={
        props.clicked
          ? " shadow-2xl px-4 py-3 z-10 bg-transparent left-48 top-[26rem] rounded-lg mt-4 "
          : "absolute hidden top-20"
      }
    >
      <div>
        <h1 className="font-bold text-md mb-2 text-white">Share on socials</h1>
        <div className="w-48 space-x-4">
          <FacebookShareButton url={"https://keyestateservices.com/"}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton url={"https://keyestateservices.com/"}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <LinkedinShareButton url={"https://keyestateservices.com/"}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <TelegramShareButton url={"https://keyestateservices.com/"}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
};

export default SharePop;
