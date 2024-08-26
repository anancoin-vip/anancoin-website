import { handleClassName } from '@/utils'

import './style.less'

export default function Tag (props) {
  const { type, outline, children } = props

  return (
    <div className={handleClassName({ type, outline, prefix: 'tag'}, 'tag')}>{children}</div>
  )
}
