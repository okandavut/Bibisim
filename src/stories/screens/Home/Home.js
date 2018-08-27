import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./Home.css";

import GoogleMapReact from "google-map-react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Badge from '@material-ui/core/Badge';
import { Grid } from "../../../../node_modules/@material-ui/core";

export interface Props {
  stations: [];
  isLoading: boolean;
}
export interface State { }

export default class Home extends Component<Props, State> {
  componentWillMount() {
    document.title = "Locations of bike station";
  }
  render() {
    if (this.props.isLoading === true) {
      return <div className="loading">Loading...</div>;
    } else {
      return (
        <div>
          <Grid container spacing={24}>
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
            <Grid item xs={12}>
              {this.props.stations.map((item, index) => {
                return (
                  <Grid key={index} item xs={12} sm={12} md={6}>
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
                            <a href="">
                              {item.name}
                            </a>
                          </Typography>
                        </CardContent>
                        <div className="badgets">
                          <Badge style={styles.padding} className="badge" color="secondary" badgeContent={(item.empty_slots + item.free_bikes)}>
                            Total Bike Slot
                          </Badge>
                          <br />
                          <Badge style={styles.padding} className="badge" color="secondary" badgeContent={item.empty_slots}>
                            Empty Bike Slot
                          </Badge>
                          <br />
                          <Badge style={styles.padding} className="badge" color="secondary" badgeContent={item.free_bikes}>
                            Free Bike Count
                          </Badge>
                        </div>
                      </Card>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
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

