import React from 'react';

export default function PredictionResult({ result }) {
  if (!result) return null;

  return (
    <div>
      {result.prediction ? (
        <h3>Predicted Score: {result.prediction}</h3>
      ) : (
        <h3>{result.message}</h3>
      )}
    </div>
  );
}
