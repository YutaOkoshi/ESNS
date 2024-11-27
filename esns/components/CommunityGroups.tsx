import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CommunityGroups() {
  const [groups, setGroups] = useState([
    { id: 1, name: 'Tech Enthusiasts', members: 1200, joined: false },
    { id: 2, name: 'Digital Nomads', members: 850, joined: true },
    { id: 3, name: 'Startup Founders', members: 620, joined: false },
  ])

  const [newGroupName, setNewGroupName] = useState('')

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault()
    if (newGroupName.trim()) {
      setGroups([
        ...groups,
        { id: groups.length + 1, name: newGroupName, members: 1, joined: true }
      ])
      setNewGroupName('')
    }
  }

  const toggleJoinGroup = (id: number) => {
    setGroups(groups.map(group => 
      group.id === id ? { ...group, joined: !group.joined, members: group.joined ? group.members - 1 : group.members + 1 } : group
    ))
  }

  return (
    <section className="bg-[#B3C8CF] rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Community Groups</h2>
      <form onSubmit={handleCreateGroup} className="mb-6 flex space-x-2">
        <Input
          type="text"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          placeholder="New group name"
          className="flex-grow"
        />
        <Button type="submit">Create Group</Button>
      </form>
      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <div>
              <h3 className="font-semibold">{group.name}</h3>
              <span className="text-sm text-gray-600">{group.members} members</span>
            </div>
            <Button
              onClick={() => toggleJoinGroup(group.id)}
              variant={group.joined ? "outline" : "default"}
            >
              {group.joined ? 'Leave' : 'Join'}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

