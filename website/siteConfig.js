/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "NFive",
  tagline: ".NET plugin platform for FiveM",
  url: "https://nfive.io",
  baseUrl: "/",

  projectName: "nfive.github.io",
  organizationName: "NFive",
  cname: "nfive.io",
  editUrl: "https://github.com/NFive/nfive.github.io/edit/src/docs/",

  headerLinks: [
    { doc: "overview", label: "Documentation" },
    { href: "https://github.com/NFive", label: "GitHub" },
    { search: true },
    { languages: true }
  ],

  headerIcon: "img/logo-light.svg",
  footerIcon: "img/logo-light.svg",
  favicon: "img/favicon.png",

  colors: {
    primaryColor: "#cb3837",
    secondaryColor: "#b11b1b"
  },

  highlight: {
    theme: "default"
  },

  scripts: ["https://buttons.github.io/buttons.js"],
  stylesheets: ["https://use.fontawesome.com/releases/v5.3.1/css/all.css"],

  onPageNav: "separate",
  cleanUrl: true,

  ogImage: "img/logo.svg",
  twitterImage: "img/logo.svg",

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  },

  enableUpdateTime: true
};

module.exports = siteConfig;
