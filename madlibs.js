
const MadlibForm = ({ onFormSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      adjective: event.target.adjective.value,
      noun: event.target.noun.value,
      verb: event.target.verb.value,
    };
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adjective:
        <input type="text" name="adjective" />
      </label>
      <br />
      <label>
        Noun:
        <input type="text" name="noun" />
      </label>
      <br />
      <label>
        Verb:
        <input type="text" name="verb" />
      </label>
      <br />
      <button type="submit">Generate Madlib</button>
    </form>
  );
};

// MadlibStory component
const MadlibStory = ({ formData }) => {
  const { adjective, noun, verb } = formData;

  const story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb}.`;

  return (
    <div>
      <h2>Madlib Story</h2>
      <p>{story}</p>
    </div>
  );
};

// Madlib component 
class Madlib extends React.Component {
  state = {
    formData: null,
  };

  handleFormSubmit = (formData) => {
    this.setState({ formData });
  };

  render() {
    return (
      <div>
        <h1>React Madlibs</h1>
        <MadlibForm onFormSubmit={this.handleFormSubmit} />
        {this.state.formData && <MadlibStory formData={this.state.formData} />}
      </div>
    );
  }
}

// Render the Madlib component
ReactDOM.render(<Madlib />, document.getElementById('root'));
