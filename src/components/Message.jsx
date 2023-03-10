import React from "react"

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
          src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'"
          alt='spider'
        />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img
          src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'"
          alt='spider'
        />
      </div>
    </div>
  )
}

export default Message
