import './index.css'

const CryptoCurrenciesList = props => {
  const {cryptoItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoItem

  return (
    <li className="cryptoList">
      <div className="logoCard">
        <img src={currencyLogo} alt={currencyName} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="usdEuroValues">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrenciesList
