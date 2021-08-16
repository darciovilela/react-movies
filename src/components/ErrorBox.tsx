import { useState } from 'react';

interface IProps {
  error: Error;
}

export const ErrorBox = (props: IProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="error">
      <h3 onClick={() => setShowDetails(!showDetails)}>
        {props.error.message}
      </h3>
      {showDetails && <pre>{JSON.stringify(props.error, null, 2)}</pre>}
    </div>
  );
};
