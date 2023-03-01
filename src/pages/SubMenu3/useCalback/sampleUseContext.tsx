import { useCallback, useEffect, useState } from "react";
import { Data } from "./data";

export default function SampleUseCallback() {
  const [data, setData] = useState<Data>()
  const [isAlive, seIsAlive] = useState<boolean>()
  
  const handleSubmit = /*useCallback(*/async () => {
    const data = await fetch('https://reqres.in/api/users?page=2', {});
    const parsedData = await data.json();
    setData(parsedData as unknown as Data);
  }/*, [data]);*/

  const isAliveHandle = () => {
    seIsAlive(!isAlive)
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  // TODO call REST on loading by useEffect 
  // set another state see rendering.
  
  return (
    <div>
      useCallback<br />
      <button onClick={handleSubmit}>submit</button>
      <button onClick={isAliveHandle}>{isAlive ? 'is Alive' : 'not alive'}</button>
      <div>{(new Date()).toString()}</div>
      <div>{JSON.stringify(data)}</div>
    </div>    
  );
}

