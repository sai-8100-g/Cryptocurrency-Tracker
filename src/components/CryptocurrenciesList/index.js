import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptoCurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoData: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const jsonObj = await response.json()
    const updatedData = jsonObj.map(eachObj => ({
      currencyName: eachObj.currency_name,
      usdValue: eachObj.usd_value,
      euroValue: eachObj.euro_value,
      id: eachObj.id,
      currencyLogo: eachObj.currency_logo,
    }))

    this.setState({cryptoData: updatedData, isLoader: false})
  }

  render() {
    const {cryptoData, isLoader} = this.state
    return isLoader ? (
      <div data-testid="loader">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div className="cryptoDataCard">
        <h1 className="mainHeading">Cryptocurrency Tracker</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <ul className="cryptoItemsUl">
          <li className="headerList">
            <div className="coinType">
              <h1>Coin Type</h1>
            </div>
            <div className="usdEuro">
              <h1>USD</h1>
              <h1>EURO</h1>
            </div>
          </li>
          {cryptoData.map(eachObj => (
            <CryptoCurrencyItem cryptoItem={eachObj} key={eachObj.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
