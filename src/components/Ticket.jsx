import React, { useState } from "react";

const Ticket = ({ticketData}) => {
  const [priority, setPriority] = useState(ticketData.priority);

  const getClassName = () => {
    switch (priority) {
      case 1:
        return "h-3 bg-blue-200";
      case 2:
        return "h-3 bg-blue-400";
      case 3:
        return "h-3 bg-blue-600";
      case 4:
        return "h-3 bg-blue-800";
      default:
        return "";
    }
  };

  const priorityHandler = () => {
    setPriority(prev => prev === 4 ? 1 : prev + 1)
  };

  return (
    <div className="h-3/6 w-1/6 bg-gray-200 flex flex-col rounded-b-md shadow-sm">
      <div className={getClassName()} onClick={priorityHandler}></div>
      <div className="flex-1 p-2 overflow-auto">
        <p className="text-sm leading-6 font-mono">
          {ticketData.text}
        </p>
      </div>
    </div>
  );
};

export default Ticket;
