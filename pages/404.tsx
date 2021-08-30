// React
import React, { ReactElement, FC } from "react";

const FourOhFour: FC = (): ReactElement => {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <h1 className="text-9xl text-gray-600 font-bold">404</h1>
        <h2 className="text-2xl text-gray-600 font-bold">Not Found</h2>
        <p className="mt-8">
          The resource requested could not be found on this server!
        </p>
      </div>
    </div>
  );
};

export default FourOhFour;
