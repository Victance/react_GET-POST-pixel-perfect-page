import React from "react";
import { AnchorLink } from "../AnchorLink/AnchorLink"
import './HeroSection.scss'

export const HeroSection = React.memo(() => {
  return (
    <section className="HeroSection">
      <div className="HeroSection__container">
        <h1 className="HeroSection__title">
          Test assignment for front-end developer
        </h1>

        <p className="HeroSection__description">
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>

        <div className="AnchorLinkContainer">
          <AnchorLink href={"#NewUser"}>
            Sign up
          </AnchorLink>
        </div>
      </div>
    </section>
  )}
)