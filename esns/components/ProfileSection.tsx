import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ProfileSection() {
  return (
    <section className="bg-[#B3C8CF] rounded-lg p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <Image
          src="/placeholder.svg"
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full"
        />
        <div>
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-sm text-gray-600">@johndoe</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" id="name" name="name" defaultValue="John Doe" className="mt-1" />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <Input type="text" id="username" name="username" defaultValue="johndoe" className="mt-1" />
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
          <Textarea
            id="bio"
            name="bio"
            rows={4}
            defaultValue="Passionate developer and tech enthusiast. Building the future, one line of code at a time."
            className="mt-1"
          />
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <span>500 Followers</span>
        <span>200 Following</span>
      </div>
      <Button className="w-full">Update Profile</Button>
    </section>
  )
}

