import { DotSpinner } from "@uiball/loaders";

import React from 'react'

const Loader = (props) => {
    return (
        <DotSpinner
            size={120} speed={1} color={props.color || "green"}
        />
    )
}

export default Loader

