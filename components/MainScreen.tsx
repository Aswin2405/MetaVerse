import React, { useRef, useState } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import TimeAgo from 'timeago-react'

const MINS_DURATION = 15

function MainScreen() {
  const { logout, user, setUserData } = useMoralis()
  const { Moralis } = useMoralis()
  const [message, setMessage] = useState('')
  const { data } = useMoralisQuery('Messages', (query) =>
    query
      .ascending('createdAt')
      .greaterThan(
        'createdAt',
        new Date(Date.now() - 1000 * 60 * MINS_DURATION)
      )
  )
  const ref = useRef<any>()
  const changeName = () => {
    const username = prompt(`Change Name ${user?.getUsername()}`)
    setUserData({ username })
  }
  const sendmsg = (e: any) => {
    e.preventDefault()
    if (!message) return
    const messages = Moralis.Object.extend('Messages')
    const msg = new messages()
    msg.save({
      message: message,
      username: user?.getUsername(),
      ethAddress: user?.get('ethAddress'),
    }),
      [],
      { live: true }
    ref?.current?.scrollIntoView({ behaviour: 'smooth' })
    setMessage('')
  }
  return (
    <div>
      <h1>Hii {user?.getUsername()}</h1>
      <img
        src={`https://avatars.dicebear.com/api/open-peeps/${user?.getUsername()}.svg`}
      />
      <p className="bg-red-800" onClick={changeName}>
        Change Username
      </p>
      {data.map((a) => (
        <>
          <p>{a.get('message')}</p>
          <TimeAgo datetime={a.get('createdAt')} />
        </>
      ))}
      <form>
        <input
          type="text"
          placeholder={`enter new msg ${user?.getUsername()}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" onClick={sendmsg}>
          Send Message
        </button>
      </form>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default MainScreen
