import React from 'react';

function ErrorPage({ pageName }) {
  return (
    <div>
      <h1>Error Page</h1>
      <p>The page "{pageName}" 404 does not exist.</p>
    </div>
  );
}

export default ErrorPage;