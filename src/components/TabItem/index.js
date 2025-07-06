import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const tabBtnClassName = isActive ? 'tab-button active-tab' : 'tab-button'

  const onClickTabItem = () => {
    onChangeActiveTabId(tabId)
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
