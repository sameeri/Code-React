//Render a h1 on the screen. The h1 tag doesn't have any attributes.
//Render takes a ReactElement and a container to place that in.

React.render(React.createElement('h1', null, 'Hello World!'), document.getElementById('app'));