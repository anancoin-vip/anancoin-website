import './style.less'

export default function Loading (props) {
  const { children, loading, className } = props

  if (!children && loading === undefined) return <div className="loading loading-spinner text-success"></div>

  if (!children && loading) return (
    <div className="c-loading-layer flex-center">
      <div className="loading loading-spinner text-success"></div>
    </div>
  )
  if (!children) return null
  return (
    <div className={`c-loading ${className || ''}`}>
      {loading && <div className="c-loading-layer flex-center">
        <div className="loading loading-spinner text-success"></div>
      </div>}
      {children && <div className={`c-loading-container ${loading && 'c-loading-blur'}`}>{children}</div>}
    </div>
  )
}
