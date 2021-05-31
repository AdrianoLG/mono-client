interface ProgressBarProps {
  value: number
  positive?: boolean
}

const ProgressBar = ({
  value,
  positive = true,
}: ProgressBarProps) => {
  const progress = {
    width: `${Math.abs(value)}%`,
  }

  return (
    <div className="flex justify-start">
      <div
        className={`w-32 bg-progress-bg grid ${
          positive ? 'justify-items-start' : 'justify-items-end'
        }`}
      >
        <div
          className="bg-progress-value h-4 grid items-center"
          style={progress}
        ></div>
      </div>
      <span className="text-xs mx-2">{value}%</span>
    </div>
  )
}

export default ProgressBar
