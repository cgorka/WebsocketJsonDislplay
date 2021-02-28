import Box from "./Box";
import React from "react";

export function Boxes(jsonData, theme) {
    return <>
        <div className="container">
            {jsonData.map((item) => (
                <Box key={item[0].id} item={item[0]} theme={theme}></Box>
            ))}
        </div>
        ;
    </>;
}
