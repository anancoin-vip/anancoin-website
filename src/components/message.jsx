import ReactDOM from 'react-dom/client'
import Icon from '@/components/icon'
import { uuid } from '@/utils'

const _ = <span className="alert-success alert-warning alert-error" />
const typeList = ['success', 'error', 'warning']

let containerEl

const destroy = (key) => {
  if (!containerEl) return null
  if (key) {
    containerEl.removeChild(document.getElementById(key))
  }
  if (!key || containerEl.children.length === 0) {
    document.body.removeChild(containerEl)
    containerEl = null
  }
}

const message = {
  destroy
}
typeList.forEach(key => {
  message[key] = (content) => {
    const uid = uuid()
    if (!containerEl) {
      containerEl = document.createElement('div')
      containerEl.setAttribute('class', 'toast toast-top toast-center')
      document.body.appendChild(containerEl)
    }
    
    const elBox = document.createElement('div')
    elBox.setAttribute('id', uid)
    ReactDOM.createRoot(elBox).render(
      <div className={`alert alert-${key}`}>
        <Icon type={key} className="shrink-0 h-1.5 w-1.5" />
        <span>{content}</span>
      </div>
    )
    containerEl.appendChild(elBox)

    setTimeout(() => destroy(uid), 3000)
    return uid
  }
})

export default message