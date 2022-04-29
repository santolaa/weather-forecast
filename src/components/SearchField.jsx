import React from 'react'

const SearchField = ({
  onKeyPress,
  onChange,
  value
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="search-bar"
      placeholder="Search..."
      onKeyPress={onKeyPress}
    />
  )
}

export default SearchField
