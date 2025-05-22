import React from "react";
import { Helmet } from 'react-helmet';

export default function HelmetComponent ({title, description}) {
    return (
            <Helmet>
                <title>{title} | Sanchez Lawn Service</title>
                <meta name="description" content={description} />
            </Helmet>
    )
}

