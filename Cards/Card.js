//create a component

var cardSpecification = {
    displayName: "Card",
    render: function () {

        console.log('Inside Card', this.props);

        return React.createElement("div", {className: "Card"},
            React.createElement("div", {className: "Header"},
                React.createElement("div", {className: "Author"}, this.props.author),
                React.createElement("div", {className: "CardType"}, this.props.cardType)
            ),
            React.createElement("div", {class: "Body"}, this.props.content)
        )
    }
}

var Card = React.createClass(cardSpecification);