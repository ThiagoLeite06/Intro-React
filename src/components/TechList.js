import React from "react";

import TechItem from "./TechItem";

class TechList extends React.Component {
  //   Exemplo de default props em classes
  //     static defaultProps = {
  //     tech: ""
  //   };

  state = {
    newTech: "",
    techs: []
  };

  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    const { techs, newTech } = this.state;
    e.preventDefault();
    this.setState({
      techs: [...techs, newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    const { techs } = this.state;
    this.setState({ techs: techs.filter(t => t !== tech) });
  };

  render() {
    const { techs, newTech } = this.state;
    return (
      <>
        <ul>
          {techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={newTech}
          />
          <button type="submit">Go</button>
        </form>
      </>
    );
  }
}

export default TechList;
