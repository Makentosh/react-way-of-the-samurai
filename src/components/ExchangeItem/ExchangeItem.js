import React from 'react';
import './ExchangeItem.scss'

const ExchangeItem = ({base_ccy ,sale, buy, ccy, ...props}) => {
  return (
      <div className="exchange-item">
        <div className="exchange-item__currency">{ccy}</div>
        <div className="exchange-item__base-ccy">{base_ccy}</div>
        <div className="exchange-item__buy">{buy}</div>
        <div className="exchange-item__sale">{sale}</div>
      </div>
  )
};

export default ExchangeItem;
