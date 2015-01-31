// This is a common mistake we can get ourseleves into. The component you are trying to include is a javascript object.
// So don't specify it as a string.

var cardStack1Specification = {
    displayName : "CardStack",
    render: function(){
        console.log('Inside Card Stack', this.props.data);

        var node = React.createElement('div', {className : "CardStack"},
                   React.createElement('Card', this.props.data[0]));
        return node;
    }
};

// Just creating one element in the stack and passing the first piece of information.

var cardStack2Specification = {
    displayName : "CardStack",
    render: function(){
        console.log('Inside Card Stack', this.props.data);

        var node = React.createElement('div', {className : "CardStack"},
            React.createElement(Card, this.props.data[0]));
        return node;
    }
};

// Creating multiple elements.
var cardStack3Specification = {
    displayName : "CardStack",
    render: function(){
        console.log('Inside Card Stack', this.props.data);

        //Create all cards. They can be an array.
        //We can use map here.

        var cards = this.props.data.map(function(cardData){
            return React.createElement(Card, cardData);
        })


        var node = React.DOM.div({className : "CardStack"},
            cards);
        return node;
    }
};

// Organizing multiple elements to have better styling.
var cardStack4Specification = {
    displayName : "CardStack",
    render: function(){
        console.log('Inside Card Stack', this.props.data);

        //Create all cards. They can be an array.
        //We can use map here.

        var cards = this.props.data.map(function(cardData){
            return React.DOM.li({className: 'CardStackItem'}, React.createElement(Card, cardData));
        });

        var cardStack =  React.DOM.ul({className:''}, cards);
        var cardStackContainer = React.DOM.div({className : "CardStackContainer"},
            cardStack);
        return cardStackContainer;
    }
};

var CardStack = React.createClass(cardStack3Specification);