const React = require("react");
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const translate = require('../../server/translate.js').translate;

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <div className="error-message">
              <h1>404</h1>
              <h2><translate desc="404 error message">Page Not Found</translate></h2>
              <a href="/"><translate desc="404 home link">Return to the home page</translate></a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

ErrorPage.title = "Page Not Found"

ErrorPage.defaultProps = {
  language: 'en',
};

module.exports = ErrorPage;
