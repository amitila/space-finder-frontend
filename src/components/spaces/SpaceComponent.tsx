import { Component } from "react";
import "./SpaceComponent.css";
import amiImg from "../../assets/hcmut.png";

interface SpaceComponentProps {
  spaceId: string;
  name: string;
  location: string;
  photoUrl?: string;
  reserveSpace: (SpaceId: string) => void;
}

export class SpaceComponent extends Component<SpaceComponentProps> {
  private renderImage() {
    if (this.props.photoUrl) {
      return <img src={this.props.photoUrl} alt="img" />;
    } else {
      return <img src={amiImg} alt="ami" />;
    }
  }

  render() {
    return (
      <div className="spaceComponent">
        {this.renderImage()}
        <br />
        <label className="name">{this.props.name}</label>
        <br />
        <label className="spaceId">{this.props.spaceId}</label>
        <br />
        <label className="location">{this.props.location}</label>
        <br />
        <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>
          Reverse
        </button>
      </div>
    );
  }
}
