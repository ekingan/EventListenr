import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { eventItem } = this.props;
    let eventDescription = eventItem.description.slice(0,60) + "...";

    return (
      <div>
        <Link to={`/events/${eventItem.id}`}>
          <div className="event-container">
            <div className="event-container-hover"></div>
            <img src={eventItem.image_url}></img>
            <h4>{eventItem.title}</h4>
            <p>{eventItem.location}</p>
            <p>{eventDescription}</p>
            <br/>
            <div className="bookmark">
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default EventIndexItem;
