import styles from './home-right-bar.module.css';
import Navbar from '../Navbar/navbar';
import CustomizedDot from '../../customized-dot';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { data, data2, data3, data4 } from './data';


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
        <div className={styles.chart}>
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
      </div>

      <div></div>
    </div>
  );
}
