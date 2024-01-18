import React from 'react'
import StatusCard from '../Components/StatusCard'

const Invoices = () => {

    const data = [
        { title: 'Total Inbounds', value: 1201 },
        { title: 'Total Sales Order', value: 12120 },
        { title: 'Total Invoice', value: 11430 },
        { title: 'Total Products', value: 891 },
        { title: 'Total Suppliers', value: 53 },
        { title: 'Total Users', value: 129 }, 
      ];

  return (
    <div>
        {data.map((item) => (
        <StatusCard key={item.title} title={item.title} value={item.value} />
      ))}
    </div>
  )
}

export default Invoices