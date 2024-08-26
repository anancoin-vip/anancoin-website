import { useEffect } from 'react'

import config from '@/constants/config';

import './style.less'

export default function TerminalJup () {
  useEffect(() => {
    window.Jupiter.init({
      displayMode: 'integrated',
      integratedTargetId: 'integrated-terminal',
      endpoint: localStorage.getItem('cluster') || config.rpc,
      formProps: {
        initialAmount: '1000000',
        fixedInputMint: true,
        fixedOutputMint: true,
        swapMode: 'ExactInOrOut',
        initialInputMint: 'So11111111111111111111111111111111111111112',
        initialOutputMint: config.mintInfo.mint,
      },
      
    });
  }, [])

  return (
    <div className="card integrated-terminal">
      <div className="card-body">
        <div id="integrated-terminal"></div>
      </div>
    </div>
  )
}
