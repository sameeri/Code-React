// create a component
// This is incorrect assumptions made about the library.
// How to structure a card? To do this, see createElement spec in the API.
var cardSpecification = {
    displayName: "Card",
    render : function (){

        var card = React.createElement("div", null, "This is a card");

        var header = React.createElement("div", card, this.props.cardType, this.props.creator);
        var body = React.createElement("div", card, this.props.content);

        return card;
    }
}

var Card = React.createClass(cardSpecification);