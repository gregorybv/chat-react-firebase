import React from "react"

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' />
      </div>
      <div className='userChat'>
        <img
          src='https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          alt='/'
        />
        <div className='userChatInfo'>
          <span>Spider</span>
        </div>
      </div>
    </div>
  )
}

export default Search
