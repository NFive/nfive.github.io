/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const translate = require('../../server/translate.js').translate;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/logo.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('overview')}><translate desc="homepage get started button">Get Started</translate></Button>
            <Button href='https://github.com/NFive'>GitHub</Button>
            <Button href='https://hub.nfive.io/'><translate desc="homepage plugin hub button">Find Plugins</translate></Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align={props.align}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const TryOut = () => (
      <Block>
        {[
          {
            title: <translate desc="homepage block one title">Try It Out</translate>,
            content: <translate desc="homepage block one content">Setup your own FiveM and NFive server in seconds, try it now!</translate>,
            image: `${baseUrl}img/setup.gif`,
            imageAlign: 'left',
          },
        ]}
      </Block>
    );

    const Tech = () => (
      <Block background="dark" align="center">
        {[
          {
            title: <translate desc="homepage block two title">Modern Technologies</translate>,
            content: <translate desc="homepage block two content">NFive is built using modern programming practises and technologies. Harness the power of CI/CD, unit testing, I18N, semantic versioning and more in your code.</translate>,
          },
        ]}
      </Block>
    );

    const Tools = () => (
      <Block>
        {[
          {
            title: <translate desc="homepage block three title">Automated Tools</translate>,
            content: <translate desc="homepage block three content">Getting started building new plugins in seconds with built-in tools and utilities. Scaffold a plugin with one command or automatically generate a database migration; let the tooling does the boilerplate for you.</translate>,
            image: `${baseUrl}img/scaffold.gif`,
            imageAlign: 'right',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block background="light" layout="fourColumn" align="center">
        {[
          {
            image: `${baseUrl}img/cogs.svg`,
            imageAlign: 'top',
            alignCenter: true,
            title: <translate desc="homepage feature one title">Completely Managed</translate>,
            content: <translate desc="homepage feature one content">NFive is 100% written in C# .NET and runs as a single server resource.</translate>,
          },
          {
            image: `${baseUrl}img/plug.svg`,
            imageAlign: 'top',
            title: <translate desc="homepage feature two title">Modular Design</translate>,
            content: <translate desc="homepage feature two content">NFive's plugin system is modular and designed for complex dependencies, with full semantic versioning.</translate>,
          },
          {
            image: `${baseUrl}img/book.svg`,
            imageAlign: 'top',
            title: <translate desc="homepage feature three title">Software Development Kit</translate>,
            content: <translate desc="homepage feature three content">NFive has a full featured SDK which simplices and eases plugin and mod development.</translate>,
          },
          {
            image: `${baseUrl}img/osi.svg`,
            imageAlign: 'top',
            title: <translate desc="homepage feature four title">100% Open Source</translate>,
            content: <translate desc="homepage feature four content"e>Every NFive component is completely public, open source and free.</translate>,
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <TryOut />
          <Tech />
          <Tools />
        </div>
      </div>
    );
  }
}

module.exports = Index;
