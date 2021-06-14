import React, {Component} from 'react'
import axios from 'axios';

class Card extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    // fetching the items of order
    axios.get(`/order`).then(res => {
      this.setState({items: res.data.data});
    })
  }
  render() {
    return (<div className="row animate__fadeIn" style={{
        animationDuration: "3s"
      }}>
      {
        this.state.items.map((item, index) => {
          return (<div className="col-lg-3 col-md-6" key={index}>
            <div className="card__items">
              <div className="card">
                <div className="card-body" style={{
                    margin: "0 20px"
                  }}>
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.category}</h6>
                  <p>Price:
                    <b>{item.currency}
                    </b>{item.price}</p>
                  <p>Tax: {item.tax_pct}%</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          </div>)
        })
      }
    </div>);
  }
}

export default Card;
