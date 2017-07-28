import React from 'react';
import EventIndexItem from '../event/event_index_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllEvents();
  }

  render() {
    return(
      <div className='user-profile-container'>
        <div className='ticketed-event-container'>
          <h3 className="ticketed-event-header">Your Ticketed Events</h3>
          {this.props.ticketedEvents.map((event) => (
            <EventIndexItem key={event.id} eventItem={event}/>
            ))
          }
        <br/>
          <h3 className="ticketed-event-header">Your Bookmarked Events</h3>
          {this.props.bookmarkedEvents.map((event) => (<EventIndexItem key={event.id} eventItem={event}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default UserProfile;
