var appNode = document.getElementById('card_example');

var cardStackNode = document.getElementById('card_stack_example');


React.render(
    React.createElement(Card, {author: "Sameeri", cardType: "Question", content: "Why do we use Angular?"}), appNode);


React.render(
    React.createElement(Card, {author: "Caleb", cardType: "Response", content: "Because it is amazing!"}), appNode);


React.renderComponent(React.createElement(CardStack,
    { data: [
                {author: "Benji", cardType: "Question", content: "What testing framework do we use?"},
                {author: "Rupesh", cardType: "Question", content: "For what kind of testing?"},
                {author: "Benji", cardType: "Response", content: "Unit testing"},
                {author: "Rupesh", cardType: "Response", content: "Mocha. We use chai and sinon as helpers."},
                {author: "Sameeri", cardType: "Question", content: "Why don't we use Jasmine? Everyone's using Jasmine."},
                {author: "Ben", cardType: "Response", content: "Mocha is like Jasmine. Except it's newer and better."},
            ]
    }
), cardStackNode);