import styles from './home-right-bar.module.css';
import Navbar from '../Navbar/navbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


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

export default function HomeRightBar() {
  return (
    <div className={styles.mainHomeRightBar}>
      <Navbar />

      <div>
        <div className={styles.ItemContainer}>
          <div className={styles.ItemContainer1}>
            <div>
              <p className={styles.taskProgress}>Total Progress</p>
              <p className={styles.taskCounter}>212</p>
              <p className={styles.currentMonth1}>Current Month</p>
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
                <Line type='monotone' dataKey='rt' stroke='#8884d8' activeDot={{ r: 8 }} />
                <Line type='monotone' dataKey='rp' stroke='#82ca9d' />
              </LineChart>
            </div>
          </div>
          <div className={styles.ItemContainer1}>2</div>
          <div className={styles.ItemContainer1}>3</div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
