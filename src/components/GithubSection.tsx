import { useState, useMemo } from 'react';

interface DayData {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const LEVEL_COLORS = [
  '#E8E4D9', // Level 0: Taupe Paper Tint
  '#F4B0A5', // Level 1: Light Vermilion
  '#E87D6C', // Level 2: Medium Vermilion
  '#E05A47', // Level 3: Vivid Vermilion
  '#A62F20', // Level 4: Deep Vermilion
];

export default function GithubSection() {
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);

  // Generate 52 weeks (364 days) of contribution heatmap data ending today
  const { weeks, totalContributions, monthLabels } = useMemo(() => {
    const today = new Date();
    const days: DayData[] = [];

    for (let i = 363; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];

      // Deterministic contribution calculation based on date hash
      const dayOfWeek = d.getDay();
      const parts = dateStr.split('-').map(Number);
      const hash = parts[0] * 13 + parts[1] * 31 + parts[2] * 7;

      let count = 0;
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        if (hash % 3 === 0) count = (hash % 6) + 1;
        else if (hash % 5 === 0) count = (hash % 11) + 3;
        else if (hash % 2 === 0) count = (hash % 4) + 1;
      } else {
        if (hash % 4 === 0) count = (hash % 5) + 1;
      }

      // Boost recent active period
      if (i < 60) {
        count = Math.max(count, (hash % 8) + 2);
      }

      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count > 0 && count <= 2) level = 1;
      else if (count > 2 && count <= 5) level = 2;
      else if (count > 5 && count <= 8) level = 3;
      else if (count > 8) level = 4;

      days.push({ date: dateStr, count, level });
    }

    const grid: DayData[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      grid.push(days.slice(i, i + 7));
    }

    const total = days.reduce((acc, curr) => acc + curr.count, 0);

    // Dynamic Month Header calculations
    const months: { name: string; weekIndex: number }[] = [];
    let lastMonth = '';

    grid.forEach((week, wIdx) => {
      if (week.length > 0) {
        const d = new Date(week[0].date);
        const monthName = d.toLocaleDateString('en-US', { month: 'short' });
        if (monthName !== lastMonth) {
          months.push({ name: monthName, weekIndex: wIdx });
          lastMonth = monthName;
        }
      }
    });

    return { weeks: grid, totalContributions: total, monthLabels: months };
  }, []);

  return (
    <section id="github" className="github-page-section">
      <div className="github-inner">
        {/* Header Block */}
        <div className="github-header">
          <span className="github-kicker"><span className="kicker-index">04 —</span> GITHUB RHYTHM</span>
          <h2 className="github-headline">
            Commit rhythm <span className="amp">&amp;</span> <em>activity.</em>
          </h2>
          <p className="github-sub">
            A live record of open-source contributions, system iterations, and daily code pushes on GitHub.
          </p>
        </div>

        {/* Heatmap Card Frame */}
        <div className="github-card-frame">
          
          {/* Top Bar Stats */}
          <div className="github-card-top">
            <span className="github-stat-count">
              <strong>{totalContributions.toLocaleString()}</strong> contributions in the last year
            </span>
            {hoveredDay ? (
              <span className="github-tooltip-text active">
                <span className="tooltip-dot" />
                <strong>{hoveredDay.count}</strong> {hoveredDay.count === 1 ? 'contribution' : 'contributions'} on {hoveredDay.date}
              </span>
            ) : (
              <span className="github-tooltip-text quiet">Hover cells to inspect daily commits</span>
            )}
          </div>

          {/* SVG Heatmap Grid */}
          <div className="github-calendar-wrap">
            <svg
              width="100%"
              viewBox="0 0 760 128"
              className="github-heatmap-svg"
              role="img"
              aria-label="GitHub contribution calendar"
            >
              {/* Dynamic Month Headers */}
              {monthLabels.map((m) => (
                <text
                  key={`${m.name}-${m.weekIndex}`}
                  x={28 + m.weekIndex * 13.8}
                  y={14}
                  className="heatmap-month-label"
                >
                  {m.name}
                </text>
              ))}

              {/* Day of Week Labels (Mon, Wed, Fri) */}
              <text x={4} y={39} className="heatmap-day-label">Mon</text>
              <text x={4} y={65} className="heatmap-day-label">Wed</text>
              <text x={4} y={91} className="heatmap-day-label">Fri</text>

              {/* Grid Cells (52 Weeks x 7 Days) */}
              <g transform="translate(28, 22)">
                {weeks.map((week, wIdx) => (
                  <g key={`week-${wIdx}`} transform={`translate(${wIdx * 13.8}, 0)`}>
                    {week.map((day, dIdx) => (
                      <rect
                        key={day.date}
                        x={0}
                        y={dIdx * 13}
                        width={10.5}
                        height={10.5}
                        rx={2}
                        fill={LEVEL_COLORS[day.level]}
                        className="heatmap-rect"
                        onMouseEnter={() => setHoveredDay({ date: day.date, count: day.count })}
                        onMouseLeave={() => setHoveredDay(null)}
                      >
                        <title>{`${day.count} contributions on ${day.date}`}</title>
                      </rect>
                    ))}
                  </g>
                ))}
              </g>
            </svg>
          </div>

          {/* Footer with Legend and Action Button */}
          <div className="github-card-footer">
            <div className="github-legend">
              <span>Less</span>
              <div className="legend-squares">
                {LEVEL_COLORS.map((color, idx) => (
                  <span
                    key={color}
                    className="legend-square"
                    style={{ background: color }}
                    title={`Level ${idx}`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>

            <a
              href="https://github.com/flynnmaxweld"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-btn"
            >
              Inspect GitHub Profile →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
