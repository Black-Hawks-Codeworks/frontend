import React, { useState } from 'react';
import styles from './sidebar.module.css';
import { sidebarKpis, events } from './HomeRightBar/data';

export default function Sidebar() {
  const [selectedEventId, setSelectedEventId] = useState(events[0]?.id || null);

  return (
    <aside className={`${styles.mainSidebarContainer} text-color-grey-dark`}>
      {/* TOP KPI SUMMARY */}
      <div className={styles.kpiTopSection}>
        <h3 className={styles.kpiTopTitle}>Service Overview</h3>
        <p className={styles.kpiTopSubtitle}>Live snapshot of returns, repairs and workload.</p>

        <div className={styles.kpiTopGrid}>
          <div className={styles.kpiTopCard}>
            <span className={styles.kpiTopLabel}>Returns</span>
            <span className={styles.kpiTopValue}>{sidebarKpis.find((k) => k.label === 'Returns')?.value ?? 0}</span>
          </div>
          <div className={styles.kpiTopCard}>
            <span className={styles.kpiTopLabel}>Repairs</span>
            <span className={styles.kpiTopValue}>{sidebarKpis.find((k) => k.label === 'Repairs')?.value ?? 0}</span>
          </div>
          <div className={styles.kpiTopCard}>
            <span className={styles.kpiTopLabel}>Active Tickets</span>
            <span className={styles.kpiTopValue}>
              {sidebarKpis.find((k) => k.label === 'Active Tickets')?.value ?? 0}
            </span>
          </div>
        </div>
      </div>

      {/* DETAILED KPIs */}
      <section className={styles.kpiSection}>
        <h4 className={`${styles.kpiTitle} header-sm text-color-grey-dark`}>KPIs</h4>
        <div className={styles.kpiGrid}>
          {sidebarKpis.map((kpi) => (
            <div key={kpi.label} className={styles.kpiCard}>
              <div className={styles.kpiCardHeader}>
                <span className={styles.kpiLabel}>{kpi.label}</span>
                <span
                  className={`${styles.kpiTrend} ${
                    kpi.trend.startsWith('-') ? styles.kpiNegative : styles.kpiPositive
                  }`}>
                  {kpi.trend}
                </span>
              </div>
              <span className={styles.kpiValue} style={{ color: kpi.color }}>
                {kpi.value}
              </span>
              <div className={styles.kpiBarBackground}>
                <div
                  className={styles.kpiBarFill}
                  style={{
                    backgroundColor: kpi.color,
                    width: kpi.label === 'Active Tickets' ? '85%' : kpi.label === 'Repairs' ? '70%' : '55%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULED EVENTS */}
      <section className={styles.mainScheduledContainer}>
        <div className={styles.scheduledHeader}>
          <h4 className={`${styles.scheduledTitle} text-color-grey-dark`}>Scheduled Events</h4>
          <span className={styles.scheduledCount}>{events.length} events</span>
        </div>

        <div className={styles.scheduledList}>
          {events.map((event) => {
            const isActive = event.id === selectedEventId;

            return (
              <button
                key={event.id}
                type='button'
                className={`${styles.eventCard} ${isActive ? styles.eventCardActive : ''}`}
                onClick={() => setSelectedEventId(event.id)}>
                <div className={styles.eventLeft}>
                  <span className={styles.eventDot} style={{ backgroundColor: event.color }} />
                  <div className={styles.eventText}>
                    <p className={styles.eventTitle}>{event.title}</p>
                    <p className={styles.eventTime}>{event.time}</p>
                  </div>
                </div>
                <span className={styles.eventTag}>{event.type}</span>
              </button>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
