import React from 'react';

export interface UploadProgressProps {
  children: JSX.Element[] | JSX.Element;
  className?: string;
  percent: number;
}

const uploadProgressStyle = {
  alignItems: 'center',
  border: '1px solid #e9ecef',
  borderRadius: '2px',
  display: 'flex',
  flexDirection: 'column' as 'column',
  fontSize: '16px',
  justifyContent: 'center',
  padding: '60px 30px',
};

export const UploadProgress: React.SFC<UploadProgressProps> = ({
  children,
  className,
  percent,
  ...attributes
}) => {
  if (percent < 0 || percent > 100) {
    throw new Error(
      `Percent must be between 0 and 100. You provided ${percent}.`
    );
  }

  return (
    <section
      className={`upload-progress ${className}`}
      style={uploadProgressStyle}
    >
      {children}
      <div className="meter-bar">
        <div
          className="meter-bar-fill"
          style={{
            backgroundColor: '#1A82e2',
            width: `${percent}%`,
          }}
        />
      </div>
    </section>
  );
};

UploadProgress.defaultProps = {};

export default UploadProgress;
