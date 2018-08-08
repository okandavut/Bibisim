import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./Home.css";

export interface Props {
  stations: [];
  isLoading: boolean;
}
export interface State {}

class Home extends Component<Props, State> {
  render() {
return (
        <div>
        
       
          <div className="headerText">
            Bisim Aktif - Pasif ve Bisiklet Durumu 
            {/* {(this.props.isLoading) == true?  <span>Loading...</span> : "" } */}
          </div>
          <div className="columns is-multiline is-mobile">
            {this.props.stations.map(item => (
              <div className="column is-one-fifth" key={item.name}>
                <div className="card card-css">
                  <div className="card-image" />
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure
                          className={
                            item.extra.status === "Active"
                              ? "image-active"
                              : "image-passive"
                          }
                        />
                      </div>
                      <div className="media-content">
                        <p className="title is-4 yazi">{item.name}</p>
                        <p className="subtitle is-6">Bisim</p>
                      </div>
                    </div>
                    <div className="content">
                      Toplam Bisiklet : {item.extra.slots}
                      <br />
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


export default Home;
