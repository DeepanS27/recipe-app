import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import recipes from './assets/recipes.json';
import Navbar from './Navbar';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';

class RecipeApp extends Component {

  constructor(props) {
    super(props);
    this.state = { recipes, showForm: false };
  }

  handleSave = (recipe) => {
    this.setState((prevState, props) => {
      const recipes = [recipe, ...prevState.recipes];
      return {
        recipes,
        showForm: false
      };
    });
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <Navbar newRecipe={() => this.setState({ showForm: true })} />
        { showForm ?
          <RecipeForm
            handleSave={this.handleSave}
            onClose={() => this.setState({ showForm: false })}
            />
          : null }
        <RecipeList {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<RecipeApp />, document.getElementById('root'));
