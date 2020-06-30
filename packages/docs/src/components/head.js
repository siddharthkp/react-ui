import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

export const Head = ({title, description}) =>{
    return(
        <Helmet>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@React-ui" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://user-images.githubusercontent.com/1863771/76433547-c0e94e80-63b4-11ea-9cca-c859226e5021.png" />
            <meta name="twitter:image:alt" content="React-ui" />

            {/* facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://user-images.githubusercontent.com/1863771/76433547-c0e94e80-63b4-11ea-9cca-c859226e5021.png" />
            <meta property="og:ttl" content="604800" />
        </Helmet>
    )
}

Head.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
  };