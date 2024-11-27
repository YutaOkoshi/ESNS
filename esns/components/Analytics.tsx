import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const engagementData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 500 },
  { name: 'Thu', value: 280 },
  { name: 'Fri', value: 390 },
  { name: 'Sat', value: 190 },
  { name: 'Sun', value: 490 },
]

const growthData = [
  { name: 'Jan', followers: 4000 },
  { name: 'Feb', followers: 4200 },
  { name: 'Mar', followers: 4500 },
  { name: 'Apr', followers: 4800 },
  { name: 'May', followers: 5200 },
  { name: 'Jun', followers: 5500 },
]

const contentData = [
  { name: 'Posts', value: 400 },
  { name: 'Comments', value: 300 },
  { name: 'Shares', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

export default function Analytics() {
  return (
    <section className="bg-[#89A8B2] rounded-lg p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">Daily Engagement</h2>
        <div className="bg-white p-4 rounded-lg">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">Follower Growth</h2>
        <div className="bg-white p-4 rounded-lg">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="followers" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">Content Distribution</h2>
        <div className="bg-white p-4 rounded-lg">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={contentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {contentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}

