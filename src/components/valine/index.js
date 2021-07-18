import React, { useEffect, createRef } from 'react';
import { useLocation, Switch } from 'react-router-dom';

const Valine = (props) => {
  const location = useLocation();

  const _containerRef = createRef()

  const _checkAvailability = () => {
    return typeof window !== 'undefined' && !!_containerRef.current
  }

  useEffect(() => {
    if (_checkAvailability()) {
      async function makeValine() {
        import('valine').then(val => {
          const RealValine = val.default

          new RealValine({
            ...props,
            el: _containerRef.current,
          })
        })
      }
      makeValine()
    }
    return () => {
      
    }
  }, [location])

  return ( <div ref={_containerRef} />)
};

export default Valine;