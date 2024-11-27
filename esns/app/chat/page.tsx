'use client'
import Header from '../../components/Header'
import ChatSection from '../../components/ChatSection'

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-[#F1F0E8] text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Chat</h1>
        <ChatSection />
      </main>
    </div>
  )
}

