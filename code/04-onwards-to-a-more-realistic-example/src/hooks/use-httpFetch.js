import { useCallback, useState } from 'react';

//requestConfig: url, method='GET'/'POST'
const useHttpFetch = () => {

  //const [tasks, setTasks] = useState([]);

  /* outsourcedLogic */
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // we can detour the dependencies to the function that is executed later!
 
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch( 
          requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
    
      // it is provided by function that uses the hooks
      applyData(data); // or return the data 
      /*
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);*/
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  //return ({data:data, isLoading: isLoading, error: error});
  // pointer to the async function. you can await for it?! 
  return ({isLoading: isLoading, error: error, sendRequest: sendRequest});
  // in modern javascript you can also do... 
  // return {isLoading, error, sendRequest}
}

export default useHttpFetch;
