import React from 'react';

export const themes = {
    dark: {
        addClassLight: false,
        cursorColor: '247, 170, 198',
        color: 'magenta',
        icon: 'fa fa-lightbulb-o',
        modalClassName: 'custom-modal dark hero',
        modalOverlayClassName: 'custom-overlay dark',
        aboutClassName: 'box_inner about',
        modalClassNamePortfolio: 'custom-modal dark',
        modalClassNameBlog: 'custom-modal dark',
    },
    light: {
        addClassLight: true,
        color: 'green',
        cursorColor: '114, 182, 38',
        icon: 'fa fa-moon-o',
        modalClassName: 'custom-modal dark light',
        modalOverlayClassName: 'custom-overlay green',
        aboutClassName: 'box_inner about green',
        modalClassNamePortfolio: 'custom-modal dark green',
        modalClassNameBlog: 'custom-modal',
    },
}

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;