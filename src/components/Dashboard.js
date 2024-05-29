import React, { useContext } from 'react';
import { CounterContext } from '../App';

export default function Dashboard (){
  const { count, increment} = useContext(CounterContext);
    return (
        <div>
          <h2 className='mb-3'>Dashborad Content</h2>
          <button className='btn btn-danger mb-3' onClick={increment}>Count {count} times</button>
        </div>
      );
}
