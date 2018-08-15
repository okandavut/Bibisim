import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./Home.css";

import GoogleMapReact from "google-map-react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export interface Props {
  stations: [];
  isLoading: boolean;
}
export interface State {}

class Home extends Component<Props, State> {
  render() {
    if (this.props.isLoading === true) {
      return <div className="loading">Loading...</div>;
    } else {
      return (
        <div>
           <video
            className="homeVideo"
            ref={v => {
              this.video = v;
            }}
            src="http://yazilimmuhendisiyiz.biz/300861677.mp4"
            autoPlay
            muted
            loop
          />
          <div className="columns is-multiline is-mobile">
            {this.props.stations.map((item,index) => {
              return(
            <div key={index} className="carddiv">
            <Card className="card">
              <div style={{ height: "200px", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAWd4j9-qDo3AkdXtl_8PqeLFckILRYk1I"
                  }}
                  defaultCenter={{
                    lat: item.latitude,
                    lng: item.longitude
                  }}
                  defaultZoom={15}
                >
                </GoogleMapReact>
              </div>
              <CardContent>
                <Typography gutterBottom variant="headline" component="h3">
                {}
                  <a href="">
                    {item.name}
                  </a>
                </Typography>
              </CardContent>
              <AppBar position="static" style= {styles.margin}>
        <Tabs centered value={2}>
          <Tab selected={true}
            label={
              <Badge style={styles.padding} color="secondary" badgeContent={item.extra.slots}>
                Total Bike Slot
              </Badge>
            }
          />
          <Tab selected={true}
            label={
              <Badge style={styles.padding} color="secondary" badgeContent={item.empty_slots}>
                Empty Bike Slot
              </Badge>
            } />
          <Tab selected={true} label={
              <Badge style={styles.padding} color="secondary" badgeContent={item.free_bikes}>
                Free Bike Count
              </Badge>
            } />
        </Tabs>
      </AppBar>
            </Card>
          </div>
            )
    })}
          </div>
        </div>
      );
    }
  }
}

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

export default Home;
