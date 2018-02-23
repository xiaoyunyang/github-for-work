# Serverless Webapp

> serverless webapp that works without Internet.

See it [live here](http://xiaoyunyang.github.io/serverless-webapp/apps/query-builder.html)

Constraints
* Needs to run on Internet Explorer 11.
* Need to run without internet

## Built with

* [`React.js`](https://github.com/facebook/react/releases) v15.6.2
* [MaterializeCSS](http://materializecss.com/)@latest
* [jQuery V 2.2.4](https://blog.jquery.com/2016/05/20/jquery-1-12-4-and-2-2-4-released/)
  * Note, jQuery 3.0 and above doesn't work with MaterializeCSS's chip autocompleteOptions.
  * But materialize@next will not require jQuery as a dependency anymore, but it's still in alpha.
* [Font Awesome](https://fontawesome.com/icons?d=gallery)
* [Unsplash](https://unsplash.com/) for the images

* [JSXTransformer has been deprecated](https://reactjs.org/blog/2015/06/12/deprecating-jstransform-and-react-tools.html), but we still need this for our app.

TODOs
* [ ] Set up apps based on [this vanilla html](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html) to take advantage of babel for transpiling ES6.
