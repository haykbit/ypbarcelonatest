import React from 'react';
import HomeSecondSingleService from '../../../components/HomeSecondSingleService/HomeSecondSingleService';
import { SiKnowledgebase } from 'react-icons/si';
import { BsTools, BsHeart, BsBag } from 'react-icons/bs';

const HomeSecondServices = ({ language }) => {
  const text = {
    title: language.offer.title,
    text: language.offer.text,
    items: [
      { id: 1, text: language.offer.items[0].text },
      { id: 2, text: language.offer.items[1].text  },
      { id: 3, text: language.offer.items[2].text  },
      { id: 4, text: language.offer.items[3].text  },
    ],
  };
  return (
    <>
      <section className="services__area-3 pt-115 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="section-title section__title-3 mb-70">
                <h2>
                  {text.title}
                </h2>
                <p>{text.text}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="services__nav wow fadeInUp" data-wow-delay=".4s">
                <ul className="nav nav-pills " id="services-tab" role="tablist">
                  <li className="nav-item mb-45">
                    <a
                      className="nav-link active"
                      id="share-tab"
                      data-bs-toggle="pill"
                      href="#share"
                      role="tab"
                      aria-controls="share"
                      aria-selected="true"
                    >
                      <i>
                        {' '}
                        <SiKnowledgebase />{' '}
                      </i>
                      {text.items[0].text}
                    </a>
                  </li>
                  <li className="nav-item mb-30">
                    <a
                      className="nav-link"
                      id="customer-tab"
                      data-bs-toggle="pill"
                      href="#customer"
                      role="tab"
                      aria-controls="customer"
                      aria-selected="true"
                    >
                      <i>
                        <BsTools />
                      </i>
                      {text.items[1].text}
                    </a>
                  </li>
                  <li className="nav-item mb-30">
                    <a
                      className="nav-link"
                      id="social-tab"
                      data-bs-toggle="pill"
                      href="#social"
                      role="tab"
                      aria-controls="social"
                      aria-selected="true"
                    >
                      <i>
                        <BsHeart />
                      </i>
                      {text.items[2].text}
                    </a>
                  </li>
                  <li className="nav-item mb-30">
                    <a
                      className="nav-link"
                      id="financial-tab"
                      data-bs-toggle="pill"
                      href="#financial"
                      role="tab"
                      aria-controls="financial"
                      aria-selected="true"
                    >
                      <i>
                        <BsBag />
                      </i>
                      {text.items[3].text}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="services__tab grey-bg-18">
                <div className="tab-content" id="services-content">
                  <div
                    className="tab-pane fade show active"
                    id="share"
                    role="tabpanel"
                    aria-labelledby="share-tab"
                  >
                    <HomeSecondSingleService title={text.items[0].text} image={1} />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="customer"
                    role="tabpanel"
                    aria-labelledby="customer-tab"
                  >
                    <HomeSecondSingleService title={text.items[1].text} image={2} />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="social"
                    role="tabpanel"
                    aria-labelledby="social-tab"
                  >
                    <HomeSecondSingleService title={text.items[2].text} image={3}/>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="financial"
                    role="tabpanel"
                    aria-labelledby="financial-tab"
                  >
                    <HomeSecondSingleService title={text.items[3].text} image={4}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSecondServices;
