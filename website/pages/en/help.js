/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const translate = require('../../server/translate.js').translate;

class Help extends React.Component {
  render() {
    const supportLinks = [
      {
        title: <translate>Browse Documentation</translate>,
        content: <translate>Learn more about the project by using [the documentation on this site](/docs/overview).</translate>
      },
      {
        title: <translate>Join the Community</translate>,
        content: <translate>To ask any questions about the project or to get help developing your own plugin, drop by [the project Discord server](https://discord.nfive.io/).</translate>
      },
      {
        title: <translate>Report Issues</translate>,
        content: <translate>To report any code problems please open an issue in the project's corresponding [GitHub repository](https://github.com/NFive).</translate>
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

Help.defaultProps = {
  language: 'en',
};

module.exports = Help;
