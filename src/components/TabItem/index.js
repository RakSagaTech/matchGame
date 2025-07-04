import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const tabBtnClassName = isActive
    ? 'tab-btn active-tab'
    : 'tab-btn inactive-tab'

  const onChangeTab = () => {
    onClickTab(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className={tabBtnClassName} onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
