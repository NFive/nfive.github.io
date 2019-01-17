/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('overview', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('nfpm/nfpm', this.props.language)}>
              Plugin Manager
            </a>
            <a href={this.docUrl('plugindev/overview', this.props.language)}>
              SDK Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('help', this.props.language)}>
              Getting Help
            </a>
            <a href="https://discord.nfive.io/">Project Chat</a>
            <a href="https://discord.nfive.io/"><img alt="Discord NFive chat" src="https://img.shields.io/discord/525451790876016651.svg?style=social&logo=discord&logoColor=black"></img></a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://hub.nfive.io/">Plugin Hub</a>
            <a href="https://github.com/NFive">GitHub</a>
            <a href="https://github.com/NFive/NFive/stargazers"><img alt="NFive stargazers on GitHub" src="https://img.shields.io/github/stars/NFive/NFive.svg?label=Stars&style=social"></img></a>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
