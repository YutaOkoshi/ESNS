import { useState } from 'react'
import { Circle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ChatSection() {
  const [chats, setChats] = useState([
    { id: 1, name: 'Alice Brown', messages: [{ text: 'Hey, how\'s it going?', sender: 'Alice' }], online: true },
    { id: 2, name: 'Bob Johnson', messages: [{ text: 'Did you see the latest update?', sender: 'Bob' }], online: false },
    { id: 3, name: 'Jane Smith', messages: [{ text: 'Let\'s catch up soon!', sender: 'Jane' }], online: true },
  ])

  const [selectedChat, setSelectedChat] = useState(chats[0])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const updatedChats = chats.map(chat => 
        chat.id === selectedChat.id 
          ? { ...chat, messages: [...chat.messages, { text: newMessage, sender: 'You' }] }
          : chat
      )
      setChats(updatedChats)
      setSelectedChat(updatedChats.find(chat => chat.id === selectedChat.id)!)
      setNewMessage('')
    }
  }

  return (
    <section className="bg-secondary text-secondary-foreground rounded-lg p-6 h-[600px] flex">
      <div className="w-1/3 pr-4 border-r overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Chats</h2>
        <div className="space-y-4">
          {chats.map((chat) => (
            <button
              key={chat.id}
              className={`flex items-center space-x-3 w-full text-left p-2 rounded ${selectedChat.id === chat.id ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                {chat.online && (
                  <Circle className="absolute bottom-0 right-0 h-3 w-3 text-green-500 fill-current" />
                )}
              </div>
              <div>
                <h3 className="font-semibold">{chat.name}</h3>
                <p className="text-sm text-gray-600">{chat.messages[chat.messages.length - 1].text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-2/3 pl-4 flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">{selectedChat.name}</h2>
        <div className="flex-grow overflow-y-auto mb-4 space-y-2">
          {selectedChat.messages.map((message, index) => (
            <div key={index} className={`p-2 rounded ${message.sender === 'You' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'} max-w-[70%]`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </section>
  )
}

