import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const tabBtnClassName = isActive ? 'tab-button active-tab' : 'tab-button'

  const onClickTabItem = () => {
    setActiveTab(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={tabBtnClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
