import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    this.interval = setInterval(() =>
      fetch("https://api.citybik.es/v2/networks/baksi-bisim")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.network
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        ), 10000

    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
      return (
        <div>
          <div className="headerText">Bisim Aktif - Pasif ve Bisiklet Durumu</div>
          <div className="columns is-multiline is-mobile">
            {items.stations.map(item => (
              <div className="column is-one-fifth" key={item.name}>
                <div className="card card-css">
                  <div className="card-image" />
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className={item.extra.status == 'Active' ? "image-active" : "image-passive"}>
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4 yazi">{item.name}</p>
                        <p className="subtitle is-6">Bisim</p>
                      </div>
                    </div>
                    <div className="content">
                      Toplam Bisiklet : {item.extra.slots}<br />
                      Boştaki Bisiklet : {item.empty_slots}
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Home;
