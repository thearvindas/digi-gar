// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'what',
      link: {
        type: 'doc',
        id: 'what/index',
      },
      items: [
        {
          type: 'doc',
          id: 'what/what-is-a-norman-door',
        }
      ],
    },
    {
      type: 'category',
      label: 'why',
      link: {
        type: 'doc',
        id: 'why/index',
      },
      items: [
        {
          type: 'doc',
          id: 'why/why-is-the-sky-blue',
        }
      ],
    }
  ],
};

export default sidebars;
