let _uuid = 1000
export const uuid = () => `uuid-${_uuid++}`

export const omitAddress = (address, num = 4) => address ? `${address.substring(0, num)}...${address.substr(-num)}` : '---'

export const handleClassName = ({ size, outline, type, loading, disabled, prefix = '' }, ...defaultName) => {
  const ret = []
  prefix && (prefix += '-')
  defaultName.length && ret.push(...defaultName)
  size && ret.push(`${prefix}size-${size}`)
  type && ret.push(`${prefix}type-${type}`)
  outline && ret.push(`${prefix}outline`)
  loading && ret.push(`${prefix}loading`)
  disabled && ret.push('disabled')
  return ret.join(' ')
}
