import * as React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

interface StaticQueryProps {
  file: {
    childImageSharp: {
      fluid: any;
    };
  };
}

const HeaderImage: React.FC = () => (
  <StaticQuery
    query={graphql`
      query teamworkImage {
        file(relativePath: { eq: "images/teamwork.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => <Img fluid={data.file.childImageSharp.fluid} alt="header image" />}
  />
);

export default HeaderImage;
