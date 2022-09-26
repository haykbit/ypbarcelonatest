import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeSingleService from '../../../components/HomeSingleService/HomeSingleService';

const HomeServices = ({ language }) => {
  const services = [
    {
      image: '1',
      title: language.mision.components[0].title,
      subtitle: 'Networking events',
    },
    { image: '2', title: 'Cursos', subtitle: 'Networking events' },
    { image: '3', title: 'Workshops', subtitle: 'Networking events' },
    { image: '4', title: 'Actividades', subtitle: 'Networking events' },
  ];

  const text = {
    title: language.mision.title,
    text: language.mision.text,
    items: language.mision.items,
  };
  return (
    <>
      <section
        className="services__area-2 mt--120 pt-270 pb-140 p-relative"
        style={{
          background: `url(assets/img/bg/wave-bg-2.png)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="row g-0">
            {services.map((value, id) => {
              return (
                <HomeSingleService
                  key={id}
                  image={value.image}
                  title={value.title}
                  subtitle={value.subtitle}
                />
              );
            })}
          </div>
          <div className="about__area-2 pt-130">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="about__thumb-2 p-relative m-img">
                  <img src="assets/img/about/about-2.png" alt="" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="about__content">
                  <div className="section__title section__title-3 mb-25">
                    <h2>{text.title}</h2>
                  </div>
                  <p>
                  {text.text}
                  </p>
                  <div className="about__list">
                    <ul>
                      {text.items.map((item, key) => {
                        return (
                          <li key={key}>
                            <span>
                              <i>
                                <FaCheck />
                              </i>
                              {item.title}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <Link to="/about" className="z-btn">
                    Descubre más
                    <i>
                      <CgArrowLongRight />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
