import React from "react";
import vi5ocngL1 from "./91vi5ocng-l-1.png";
import vi5ocngL2 from "./91vi5ocng-l-2.png";
import { Home } from "./Home";
import { HomeIndicator } from "./HomeIndicator";
import { Search } from "./Search";
import { StatusbarIphone } from "./StatusbarIphone";
import { User } from "./User";
import bookmark from "./bookmark.svg";
import empireMovieSiteOppenheimer1 from "./empire-movie-site-oppenheimer-1.png";
import empireMovieSiteOppenheimer2 from "./empire-movie-site-oppenheimer-2.png";
import img270532 from "./img-2705-3-2.png";
import rectangle4 from "./rectangle-4.png";
import "./style.css";
import thePenguinHero1 from "./the-penguin-hero-1.png";

export const IphoneMini = () => {
  return (
    <div className="iphone-mini">
      <div className="div-2">
        <div className="overlap">
          <img className="img-2" alt="Img" src={img270532} />

          <img className="element-l" alt="Element l" src={vi5ocngL2} />

          <img
            className="empire-movie-site"
            alt="Empire movie site"
            src={empireMovieSiteOppenheimer2}
          />

          <HomeIndicator
            className="home-indicator-instance"
            darkMode
            hasHomeIndicator={false}
          />
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />

              <div className="frame">
                <Home hasIcon={false} />
              </div>

              <div className="frame">
                <Home icon="icon-3.svg" />
                <div className="label">Home</div>
              </div>
            </div>

            <img className="bookmark" alt="Bookmark" src={bookmark} />

            <Search className="search-instance" icon="icon-4.svg" />
            <User className="user-instance" icon="icon-5.svg" />
          </div>

          <HomeIndicator
            className="home-indicator-2"
            darkMode
            homeIndicatorClassName="design-component-instance-node"
          />
        </div>

        <div className="overlap-2">
          <img
            className="the-penguin-hero"
            alt="The penguin hero"
            src={thePenguinHero1}
          />

          <div className="the-penguin-hero-2" />

          <div className="the-penguin-hero-3" />

          <div className="the-penguin-hero-4" />

          <StatusbarIphone
            battery="battery-2.png"
            className="statusbar-iphone-13-13-pro"
            darkMode
            iconMobileSignal="mobile-signal-2.svg"
            notch="image.png"
            type="default"
            wifi="wifi-2.svg"
          />
          <div className="text">{""}</div>

          <div className="text-2">{""}</div>

          <div className="text-wrapper-2">Whats New !</div>

          <div className="text-wrapper-3">penguin series</div>

          <div className="div-wrapper">
            <div className="text-wrapper-4">Watch now</div>
          </div>

          <div className="now-streaming">Now Streaming !</div>
        </div>

        <div className="group-2">
          <div className="ellipse" />

          <div className="ellipse-2" />

          <div className="ellipse-3" />
        </div>

        <div className="text-wrapper-5">For You</div>

        <div className="text-wrapper-6">Hot</div>

        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="text-wrapper-7">All</div>
          </div>
        </div>

        <div className="group-3">
          <div className="frame-3">
            <div className="text-wrapper-8">Most view</div>
          </div>
        </div>

        <div className="group-4">
          <div className="frame-4">
            <div className="text-wrapper-9">Poular</div>
          </div>
        </div>

        <div className="group-5">
          <div className="frame-5">
            <div className="text-wrapper-10">Recently viewed</div>
          </div>
        </div>

        <img className="element-viocng-l" alt="Element l" src={vi5ocngL1} />

        <img
          className="empire-movie-site-2"
          alt="Empire movie site"
          src={empireMovieSiteOppenheimer1}
        />

        <img className="rectangle-2" alt="Rectangle" src={rectangle4} />

        <div className="the-penguin-hero-5" />
      </div>
    </div>
  );
};
