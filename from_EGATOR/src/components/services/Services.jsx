import "./services.css";

import { BiCheck } from "react-icons/bi";
import React from "react";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>vitae magnam, exercitationem nobis necessitatibus quia sint</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                iusto voluptas recusandae neque, dolore id doloribus veritatis
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>dicta temporibus tempore maiores laborum rerum.</p>
            </li>
          </ul>
        </article>
        {/* ========================================================================== */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>vitae magnam, exercitationem nobis necessitatibus quia sint</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                iusto voluptas recusandae neque, dolore id doloribus veritatis
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>dicta temporibus tempore maiores laborum rerum.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>dicta temporibus tempore maiores laborum rerum.</p>
            </li>
          </ul>
        </article>
        {/* ============================================================================= */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>vitae magnam, exercitationem nobis necessitatibus quia sint</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                iusto voluptas recusandae neque, dolore id doloribus veritatis
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
