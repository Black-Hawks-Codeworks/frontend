import styles from './home-right-bar.module.css';
import Navbar from '../Navbar/navbar';
import CustomizedDot from '../../customized-dot';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data2 = [
  { name: 'Dec 1–10', rt: 3100, rp: 1850 },
  { name: 'Dec 11–20', rt: 2650, rp: 1600 },
  { name: 'Dec 21–31', rt: 2040, rp: 1250 },
];

const data = [
  {
    name: 'Jan',
    rt: 4000,
    rp: 2400,
    amt: 2400,
  },
  {
    name: 'Mar',
    rt: 3000,
    rp: 1398,
    amt: 2210,
  },
  {
    name: 'May',
    rt: 2000,
    rp: 9800,
    amt: 2290,
  },
  {
    name: 'Jul',
    rt: 2780,
    rp: 3908,
    amt: 2000,
  },
  {
    name: 'Aug',
    rt: 1890,
    rp: 4800,
    amt: 2181,
  },
  {
    name: 'Nov',
    rt: 2390,
    rp: 3800,
    amt: 2500,
  },
  {
    name: 'Dec',
    rt: 3490,
    rp: 4300,
    amt: 2100,
  },
];

export const data3 = [
  { name: 'Jan', rt: 360, rp: 260 },
  { name: 'Feb', rt: 320, rp: 240 },
  { name: 'Mar', rt: 310, rp: 230 },
  { name: 'Apr', rt: 300, rp: 220 },
  { name: 'May', rt: 370, rp: 290 },
  { name: 'Jun', rt: 310, rp: 230 },
  { name: 'Jul', rt: 320, rp: 250 },
  { name: 'Aug', rt: 330, rp: 260 },
  { name: 'Sep', rt: 300, rp: 230 },
  { name: 'Oct', rt: 310, rp: 240 },
  { name: 'Nov', rt: 340, rp: 260 },
  { name: 'Dec', rt: 370, rp: 290 },
];

const data4 = [
  {
    name: 'Jan',
    rp: 4000,
    rt: 2400,
    amt: 2400,
  },
  {
    name: 'Mar',
    rp: 3000,
    rt: 1398,
    amt: 2210,
  },
  {
    name: 'May',
    rp: 2000,
    rt: 9800,
    amt: 2290,
  },
  {
    name: 'Jun',
    rp: 2780,
    rt: 3908,
    amt: 2000,
  },
  {
    name: 'Aug',
    rp: 1890,
    rt: 4800,
    amt: 2181,
  },
  {
    name: 'Nov',
    rp: 2390,
    rt: 3800,
    amt: 2500,
  },
  {
    name: 'Dec',
    rp: 3490,
    rt: 4300,
    amt: 2100,
  },
];




export default function HomeRightBar() {
  return (
    <div className={styles.mainHomeRightBar}>
      <Navbar />

      <div>
        <div className={styles.ItemContainer}>
          {/* Total Requests Line Chart (1) */}
          <div className={styles.ItemContainer1}>
            <div>
              <p className={`${styles.taskProgress} text-color-grey `}>Total Requests</p>
              <p className={`${styles.taskCounter}  text-color-primary-shade-4 `}>7790</p>
              <p className={` ${styles.currentMonth1} text-color-grey header-sm `}>2025</p>
            </div>
            <div>
              <LineChart
                style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis width='auto' />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='rt' stroke='#89939e' activeDot={{ r: 8 }} />
                <Line type='monotone' dataKey='rp' stroke='#82ca9d' />
              </LineChart>
            </div>
          </div>

          {/* Active Tickets (2) */}

          <div className={styles.ItemContainer1}>
            <div>
              <p className={`${styles.taskProgress2} text-color-grey `}>Active Tickets</p>
              <p className={`${styles.taskCounter2}  text-color-primary-shade-4 `}>4800</p>
              <p className={` ${styles.currentMonth2} text-color-grey header-sm `}>Dec</p>
            </div>
            <div>
              <LineChart
                style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data2}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis width='auto' />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='rt' stroke='#2194f3' activeDot={{ r: 8 }} />
                <Line type='monotone' dataKey='rp' stroke='#82ca9d' />
              </LineChart>
            </div>
          </div>

          {/* Monthly KPIS*/}
          {/* RESOLVED REPAIRS & REPAIRS */}
          <div className={styles.ItemContainer1}>
            <div>
              <p className={`${styles.taskProgress} text-color-grey `}>Total Resolved</p>
              <p className={`${styles.taskCounter3}  text-color-primary-shade-4 `}>6940</p>
              <p className={` ${styles.currentMonth1} text-color-grey header-sm `}>2025</p>
            </div>
            <div>
              <LineChart
                style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data3}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis width='auto' />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='rt' stroke='#fbc02d' activeDot={{ r: 8 }} />
                <Line type='monotone' dataKey='rp' stroke='#82ca9d' />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.middleTaskChart}>
        <p className={`${styles.TaskCreatedVsCompleted} text-color-grey header-sm`}>
          Customer Satisfaction vs Tickets Load{' '}
        </p>

        <LineChart
          style={{ width: '100%', maxWidth: '1100px', maxHeight: '30vh', aspectRatio: 1.8 }}
          responsive
          data={data4}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis width='auto' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='rt' stroke='#82ca9d' dot={<CustomizedDot />} />
          <Line type='monotone' dataKey='rp' stroke='#fbc02d' />
        </LineChart>
      </div>

      <div></div>
    </div>
  );
}
