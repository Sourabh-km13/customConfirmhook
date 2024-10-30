import FocusTrap from "focus-trap-react";
import React from "react";


function Confirmhook() {
  let resolvePromise, rejectPromise;

  const PromiseComponent = () => {
    
    const handleResolve = () => {
      if (resolvePromise) resolvePromise("Resolved successfully!");
      
    };

    const handleReject = () => {
      if (rejectPromise) rejectPromise("Rejected.");
    };

    return (
      <FocusTrap>
      <div className="w-fit px-8 border-solid border-2 border-blue-300 rounded-lg text-xl bg-blue-300 text-black
       absolute left-[600px] top-[300px]">
        <h2 className="my-2">Select an option:</h2>
        <div className="py-4 flex gap-4">
        <button onClick={handleResolve} className="bg-gray-400">Confirm</button>
        <button onClick={handleReject} className="bg-gray-400" >Deny</button>
        </div>
      </div>
      </FocusTrap>
    );
  };

  const promise = new Promise((resolve, reject) => {
    resolvePromise = resolve;
    rejectPromise = reject;
  });

  return { promise, Component: PromiseComponent };
}

export default Confirmhook;
