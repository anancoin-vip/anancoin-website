import Watermark from '@/components/watermark'
import Icon from '@/components/icon'

import config from '@/constants/config'

import Tokenomics from './components/tokenomics'
import Roadmap from './components/roadmap'
import TerminalJup from './components/terminal-jup'

import './style.less'

export default function Home () {
  return (
    <div className="home-container">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon" />
          <div>
            <div className="logo-name font-main">${config.mintInfo.name}</div>
            <div className="logo-sub-name">{config.mintInfo.slogan}</div>
          </div>
        </div>
        <div className="header-right">
          <a href={config.mintInfo.telegram} target="_blank"><div className="telegram" /></a>
          <a href={config.mintInfo.twitter} target="_blank"><div className="twitter" /></a>
        </div>
        <div className="card-container">
          <div className="token-info">
            <div className="name-symbol">
              <div>
                <div className="info-label">NAME/SYMBOL：</div>
                <div>{config.mintInfo.symbol}</div>
              </div>
              <div>
                <div className="info-label">CHAIN：</div>
                <div>{config.mintInfo.chain}</div>
              </div>
            </div>
            <div>
              <div className="info-label">TOTAL SUPPLY：</div>
              <div>{config.mintInfo.amount}</div>
            </div>
            <div className="name-symbol">
              <div>
                <div className="info-label">TAX：</div>
                <div>{config.mintInfo.tax}</div>
              </div>
              <div>
                <div className="info-label">LP：</div>
                <div>{config.mintInfo.lp}</div>
              </div>
            </div>
            <div>
              <div className="info-label">CONTRACT ADDRESS:</div>
              <div className="mint-address">{config.mintInfo.mint}</div>
            </div>
            <div className="flex-between" style={{ gap: '0.2rem', padding: '.3rem 0' }}>
              <a className="market-btn" href="#jup">Buy $ANAN &gt;</a>
              {
                config.marketLinks.map((item, index) => (
                  <a key={index} className="market-btn" target='_blank' href={item.link}><Icon type={item.icon} /> <span className="market-btn-text">{item.text}</span></a>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="content-container text-white">
      <a id="jup"></a>
        <div className="content-box">
          <TerminalJup />
        </div>
        <div className="content-container-footer" />
      </div>
      <Watermark name={config.mintInfo.symbol}>
        <div className="footer-container text-[#3D3D3D]">
          <Tokenomics />
          <Roadmap />
        </div>
      </Watermark>
      <div className="footer-background"></div>
    </div>
  )
}
