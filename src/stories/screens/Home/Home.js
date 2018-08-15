import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./Home.css";

import GoogleMapReact from "google-map-react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
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
    if (this.props.isLoading == true) {
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
            {this.props.stations.map((item,index) => (
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
                <Typography component="p">
                <b>Total Bike Slot -> </b>{item.extra.slots}
                <br/>
                <b>Empty Bike Slot -> </b>{item.empty_slots}
                <br/>
                <b>Free Bike Count -> </b>{item.free_bikes}
                </Typography>
              </CardContent>
              <AppBar position="static" style= {styles.margin}>
        <Tabs>
          <Tab
            label={
              <Badge style={styles.padding} color="secondary" badgeContent={4}>
                Item One
              </Badge>
            }
          />
          <Tab label={
              <Badge style={styles.padding} color="secondary" badgeContent={4}>
                Item One
              </Badge>
            } />
          <Tab label={
              <Badge style={styles.padding} color="secondary" badgeContent={4}>
                Item One
              </Badge>
            } />
        </Tabs>
      </AppBar>
            </Card>
          </div>
            ))}
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
