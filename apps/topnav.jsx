var TopNav = React.createClass({
  componentDidMount: function() {
    $(".bars").sideNav();
  },
  render: function() {
    return (<div>
        <div className="navbar-fixed">
          <nav className=" grey lighten-4">
            <div className="nav-wrapper-white nav-text-links">
              <ul className="left">
                <li>
                  <a href="#" data-activates="slide-out" className="bars"><i className="fa fa-bars"></i></a>
                </li>
              </ul>

            </div>
          </nav>
        </div>
        <ul id="slide-out" className="side-nav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="../assets/images/hustle.png"/>
               </div>
               <img className="circle" src="../assets/images/logo.png"/>
               <div className="row">
                 <div className="col l2 m2">
                   <a href=""><i className="fab fa-github fa-lg"></i></a>
                 </div>
                 <div className="col l2 m2">
                   <a href=""><i className="fab fa-linkedin fa-lg"></i></a>
                 </div>
                 <div className="col l2 m2">
                   <a href=""><i className="fa fa-envelope fa-lg"></i></a>
                 </div>
              </div>
            </div>
          </li>
         <li><a href="#!">Portal</a></li>
         <li><a href="#!">NRWTS</a></li>
         <li><div className="divider"></div></li>
         <li><a className="subheader">Apps</a></li>
         <li><a className="waves-effect" href="/apps/100days.html">100 Days Calculator</a></li>
        <li><a className="waves-effect" href="/apps/url-gen.html">URL Generator</a></li>
       </ul>
     </div>)

  }
});
ReactDOM.render(<TopNav/>, document.getElementById('nav'));
