import config from '@/constants/config'

import './style.less'

export default function Roadmap () {  
  return (
    <div className="roadmap">
      <div className="title">{config.roadmaps.title}</div>
      <div className="roadmap-list" style={{ paddingTop: 75 }}>
        <div className="arrow-box">
          {config.roadmaps.list.map((_, index) => (
            index ? <div className="arrow" key={index} style={{ transform: `translateY(-${(index - 1) * 40}px)` }}></div> : null
          ))}
        </div>
        <div className="stage-box">
          {config.roadmaps.list.map((item, index) => (
            <div className="stage-column" key={index} style={{ transform: `translateY(-${index * 40}px)` }}>
              <h4>{item.title}</h4>
              {item.content.map((val, i) => <p className={val.done && 'deleted-text'} key={i}>{val.text}</p>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
