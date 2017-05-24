import React, { Component } from 'react';
import {Link} from "react-router";

class SideNav extends Component {
  logout() {
    localStorage.removeItem('mAluno');
    localStorage.removeItem('sAluno');
  }

  render() {
    return (
      <div className="">
          <div className="navbar-fixed">
            <nav className="navbar-color">
                <div className="nav-wrapper">
                    <ul className="left">                      
                      <li><h1 className="logo-wrapper"><a href="index.html" className="brand-logo darken-1"><img src="images/materialize-logo.png" alt="materialize logo"></a> <span className="logo-text">Materialize</span></h1></li>
                    </ul>
                    <div className="header-search-wrapper hide-on-med-and-down">
                        <i className="mdi-action-search"></i>
                        <input type="text" name="Search" className="header-search-input z-depth-2" placeholder="Explore Materialize"/>
                    </div>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="javascript:void(0);" className="waves-effect waves-block waves-light translation-button"  data-activates="translation-dropdown"><img src="images/flag-icons/United-States.png" alt="USA" /></a>
                        </li>
                        <li><a href="javascript:void(0);" className="waves-effect waves-block waves-light toggle-fullscreen"><i className="mdi-action-settings-overscan"></i></a>
                        </li>
                        <li><a href="javascript:void(0);" className="waves-effect waves-block waves-light notification-button" data-activates="notifications-dropdown"><i className="mdi-social-notifications"><small className="notification-badge">5</small></i>
                        
                        </a>
                        </li>                        
                        <li><a href="#" data-activates="chat-out" className="waves-effect waves-block waves-light chat-collapse"><i className="mdi-communication-chat"></i></a>
                        </li>
                    </ul>
                    //<!-- translation-button -->
                    <ul id="translation-dropdown" className="dropdown-content">
                      <li>
                        <a href="#!"><img src="images/flag-icons/United-States.png" alt="English" />  <span className="language-select">English</span></a>
                      </li>
                      <li>
                        <a href="#!"><img src="images/flag-icons/France.png" alt="French" />  <span className="language-select">French</span></a>
                      </li>
                      <li>
                        <a href="#!"><img src="images/flag-icons/China.png" alt="Chinese" />  <span className="language-select">Chinese</span></a>
                      </li>
                      <li>
                        <a href="#!"><img src="images/flag-icons/Germany.png" alt="German" />  <span className="language-select">German</span></a>
                      </li>
                      
                    </ul>
                    //<!-- notifications-dropdown -->
                    <ul id="notifications-dropdown" className="dropdown-content">
                      <li>
                        <h5>NOTIFICATIONS <span className="new badge">5</span></h5>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#!"><i className="mdi-action-add-shopping-cart"></i> A new order has been placed!</a>
                        <time className="media-meta" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                      </li>
                      <li>
                        <a href="#!"><i className="mdi-action-stars"></i> Completed the task</a>
                        <time className="media-meta" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
                      </li>
                      <li>
                        <a href="#!"><i className="mdi-action-settings"></i> Settings updated</a>
                        <time className="media-meta" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
                      </li>
                      <li>
                        <a href="#!"><i className="mdi-editor-insert-invitation"></i> Director meeting started</a>
                        <time className="media-meta" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
                      </li>
                      <li>
                        <a href="#!"><i className="mdi-action-trending-up"></i> Generate monthly report</a>
                        <time className="media-meta" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
                      </li>
                    </ul>
                </div>
            </nav>

            //<!-- HORIZONTL NAV START-->/
             <nav id="horizontal-nav" className="white hide-on-med-and-down">
                <div className="nav-wrapper">                  
                  <ul id="ul-horizontal-nav" className="left hide-on-med-and-down">
                    <li>
                        <a href="index.html" className="cyan-text">
                            <i className="mdi-action-dashboard"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="app-email.html" className="cyan-text">
                            <i className="mdi-communication-email"></i>
                            <span>Mailbox</span>
                        </a>
                    </li>                    
                    <li>
                        <a className="dropdown-menu cyan-text" href="#!" data-activates="CSSdropdown">
                            <i className="mdi-action-invert-colors"></i>
                            <span>CSS<i className="mdi-navigation-arrow-drop-down right"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-menu cyan-text" href="#!" data-activates="UIElementsdropdown">
                            <i className="mdi-image-palette"></i>
                            <span>UI Elements<i className="mdi-navigation-arrow-drop-down right"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="app-widget.html" className="cyan-text">
                            <i className="mdi-device-now-widgets"></i>
                            <span>Widgets</span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-menu cyan-text" href="#!" data-activates="Tablesdropdown">
                            <i className="mdi-editor-border-all"></i>
                            <span>Tables<i className="mdi-navigation-arrow-drop-down right"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-menu cyan-text" href="#!" data-activates="Formsdropdown">
                            <i className="mdi-editor-insert-comment"></i>
                            <span>Forms<i className="mdi-navigation-arrow-drop-down right"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-menu cyan-text" href="#!" data-activates="Pagesdropdown">
                            <i className="mdi-social-pages"></i>
                            <span>Pages<i className="mdi-navigation-arrow-drop-down right"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-menu cyan-text" href="#!" data-activates="eCommersdropdown">
                            <i className="mdi-action-shopping-cart"></i>
                            <span>eCommers<i className="mdi-navigation-arrow-drop-down right"></i></span>
                        </a>
                    </li>                    
                    <li>
                        <a className="dropdown-menu cyan-text" href="#!" data-activates="Usersdropdown">
                            <i className="mdi-action-account-circle"></i>
                            <span>Users<i className="mdi-navigation-arrow-drop-down right"></i></span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-menu cyan-text" href="#!" data-activates="Chartsdropdown">
                            <i className="mdi-editor-insert-chart"></i>
                            <span>Charts<i className="mdi-navigation-arrow-drop-down right"></i></span>
                        </a>
                    </li>
                    
                  </ul>
                </div>
              </nav>

                //<!-- CSSdropdown -->
                <ul id="CSSdropdown" className="dropdown-content dropdown-horizontal-list">
                  <li><a href="css-typography.html" className="cyan-text">Typography</a></li>
                  <li><a href="css-icons.html" className="cyan-text">Icons</a></li>                  
                  <li><a href="css-shadow.html" className="cyan-text">Shadow</a></li>
                  <li><a href="css-media.html" className="cyan-text">Media</a></li>                  
                  <li><a href="css-sass.html" className="cyan-text">Sass</a></li>
                </ul>

                //<!-- UIElementsdropdown-->
                <ul id="UIElementsdropdown" className="dropdown-content dropdown-horizontal-list">
                  <li><a href="ui-buttons.html" className="cyan-text">Buttons</a></li>
                  <li><a href="ui-badges.html" className="cyan-text">Badges</a></li>                  
                  <li><a href="ui-cards.html" className="cyan-text">Cards</a></li>
                  <li><a href="ui-collections.html" className="cyan-text">Collections</a></li>                  
                  <li><a href="ui-accordions.html" className="cyan-text">Accordian</a></li>
                  <li><a href="ui-navbar.html" className="cyan-text">Navbar</a></li>
                  <li><a href="ui-pagination.html" className="cyan-text">Pagination</a></li>
                  <li><a href="ui-preloader.html" className="cyan-text">Preloader</a></li>
                  <li><a href="ui-modals.html" className="cyan-text">Modals</a></li>
                  <li><a href="ui-media.html" className="cyan-text">Media</a></li>
                  <li><a href="ui-toasts.html" className="cyan-text">Toasts</a></li>
                  <li><a href="ui-tooltip.html" className="cyan-text">Tooltip</a></li>
                </ul>

                //<!-- Tablesdropdown -->
                <ul id="Tablesdropdown" className="dropdown-content dropdown-horizontal-list">
                  <li><a href="table-basic.html" className="cyan-text">Basic Tables</a></li>
                  <li><a href="table-data.html" className="cyan-text">Data Tables</a></li>
                </ul>

                //<!-- Formsdropdown -->
                <ul id="Formsdropdown" className="dropdown-content dropdown-horizontal-list">
                  <li><a href="form-elements.html" className="cyan-text">Form Elements</a></li>
                  <li><a href="form-layouts.html" className="cyan-text">Form Layouts</a></li>
                </ul>

                //<!-- Pagesdropdown -->
                <ul id="Pagesdropdown" className="dropdown-content dropdown-horizontal-list">
                    
                    <li><a href="page-invoice.html" className="cyan-text">Invoice</a></li>
                    <li><a href="page-404.html" className="cyan-text">404</a></li>
                    <li><a href="page-500.html" className="cyan-text">500</a></li>
                    <li><a href="page-blank.html" className="cyan-text">Blank</a></li>
                </ul>

                //<!-- eCommers -->
                <ul id="eCommersdropdown" className="dropdown-content dropdown-horizontal-list">
                    <li><a href="eCommerce-products-page.html"  className="cyan-text">eCommerce Products </a></li>
                    <li><a href="eCommerce-pricing.html"  className="cyan-text">Pricing Page</a></li>
                    <li><a href="eCommerce-invoice.html"  className="cyan-text">Invoice</a></li>
                </ul>

                //<!-- Mediasdropdown -->
                <ul id="Mediasdropdown" className="dropdown-content dropdown-horizontal-list">                    
                    <li><a href="media-gallary-page.html"  className="cyan-text">Gallary Page</a></li>
                    <li><a href="media-hover-effects.html"  className="cyan-text">Image Hover Effects</a></li>
                </ul>

                //<!-- Usersdropdown -->
                <ul id="Usersdropdown" className="dropdown-content dropdown-horizontal-list">
                    <li><a href="user-profile-page.html"  className="cyan-text">User Profile</a></li>
                    <li><a href="user-login.html"  className="cyan-text">Login</a></li>
                    <li><a href="user-register.html" className="cyan-text">Register</a></li>
                    <li><a href="user-forgot-password.html" className="cyan-text">Forgot Password</a></li>                    
                    <li><a href="user-lock-screen.html" className="cyan-text">Lock Screen</a></li>
                    <li><a href="user-sesssion-timeout.html" className="cyan-text">Session Timeout</a></li>
                </ul>

                //<!-- Chartsdropdown -->
                <ul id="Chartsdropdown" className="dropdown-content dropdown-horizontal-list">
                    <li><a href="charts-chartjs.html" className="cyan-text">Chart JS</a></li>
                    <li><a href="charts-chartist.html" className="cyan-text">Chartist</a></li>
                    <li><a href="charts-morris.html" className="cyan-text">Morris Charts</a></li>
                    <li><a href="charts-xcharts.html" className="cyan-text">xCharts</a></li>
                    <li><a href="charts-flotcharts.html" className="cyan-text">Flot Charts</a></li>
                    <li><a href="charts-sparklines.html" className="cyan-text">Sparkline Charts</a></li>
                </ul>
            /*HORIZONTL NAV END-->*/
            
            

        </div>
        
      </div>
    );
  }
}

export default SideNavHorizontal;