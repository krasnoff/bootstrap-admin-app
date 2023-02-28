import { useCallback, useState } from "react";
import { Data } from "./data";

export default function SampleUseCallback() {
  const [data, setData] = useState<Data>()
  
  const handleSubmit = useCallback(() => {
    fetch('https://reqres.in/api/users?page=2', {}).then((data) => {
      setData(data as unknown as Data);
      console.log('useCallback')
    })
    
  }, [data]);
  
  return (
    <div>
      useCallback<br />
      <button onClick={handleSubmit}>submit</button>
    </div>    
  );
}

