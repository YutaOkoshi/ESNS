import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#89A8B2] text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-start">
          <Link href="/" className="text-2xl font-bold mr-6">SNS Logo</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/profile" className="hover:text-gray-200">Profile</Link>
            <Link href="/timeline" className="hover:text-gray-200">Timeline</Link>
            <Link href="/chat" className="hover:text-gray-200">Chat</Link>
            <Link href="/groups" className="hover:text-gray-200">Groups</Link>
            <Link href="/analytics" className="hover:text-gray-200">Analytics</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

