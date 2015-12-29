import { test } from 'qunit';
import moduleForAcceptance from 'recipe-19/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipe items');

test('A user can see the `recipe-items` for a single `recipe`', function(assert) {
  server.create('recipe', {ingredients: [1, 2, 3, 4, 5, 6]});
  server.create('ingredient', {recipe: 1, quantity: 2, name: 'Chicken Livers', unit: 'pounds'});
  server.createList('ingredient', 5, {recipe: 1});
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('A user should be able to see a list of 6 `recipe-items`', function(assert) {
  server.create('recipe', {ingredients: [1, 2, 3, 4, 5, 6]});
  server.create('ingredient', {recipe: 1, quantity: 2, name: 'Chicken Livers', unit: 'pounds'});
  server.createList('ingredient', 5, {recipe: 1});
  visit('/');

  andThen(function() {
    assert.equal(findWithAssert('.recipe-card-list').length, 6, 'There should be 6 ingredients listed');
    assert.equal(find('.recipe-servings').val(), 8);
  });
});

test('A user should be able to change the serving values', function(assert) {
  server.create('recipe', {ingredients: [1, 2, 3, 4, 5, 6]});
  server.create('ingredient', {recipe: 1, quantity: 2, name: 'Chicken Livers', unit: 'pounds'});
  server.createList('ingredient', 5, {recipe: 1});
  visit('/');

  fillIn('.recipe-serviings', 4);
  click('.change-recipe-btn');

  andThen(function() {
    assert.equal(find('.recipe-serviings'), val(), 4);
  });
});
