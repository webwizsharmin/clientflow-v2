import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const tasksData = [
  { name: "Completed", value: 70 },
  { name: "Pending", value: 30 },
];

export default function TasksChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={tasksData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip />
        <Bar dataKey="value" fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  );
}
