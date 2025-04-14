import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return React.cloneElement(children, {
        className: children.props.className + " text-3xl text-[#3d7e30] lg:text-5xl lg:leading-tight font-bold"
    });
};

export default SectionTitle;