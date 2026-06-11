import "./ProgressBar.css";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="progress-bar-wrapper">
      <p className="progress-bar-label">Santé de la planète : {percentage}%</p>

      <div className="progress-bar-row">
        <div className="progress-bar-border">
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      <p className="progress-bar-count">
        {current} / {total}
      </p>
    </div>
  );
}
