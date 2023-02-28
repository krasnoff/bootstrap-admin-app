import { useCallback, useState } from "react";
import { Data } from "./data";

export default function SampleUseCallback() {
  const [data, setData] = useState<Data>()
  
  const handleSubmit = useCallback(async () => {
    const data = await fetch('https://reqres.in/api/users?page=2', {});
    setData(data as unknown as Data);
  }, [data]);

  // TODO call REST on loading by useEffect 
  // set another state see rendering.
  
  return (
    <div>
      useCallback<br />
      <button onClick={handleSubmit}>submit</button>
    </div>    
  );
}

