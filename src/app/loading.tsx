import React from 'react';

const Loading = () => {
  return (
    <div>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-purple-600" />
      </div>
    </div>
  );
};

export default Loading;