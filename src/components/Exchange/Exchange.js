import React, {PureComponent} from 'react';
import './Exchange.scss';
import ExchangeItem from './ExchangeItem';



class Exchange extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cash: [],
      cashId: 5
    }
  }

  componentDidMount() {
    this.fetchExchange(this.state.cashId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.cashId !== this.state.cashId) {
      this.fetchExchange(this.state.cashId);
    }
  }

  fetchExchange = (chasId) => {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=${chasId}`)
        .then(results => {
          return results.json()
        })
        .then(data => {
          this.setState({
            cash: data
          })
        })
  };

  handleExchange = () => {
    this.setState({
      cashId: 11
    });

    if (this.state.cashId === 11) {
      this.setState({
        cashId: 5
      });
    }


  };

  render() {
    let { cash, cashId} = this.state;

    return (
      <div className="exchange">
        <div className="exchange__cash">
          <button className="exchange__btn"
              onClick={this.handleExchange}>
            {cashId === 5 ? 'Наличный' : 'Безналичный'}
          </button>
          {cash.map(valuta => <ExchangeItem key={valuta.ccy} {...valuta}/>)}
        </div>
      </div>
    )
  }
}

export default Exchange;
