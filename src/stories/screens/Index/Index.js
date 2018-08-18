import React,{ Component } from "react";
import "bulma/css/bulma.css";
import "./Index.css";
import Select, { Option } from "rc-select";
import "rc-select/assets/index.css";
import { Redirect } from 'react-router';
import GoogleMapReact from "google-map-react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "../../../../node_modules/@material-ui/core";

export interface Props {
  networks: [];
  isLoading: boolean;
}
export interface State {}

const AnyReactComponent = ({ text }) => <div className="mapMarker">{text}</div>;

class Index extends Component<Props, State> {
  state = {
    value: "Seçiniz",
    redirect: false
  };

  onChange = e => {
    let value;
    if (e && e.target) {
      value = e.target.value;
    } else {
      value = e;
    }
    console.log("onChange", value);
    this.setState({
      value,
      redirect: true
    });
    
  };

  onBlur = v => {
    console.log("onBlur", v);
  };

  onFocus = () => {
    console.log("onFocus");
  };

  render() {
    if (this.state.redirect) {
        var link = "/home/"+this.state.value
        return <Redirect push to={link} />;
    }
    if (this.props.isLoading === true) {
      return <div className="loading">Loading...</div>;
    } else {
      var networks = this.props.networks;

      if (networks.length > 0) {
        var limitedNetworks = [];
        for (let index = 0; index < 20; index++) {
        var cardLink = "/home/"+networks[index].id
          limitedNetworks.push(
            <Grid item xs={12} sm={12} md={6}>
            <div key={index} className="carddiv">
              <Card className="card">
                <div style={{ height: "200px", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyAWd4j9-qDo3AkdXtl_8PqeLFckILRYk1I"
                    }}
                    defaultCenter={{
                      lat: networks[index].location.latitude,
                      lng: networks[index].location.longitude
                    }}
                    defaultZoom={13}
                  >
                    <AnyReactComponent
                      lat={networks[index].location.latitude}
                      lng={networks[index].location.longitude}
                      text={networks[index].location.city}
                    />
                  </GoogleMapReact>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h3">
                  {}
                    <a href={cardLink}>
                      {networks[index].location.city} -{" "}
                      {networks[index].location.country}
                    </a>
                  </Typography>
                  <Typography component="p">
                    {networks[index].name} - {networks[index].company[0]}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            </Grid>
          );
        }
      }
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
          <div className="content">
            <div className="sub-content">
              <h1>Bibisim</h1>
              <p>
                Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit
                soleat phaedrum te duo, eum cu recteque expetendis neglegentur.
                Cu mentitum maiestatis persequeris pro, pri ponderum tractatos
                ei. Id qui nemore latine molestiae, ad mutat oblique
                delicatissimi pro.
              </p>
              <div className="selectdiv">
                <Select
                  id="my-select"
                  value={this.state.value}
                  placeholder="placeholder"
                  dropdownMenuStyle={{ maxHeight: 200 }}
                  style={{ width: 350 }}
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}
                  allowClear
                  optionLabelProp="children"
                  optionFilterProp="text"
                  onChange={this.onChange}
                  firstActiveValue="2"
                  animation="slide-up"
                  backfill
                >
                  {networks.map((network, index) => {
                    return (
                      <Option
                        key={network.id}
                        value={network.id}
                        text={network.location.city}
                      >
                        {network.location.city}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </div>
          </div>
          </Grid>
          <Grid item xs={12}>
          {limitedNetworks}
          </Grid>
          </Grid>
        </div>
      );
    }
  }
}
export default Index;
