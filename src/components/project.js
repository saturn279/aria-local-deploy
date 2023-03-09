import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Title from "./Title";
import { MdOutlineInventory } from "react-icons/md";

const Project = ({ projectpage = [] }) => {
  return (
    <>
      {projectpage.map((projectpage) => {
        const {
          id,
          image,
          heading,
          description,
          inventoryAndAssesment,
          designAndPlan,
          implementation,
          desiredOutcome,
          hpeSolution,
          businessChallenge,
          valueDelivered,
          country,
          industry,
          hpePortfolio,
          list,
        } = projectpage;
        const pathToImage = getImage(image);
        console.log(list);
        const hpeapproach = [
          {
            id: 1,
            icon: <MdOutlineInventory className="service-icon" />,
            text: { designAndPlan },
          },
          {
            id: 2,
            icon: <MdOutlineInventory className="service-icon" />,
            text: { implementation },
          },
        ];
        return (
          <main className="page">
            <div className="project-page">
              <section className="project-hero">
                <GatsbyImage
                  image={pathToImage}
                  className="project-hero-img"
                  alt={heading}
                ></GatsbyImage>
                <article>
                  <h2>{heading}</h2>
                  <p>{description.description}</p>
                  {/* <div className="project-card">
                    <div className="project-card-header">
                      <h4>Project Info</h4>
                    </div>
                    <div className="project-card-infoimg">
                      <img src={countryimg} className="project-card-img"></img>
                    </div>
                    <div className="project-card-info">
                      <h3>Country</h3>
                      <h5>{country}</h5>
                    </div>
                    <div className="project-card-infoimg">
                      <img src={indusimg} className="project-card-img"></img>
                    </div>
                    <div className="project-card-info">
                      <h3>Industry</h3>
                      <h5>{industry}</h5>
                    </div>
                    <div className="project-card-infoimg">
                      <img src={portimg} className="project-card-img"></img>
                    </div>
                    <div className="project-card-info">
                      <h3>HPE Portfolio</h3>
                      <h5>{hpePortfolio}</h5>
                    </div>
                  </div> */}
                  <h3>Country</h3>
                  <h5>{country}</h5>
                  <hr />
                  <h3>Industry</h3>
                  <h5>{industry}</h5>
                  <hr />
                  <h3>HPE Portfolio</h3>
                  <h5>{hpePortfolio}</h5>
                  <hr />
                </article>
              </section>
              <div>
                <h2>Desired Outcome</h2>
                {/* <p>{desiredOutcome.raw.data}</p> */}
                {/* <div>
                  {documentToReactComponents(desiredOutcome.raw, options)}
                </div> */}
                <ol className="my-list-item">
                  {desiredOutcome.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <h2>HPE Solution</h2>
                <ol className="my-list-item">
                  {hpeSolution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <h2>Business Challenge</h2>
                <ol className="my-list-item">
                  {businessChallenge.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <h2>Value Delivered</h2>
                <ol className="my-list-item">
                  {valueDelivered.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <Title title="HPE APPROACH" />
                <div className="underline"></div>
                <div className="section-center services-center"></div>
              </div>
            </div>
          </main>
        );
      })}
    </>
  );
};

export default Project;
