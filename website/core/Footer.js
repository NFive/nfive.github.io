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
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
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
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('overview', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('plugin-manager/plugin-manager', this.props.language)}>
              Plugin Manager
            </a>
            <a href={this.docUrl('sdk/sdk', this.props.language)}>
              SDK Reference
            </a>
          </div>
          <div style={{display: 'none'}}>
            <h5>Community</h5>
            <a href={this.pageUrl('users', this.props.language)}>
              User Showcase
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/nfive"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            <a href="https://discordapp.com/nfive">Project Chat</a>
            <a
              href="https://twitter.com/NFive"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>Projects</h5>
            <a href="https://github.com/NFive/NFive">NFive</a>
            <a href="https://github.com/NFive/nfpm">nfpm</a>
            <a href="https://github.com/NFive/SDK.Core">NFive.SDK.Core</a>
            <a href="https://github.com/NFive/SDK.Client">NFive.SDK.Client</a>
            <a href="https://github.com/NFive/SDK.Server">NFive.SDK.Server</a>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
