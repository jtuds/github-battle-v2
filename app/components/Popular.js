let React = require('react');

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState(function() {
      return {
        selectedLanguage: language,
      };
    });
    console.log(this.state);
  }

  render() {
    let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className="languages">
        {languages.map(function (language) {
          return (
            <li
              onClick={this.updateLanguage.bind(null, language)}
              key={language}
            >
              {language}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}

module.exports = Popular;


// // map, array as param, is a function, which without {} automatically returns the next line
// array.map(parametersArray => return parameter) /* === */ array.map(params => param);

// array.map(paramsArray => {
//   // do function stuff
// })

// singleparam => {
//   return singleparam;
// }

// (multiparam1, multiparam2) => {
//  return multiparam1, multiparam2;  
// }