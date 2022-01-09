import { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import './MainComponent.css'

const MainComponent = () => {
  const [values, setMessages] = useState([])
  const [value, setValue] = useState('')

  const getAllMessages = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const data = await axios.get('/api/messages/all')
    setMessages(data.data.rows.map((row) => row.data))
  }, [])

  const saveMessage = useCallback(
    async (event) => {
      event.preventDefault()

      await axios.post('/api/messages', {
        value
      })

      setValue('')
    },
    [value]
  )

  useEffect(() => {
    getAllMessages()
  }, [])

  return (
        <div>
            <button onClick={getAllMessages}>Get all messages</button>
            <br />
            <span className="title">Messages</span>
            <div className="messages">
                {values.map((value) => (
                    <div className="message">{value}</div>
                ))}
            </div>
            <form className="form" onSubmit={saveMessage}>
                <label>Enter your message: </label>
                <input
                    value={value}
                    onChange={(event) => {
                      setValue(event.target.value)
                    }}
                />
                <button>Submit</button>
            </form>
        </div>
  )
}

export default MainComponent
