// Alert/Alert.jsx
import Menu from '../icons/Money';
import Risk from '../icons/Risk';
import Shares from '../icons/Shares';
import Ticker from '../icons/Ticker';
import './alert.css'
import PropTypes from 'prop-types';

const Alert = ({ stock }) => { 
  return (
    <div className="alert">
      <div className='alertItem'><Ticker/> {stock.ticker}</div>
      <div className="bord"></div>
      <div className='alertItem'><Shares/> {stock.shares}</div>
      <div className="bord"></div>
      <div className='alertItem'>
        <Menu/> 
        <span style={{ color: stock.change < 0 ? 'red' : 'green' }}>
          {stock.change}
        </span>
      </div>
      <div className="bord"></div>
      <div className='alertItem'><Risk/> {stock.riskLevel}</div>
    </div>
  )
}

Alert.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string,
    shares: PropTypes.number,
    change: PropTypes.number,
    riskLevel: PropTypes.string
  }).isRequired
};

export default Alert;
