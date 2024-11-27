import { useState } from 'react'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function Timeline() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Jane Smith', content: 'Just launched my new project! Check it out: link.com', likes: 42, comments: 8, shares: 3 },
    { id: 2, author: 'Bob Johnson', content: 'Excited to attend the tech conference next week! Anyone else going?', likes: 23, comments: 5, shares: 1 },
    { id: 3, author: 'Alice Brown', content: 'New blog post: "10 Tips for Improving Your Coding Skills" - Read it here: link.com', likes: 56, comments: 12, shares: 7 },
  ])

  const [newPost, setNewPost] = useState('')

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPost.trim()) {
      setPosts([
        { id: posts.length + 1, author: 'John Doe', content: newPost, likes: 0, comments: 0, shares: 0 },
        ...posts
      ])
      setNewPost('')
    }
  }

  return (
    <section className="bg-[#E5E1DA] rounded-lg p-6 space-y-6">
      <form onSubmit={handlePostSubmit} className="bg-white rounded-lg p-4 shadow">
        <Textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          rows={3}
          className="mb-2"
        />
        <Button type="submit">Post</Button>
      </form>
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-semibold">{post.author}</h3>
          <p className="mt-2">{post.content}</p>
          <div className="flex items-center space-x-4 mt-4 text-gray-600">
            <button className="flex items-center">
              <Heart className="h-5 w-5 mr-1" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center">
              <Share2 className="h-5 w-5 mr-1" />
              <span>{post.shares}</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

