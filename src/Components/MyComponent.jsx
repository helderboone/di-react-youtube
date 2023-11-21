import React from 'react'

import { useDependency } from '../Contexts/DependecyProvider'

const MyComponent = () => {
    const { myService } = useDependency();
    myService.callMe();
    
  return   
  (
    <div>MyComponent</div>
  )
}
export default MyComponent