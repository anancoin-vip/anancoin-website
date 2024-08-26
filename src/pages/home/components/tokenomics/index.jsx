import ProgressRing from '@/components/progress-ring'

import config from '@/constants/config'
import { omitAddress } from '@/utils'

import './style.less'

export default function Tokenomics () {
  return (
    <div className="tokenomics">
      <div className="title">{config.tokenomics.title}</div>
      <div className="tokenomics-list">
        {config.tokenomics.list.map((item, index) => (
          <div className="item pointer" key={index} onClick={() => window.open(item.address.link)}>
            <ProgressRing progress={Number(item.percent.replace('%', '')) / 100} />
            <div>
              <div className="item-title">{item.percent} {item.title}</div>
              <div className="item-description">{item.description}</div>
              <div className="tooltip" data-tip={item.address.text}>
                <div className="item-description">{omitAddress(item.address.text, 7)}</div>
              </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}
