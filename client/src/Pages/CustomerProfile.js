import React from 'react';
import axios from 'axios';
import ProfilePic from '../assets/black_woman.jpg';
import '../styles/profile.css';
import Location from '../components/location';
import Header from '../components/heading';

class CustomerProfile extends React.Component {
  state = {
    customer: [],
    loading: false
  };

  componentDidMount() {
    axios.get(`/customer`).then((res) => {
      const customer = res.data.data;
      const loading = true;
      this.setState({ customer, loading});
    });
  }

  render() {
    return (
      <div className="order container">
        {this.state.loading
          ?<div>
          <div className="row">
            <div className=" col-lg-4 col-md-4 col-xs-12">
              <div className="order__profilePic">
                {console.log(this.state.customer.likes)}
                <img
                  src={ProfilePic}
                  alt="profile picture"
                  className="profilepic animate__fadeIn"
                  style={{ animationDuration: '3s' }}
                />
                <div className="profilepic__edit mt-2">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
  
            <div className="col-lg-8 col-md-8 col-xs-12">
              <div className="order_details">
                <h1 className="order_name">{this.state.customer.name}</h1>
                <div className="order__location">
                  <Header header="CONTACT INFORMATION" />
                  <Location title="Phone" details={this.state.customer.phone} />
                  <Location
                    title="Address"
                    details={this.state.customer.address}
                  />
                </div>
  
                <div className="order__about mt-3">
                  <Header header="ABOUT" />
                  <div className="about">{this.state.customer.about}</div>
                </div>
                <div className="order__preference mt-3">
                  <Header header="FOOD PREFERENCE" />
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-xs-6">
                    <div className="order__likes">
                      <div className="title">
                        Likes :{this.state.customer.likes}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-6">
                    <div className="order__dislikes">
                      <div className="title">
                        Dislikes :{this.state.customer.dislikes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            :  <div className="spinner-grow spinner" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
  }
      </div>
    );
  }
}

export default CustomerProfile;
