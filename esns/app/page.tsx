import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F0E8] text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/profile" className="bg-[#B3C8CF] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Profile</h2>
            <p>View and edit your profile information</p>
          </Link>
          <Link href="/timeline" className="bg-[#E5E1DA] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Timeline</h2>
            <p>See the latest posts and updates</p>
          </Link>
          <Link href="/chat" className="bg-secondary text-secondary-foreground rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Chat</h2>
            <p>Message your connections</p>
          </Link>
          <Link href="/groups" className="bg-[#B3C8CF] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Community Groups</h2>
            <p>Explore and join community groups</p>
          </Link>
          <Link href="/analytics" className="bg-[#89A8B2] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-white">Analytics</h2>
            <p className="text-gray-100">View your engagement metrics</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

