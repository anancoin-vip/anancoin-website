import { useEffect } from 'react'

import AppRouter from '@/router'
import config from '@/constants/config'

export default function App () {
  useEffect(() => {
    document.title = `${config.mintInfo.name}-${config.mintInfo.slogan}`
  }, [])
  return <AppRouter />
}
