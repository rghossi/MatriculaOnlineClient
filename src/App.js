import React, { Component } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideNav />
        <p className="container">
          DASHBOARD

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id malesuada sapien. In sagittis nunc at sodales elementum. Integer erat ante, mattis eget elit vel, rhoncus pretium eros. Aliquam molestie viverra tellus. Phasellus consequat nibh nec neque volutpat, non placerat eros iaculis. Donec mollis aliquam lectus, vitae sodales urna vulputate mattis. Nam porttitor sed nunc at elementum. Sed sit amet dapibus mauris, eu dapibus sem. Nulla et nibh ut lorem finibus placerat eget a dolor. Sed euismod porttitor lacus ac maximus. Integer hendrerit congue nibh ut placerat. Curabitur nec dui porttitor dolor varius malesuada. Ut sodales purus non dui eleifend, eget blandit ipsum tempus. Maecenas id lacus a odio commodo tempor. Donec sed quam non libero dictum imperdiet eu ac ligula.

Curabitur ac nibh elementum, lacinia urna vel, dictum justo. Duis fringilla maximus tellus, eu euismod urna pulvinar ac. Sed mattis mi dignissim facilisis mollis. Nullam pulvinar dapibus condimentum. Nulla mattis nisl ac ex pretium, et mattis risus feugiat. Curabitur efficitur porta dolor, in lobortis purus molestie at. Etiam imperdiet lorem ac gravida dapibus. In sodales semper dolor, vitae rutrum libero. Vivamus eget suscipit erat. Donec non vestibulum dolor. Maecenas eu luctus erat, eget efficitur lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sem est, tincidunt non nisl fermentum, tristique fermentum turpis. Donec ultricies turpis magna, ut rhoncus dui congue in. Aliquam posuere massa sit amet metus scelerisque, a porttitor turpis auctor. Praesent condimentum felis vel urna viverra dictum eget id magna.

Aenean non risus tincidunt, lobortis felis ultrices, venenatis metus. Morbi ligula purus, imperdiet at urna nec, efficitur sodales ante. Nullam id dolor mi. Aenean faucibus nisl mi, vel fermentum libero faucibus vel. Quisque mollis eu ante sed aliquam. Ut egestas eleifend leo congue pharetra. In quis blandit mi.

Sed aliquam dolor turpis, a lobortis sapien fringilla vitae. Nam lacus lectus, convallis in pellentesque vel, porttitor sed metus. Nam egestas eros eu metus congue, ac ultricies nibh gravida. In consectetur nisl ut rhoncus ultricies. Donec felis massa, dapibus pretium elit eu, suscipit hendrerit leo. Nulla nec nisi eget elit tincidunt semper. Pellentesque nisi dolor, gravida ac nibh vitae, faucibus congue mauris. Donec at metus et ligula tincidunt bibendum euismod in turpis. Suspendisse varius scelerisque diam imperdiet congue. Sed eu enim sit amet lectus consectetur commodo. Duis quis nibh sed libero mollis aliquet sed eget massa. Duis magna nisl, fringilla sit amet pharetra vitae, pulvinar et odio. Nunc lacinia et velit et tristique.

Suspendisse nec tellus quis purus pretium blandit. Quisque tristique leo vel rutrum tincidunt. Nulla facilisi. Phasellus facilisis, felis non pretium convallis, velit nunc porta turpis, a pulvinar mauris lorem eget arcu. Pellentesque dui neque, fermentum ut consectetur vel, porttitor at eros. Mauris sodales turpis non aliquam fringilla. Nullam risus mauris, ultrices et orci et, faucibus suscipit ligula. Integer eget lobortis sapien. Vivamus varius volutpat velit sed viverra. Aliquam vitae libero sit amet sapien bibendum tincidunt sed sed erat.

Aliquam pellentesque rutrum elit, at fringilla ante euismod vitae. Vivamus in leo massa. Vivamus est arcu, luctus vitae lacus sit amet, euismod facilisis est. Morbi vitae lobortis massa. Praesent consectetur luctus arcu eu pharetra. Pellentesque laoreet elementum metus eu fringilla. Suspendisse ac nibh cursus, pharetra elit in, fringilla nisi. Aenean laoreet magna sed erat consectetur aliquet. Etiam mollis, augue vel molestie ultrices, ipsum lectus placerat libero, quis suscipit justo enim sed eros. Donec quis diam quam. Curabitur lacus risus, lobortis ut rutrum at, vestibulum et est. Nam interdum justo at mollis ultrices.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
