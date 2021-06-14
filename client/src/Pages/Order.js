import React from 'react';
import axios from 'axios';
import ProfilePic from '../assets/black_woman.jpg';
import '../styles/order.css'
import Header from '../components/heading';
import Card from '../components/Card'

class Order extends React.Component {
  state = {
    customer: [],
    total: [],
    items: [],
    loading: false
  }

  componentDidMount() {

    axios.get(`/customer`).then(res => {
      this.setState({customer: res.data.data, loading: true});
    })

    // fetching the items of order
    axios.get(`/order`).then(res => {
      const items = res.data.data;
      const total = res.data.data.length
      this.setState({items, total, loading: true});
    })
  }

  render() {
    return (<div className="order container">
      {
        this.state.loading
          ? <div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Header header="CUSTOMERS DETAILS"/>
                  <div className="order__customer">
                    <img src={ProfilePic} alt="profile__pic" style={{
                        height: 40,
                        width: 40,
                        borderRadius: "50%",
                        marginRight: 10,
                        animationDuration: "2s"
                      }} className="animate__fadeIn"/>
                    <div className="customer">
                      <div className="customer__name">
                        {this.state.customer.name}
                      </div>
                      <div className="customer__details">
                        <div className="customer__address">
                          {this.state.customer.address}
                        </div>
                        <div className="customer__phone">
                          {this.state.customer.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="res col-lg-6 col-md-6">
                  <Header header="RESTURANT DETAILS"/>
                  <div className="order__resturant">
                    <div className="res__name">
                      Fast Food Station
                    </div>
                    <div className="res__location">
                      <div className="res__street">987 Dhoni Colony</div>
                      <div className="res__city">Bangalore || Karnataka</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order__items mt-4 mb-4">
                <Header header="ITEMS OF ORDER"/>
                <Card/>
              </div>
              <div className="order__summary">
                <Header header="ORDER SUMMARRY"/>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="summary">
                      <div className="summary__item">
                        Items' Total :
                        <span>{this.state.total}
                          items</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="summary">
                      <div className="summary__item">
                        Tax :
                        <span>
                           {this.state.items.reduce((totalTax, tax) => (totalTax + tax.tax_pct), 0)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="summary">
                      <div className="summary__item">
                        Total Bill:
                        <span> INR {this.state.items.reduce((sum, i) => (sum += i.quantity * i.price), 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : <div className="spinner-grow spinner" role="status">
            <span className="visually-hidden"></span>
          </div>
      }
      </div>);
  }
}

export default Order;
