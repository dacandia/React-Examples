import React from 'react';

// export strict mode by Name instead of default.
// import { Title } instead of Title
export const Title = ({ children }) => (
    <h1 className="title">{children}</h1>
)