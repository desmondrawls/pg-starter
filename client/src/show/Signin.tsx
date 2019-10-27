import React, { useState } from 'react'

export const setOnChange = setter => ({target: {value}}) => setter(value)

export default () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="signin-page-wrapper phm">
      <input className="mbl signin-input" placeholder="User Name" onChange={setOnChange(setUsername)} />
      <input className="mbl signin-input" type="password" placeholder="Password" onChange={setOnChange(setPassword)} />
      <div>hi, {username}</div>
    </div>
  )
}
