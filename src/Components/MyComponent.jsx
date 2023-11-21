import React, { useEffect } from 'react'

import { useDependency } from '../Contexts/DependecyProvider'

const MyComponent = () => {
    const { myService, logger } = useDependency();
    myService.callMe()
    
    useEffect(() => {
      logger.log('This is a message from logger');
    }, [logger])


  return   
  (
    <div>MyComponent</div>
  )
}
export default MyComponent