import { useCallback } from 'react'
import Loading from '@/components/loading'
import { handleClassName } from '@/utils'

import './style.less'

export default function Button (props) {
  const { disabled, type, onClick, children, className, size, loading = false, ...rest } = props || {}
  const handleClick = useCallback((event) => {
    disabled || loading || onClick?.(event)
  }, [onClick, disabled, loading])

  return (
    <button {...rest} disabled={disabled} className={handleClassName({ type, size, loading, disabled, prefix: 'button' }, 'button flex-center', className)} onClick={handleClick}>
      <span className="flex-center flex-v">{children}</span>
      <Loading loading={loading} />
    </button>
  )
}
