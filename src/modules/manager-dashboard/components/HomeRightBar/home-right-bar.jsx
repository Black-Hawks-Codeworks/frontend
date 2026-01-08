import React from 'react';
import styles from './home-right-bar.module.css';
import Navbar from '../Navbar/navbar';
import CustomizedDot from '../../customized-dot';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

import { dataTotalRequests, dataActiveTickets, dataTotalResolved, dataCustomerVsLoad, sidebarKpis } from './data';

export default function HomeRightBar() {
  // Returns / Repairs / Active from sidebarKpis
  const returnsKpi = sidebarKpis.find((k) => k.label === 'Returns');
  const repairsKpi = sidebarKpis.find((k) => k.label === 'Repairs');
  const activeKpi = sidebarKpis.find((k) => k.label === 'Active Tickets');

  const pieData = [
    { name: 'Returns', value: returnsKpi?.value ?? 0, color: '#f97316' },
    { name: 'Repairs', value: repairsKpi?.value ?? 0, color: '#22c55e' },
    { name: 'Active', value: activeKpi?.value ?? 0, color: '#2194f3' },
  ];

  const pieColors = pieData.map((d) => d.color);

  // Area chart: Resolution rate %
  const resolutionRateData = dataTotalResolved.map((d) => {
    const total = (d.rt || 0) + (d.rp || 0);
    const rate = total > 0 ? (d.rt / total) * 100 : 0;
    return { ...d, resolutionRate: rate };
  });

  return (
    <div className={styles.mainHomeRightBar}>
      <Navbar />

      {/* first 3 line-charts */}
      <div className={styles.ItemContainer}>
        {/* Total Requests */}
        <div className={styles.ItemContainer1}>
          <div>
            <p className={`${styles.taskProgress} text-color-grey`}>Total Requests</p>
            <p className={`${styles.taskCounter} text-color-primary-shade-4`}>7790</p>
            <p className={`${styles.currentMonth1} text-color-grey header-sm`}>2025</p>
          </div>
          <div>
            <LineChart
              style={{
                width: '100%',
                maxWidth: '700px',
                height: '100%',
                maxHeight: '70vh',
                aspectRatio: 1.618,
              }}
              data={dataTotalRequests}
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis width='auto' />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='rt' stroke='#89939e' activeDot={{ r: 6 }} name='Requests' />
              <Line type='monotone' dataKey='rp' stroke='#82ca9d' name='Resolved' />
            </LineChart>
          </div>
        </div>

        {/* Active Tickets */}
        <div className={styles.ItemContainer1}>
          <div>
            <p className={`${styles.taskProgress2} text-color-grey`}>Active Tickets</p>
            <p className={`${styles.taskCounter2} text-color-primary-shade-4`}>4800</p>
            <p className={`${styles.currentMonth2} text-color-grey header-sm`}>Dec</p>
          </div>
          <div>
            <LineChart
              style={{
                width: '100%',
                maxWidth: '700px',
                height: '100%',
                maxHeight: '70vh',
                aspectRatio: 1.618,
              }}
              data={dataActiveTickets}
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis width='auto' />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='rt' stroke='#2194f3' activeDot={{ r: 6 }} name='Active' />
              <Line type='monotone' dataKey='rp' stroke='#82ca9d' name='Resolved' />
            </LineChart>
          </div>
        </div>

        {/* Total Resolved */}
        <div className={styles.ItemContainer1}>
          <div>
            <p className={`${styles.taskProgress} text-color-grey`}>Total Resolved</p>
            <p className={`${styles.taskCounter3} text-color-primary-shade-4`}>6940</p>
            <p className={`${styles.currentMonth1} text-color-grey header-sm`}>2025</p>
          </div>
          <div>
            <LineChart
              style={{
                width: '100%',
                maxWidth: '700px',
                height: '100%',
                maxHeight: '70vh',
                aspectRatio: 1.618,
              }}
              data={dataTotalResolved}
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis width='auto' />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='rt' stroke='#fbc02d' activeDot={{ r: 6 }} name='Resolved' />
              <Line type='monotone' dataKey='rp' stroke='#82ca9d' name='Repairs' />
            </LineChart>
          </div>
        </div>
      </div>

      {/* big line chart in the middle */}
      <div className={styles.middleTaskChart}>
        <p className={`${styles.TaskCreatedVsCompleted} text-color-grey header-sm`}>
          Customer Satisfaction vs Tickets Load
        </p>
        <div className={styles.chart}>
          <LineChart
            style={{
              width: '100%',
              maxWidth: '1100px',
              maxHeight: '30vh',
              aspectRatio: 1.8,
            }}
            data={dataCustomerVsLoad}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis width='auto' />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='rt' stroke='#82ca9d' dot={<CustomizedDot />} name='Satisfaction' />
            <Line type='monotone' dataKey='rp' stroke='#fbc02d' name='Tickets Load' />
          </LineChart>
        </div>
      </div>

      <div className={styles.bottomSection}>
        {/* 1) Donut Pie: Workload Distribution */}
        <div className={`${styles.bottomCard} ${styles.bottomCardPie}`}>
          <p className={`${styles.bottomTitle} text-color-grey header-sm`}>Workload Distribution</p>
          <p className={styles.bottomSubtitle}>Share of Returns, Repairs & Active Tickets</p>

          <div className={styles.pieRow}>
            <PieChart width={260} height={260}>
              <Tooltip />
              <Pie
                data={pieData}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                innerRadius={70}
                outerRadius={95}
                paddingAngle={4}
                stroke='#ffffff'
                strokeWidth={2}>
                {pieData.map((entry, index) => (
                  <Cell key={entry.name} fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>

            <div className={styles.pieLegend}>
              {pieData.map((item) => (
                <div key={item.name} className={styles.pieLegendItem}>
                  <span className={styles.pieDot} style={{ backgroundColor: item.color }} />
                  <div className={styles.pieLegendText}>
                    <span className={styles.pieLabel}>{item.name}</span>
                    <span className={styles.pieValue}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2) Mini KPI tiles with sparklines*/}
        <div className={`${styles.bottomCard} ${styles.bottomCardKpis}`}>
          <p className={`${styles.bottomTitle} text-color-grey header-sm`}>Trends Snapshot</p>
          <div className={styles.kpiSparkGrid}>
            {/* Requests trend */}
            <div className={styles.kpiSparkCard}>
              <div className={styles.kpiSparkHeader}>
                <span className={styles.kpiSparkLabel}>Requests</span>
                <span className={styles.kpiSparkDelta}>+18%</span>
              </div>
              <div className={styles.kpiSparkValue}>7,790</div>
              <LineChart width={160} height={50} data={dataTotalRequests}>
                <Line type='monotone' dataKey='rt' stroke='#2e7d32' strokeWidth={2} dot={false} />
              </LineChart>
            </div>

            {/* Resolved trend */}
            <div className={styles.kpiSparkCard}>
              <div className={styles.kpiSparkHeader}>
                <span className={styles.kpiSparkLabel}>Resolved</span>
                <span className={styles.kpiSparkDelta}>+9%</span>
              </div>
              <div className={styles.kpiSparkValue}>6,940</div>
              <LineChart width={160} height={50} data={dataTotalResolved}>
                <Line type='monotone' dataKey='rt' stroke='#fbc02d' strokeWidth={2} dot={false} />
              </LineChart>
            </div>

            {/* Active Tickets trend */}
            <div className={styles.kpiSparkCard}>
              <div className={styles.kpiSparkHeader}>
                <span className={styles.kpiSparkLabel}>Active Tickets</span>
                <span className={styles.kpiSparkDeltaNegative}>-3%</span>
              </div>
              <div className={styles.kpiSparkValue}>4,800</div>
              <LineChart width={160} height={50} data={dataActiveTickets}>
                <Line type='monotone' dataKey='rt' stroke='#2194f3' strokeWidth={2} dot={false} />
              </LineChart>
            </div>
          </div>
        </div>

        {/* 3) Heatmap-style Bars: Tickets per period (ActiveTickets) */}
        <div className={`${styles.bottomCard} ${styles.bottomCardBars}`}>
          <p className={`${styles.bottomTitle} text-color-grey header-sm`}>Tickets Intensity (December)</p>
          <p className={styles.bottomSubtitle}>Higher bars indicate busier periods</p>

          <BarChart
            width={380}
            height={220}
            data={dataActiveTickets}
            margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='rt' name='Active Tickets' radius={[6, 6, 0, 0]} fill='#2194f3' />
            <Bar dataKey='rp' name='Resolved' radius={[6, 6, 0, 0]} fill='#66bb69' />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
