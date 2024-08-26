import { useCallback, useState } from 'react'

import Button from '@/components/button'

import './style.less'

const tipModalKey = '__announcementTipModal__'
export default function TipModal () {
  const [hide, setHide] = useState(!!localStorage.getItem(tipModalKey))

  const handleBtn = useCallback(() => {
    setHide(true)
    localStorage.setItem(tipModalKey, '1')
  }, [])

  if (hide) return null

  return (
    <div className="modal tip-modal" open>
      <div className="modal-box text-[#a6adbb]">
        <h3 className="text-center font-bold font-middle">Announcement</h3>
        <div className="mt-1">Dear ANAN Community Members,</div>

        <p className="mt-1">Thank you for your enthusiastic participation in the ANAN token daily check-in activity. This event has brought much joy and interaction to our community.</p>
        <p className="mt-0.5">To better serve you, we have decided to end the ANAN token check-in activity. Please note the following:</p>

        <h4 className="mt-1 font-middle font-bold">Deadline for Claiming Rewards</h4>
        <p className="mt-0.5">Participants have two weeks to claim token rewards from the platform account to their personal wallet. Please complete the claiming process by  <span className="font-bold">August 15, 2024 (UTC)</span> . Unclaimed tokens after this date will be permanently burned.</p>

        <h4 className="mt-1 font-middle font-bold">Claiming Steps</h4>
        <ul className="mt-0.5">
          <li>1. Log in to the website and connect your wallet.</li>
          <li>2. Click the "Send to Wallet" button and complete the process.</li>
        </ul>
        <p className="mt-0.5">Thank you for your support and participation. If you have any questions, please contact us via Telegram.</p>

        <p className="mt-1">Best regards,</p>
        <p className="mt-2 text-right">The ANAN Team</p>
        <div className="mt-2 flex-h-end">
          <Button type="outline" style={{ width: '2rem' }} onClick={handleBtn}>I know</Button>
        </div>
      </div>
    </div>
  )
}
