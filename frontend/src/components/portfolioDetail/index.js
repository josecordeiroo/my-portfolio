import React from "react";

import { Title, Detail, Stats, Description, DescriptionShort, Technologies, Technology, Info, CardShaddow } from "./styles.js";

import { useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi.js";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const { data } = useApi(`/portfolio/${slug}`);
  const history = useNavigate();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shaddow")) {
      document.body.style.overflow = "auto";
      history("/portfolio");
    }
  };

  return (
    <CardShaddow className="shaddow" onClick={exitDetailHandler}>
      <Detail>
        <Stats>
          <div>
            <Title>{data && data.data.title}</Title>
            <DescriptionShort>
              <p>{data && data.data.description}</p>
            </DescriptionShort>
          </div>

          <Info>
            <h5>Technologies Used</h5>

            <Technologies>
              {data &&
                data.data.technologies.map((tech) => {
                  return (
                    <Technology key={tech.label}>
                      <FontAwesomeIcon
                        icon={[tech.iconType, tech.icon]}
                        size="3x"
                      />
                      {tech.label}
                    </Technology>
                  );
                })}
            </Technologies>
          </Info>
        </Stats>

        <Description>
          <p>{data && data.data.longDescription}</p>
          <p>See more in: <a href={`https://github.com/josecordeiroo/${data && data.data.slug}`} target="_blank" rel="noopener noreferrer">{`github.com/josecordeiroo/${data && data.data.slug}`}</a> </p>
        </Description>

        <img src={data && data.data.imgUrl} alt="illustrative"></img>
      </Detail>
    </CardShaddow>
  );
};

export default PortfolioDetail;
