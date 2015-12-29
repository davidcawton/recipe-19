import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/recipes/:id', ['recipes', 'ingredients']);
}
