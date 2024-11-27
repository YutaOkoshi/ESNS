'use client'

import Header from '../../components/Header'
import Timeline from '../../components/Timeline'

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-[#F1F0E8] text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Timeline</h1>
        <Timeline />
      </main>
    </div>
  )
}

