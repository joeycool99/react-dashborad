import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.guvi.in/ide" target="_blank" rel="noopener noreferrer">
          Guvi
        </a>
        <span className="ms-1">&copy; 2021 Copyright.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.guvi.in/ide" target="_blank" rel="noopener noreferrer">
          Guvi react Project
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
