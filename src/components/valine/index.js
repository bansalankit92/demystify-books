import isEqual from 'lodash/isEqual'
import merge from 'lodash/merge'
import React from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/** 使用React包装的Valine评论组件 */
export default class Valine extends React.Component {
  _containerRef;
  constructor(props) {
    super(props)
    this._containerRef = React.createRef()
  }
  async componentDidMount() {
    if (this._checkAvailability()) {
      await this._makeValine()
    }
  }
  async componentDidUpdate(prevProps) {
    if (isEqual(this.props, prevProps)) {
      return
    }
    if (this._checkAvailability()) {
      await this._makeValine()
    }
  }
  render() {
    return <div ref={this._containerRef} />
  }

  _checkAvailability() {
    return ExecutionEnvironment.canUseDOM && typeof window !== 'undefined' && !!this._containerRef.current
  }
  async _makeValine() {
    const RealValine = await (await import('valine')).default
    const localOptions = this.props
    const globalOptions = window.valineOptions
    const options = merge({}, globalOptions, localOptions)
    delete options.el
    new RealValine({
      ...options,
      el: this._containerRef.current,
    })
    window.valineOptions
  }
}
