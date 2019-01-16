/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const translate = require('../../server/translate.js').translate;

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
              <translate>Getting Started</translate>
            </a>
            <a href={this.docUrl('nfpm/nfpm', this.props.language)}>
              <translate>Plugin Manager</translate>
            </a>
            <a href={this.docUrl('plugindev/overview', this.props.language)}>
              <translate>SDK Reference</translate>
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('help', this.props.language)}>
              <translate>Getting Help</translate>
            </a>
            <a href="https://discord.nfive.io/"><translate>Project Chat</translate></a>
            <a href="https://discord.nfive.io/"><img alt="Discord NFive chat" src="https://img.shields.io/discord/525451790876016651.svg?style=social&logo=discord&logoColor=black"></img></a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://hub.nfive.io/"><translate>Plugin Hub</translate></a>
            <a href="https://github.com/NFive">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/NFive/nfive/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
