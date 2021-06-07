import Section from '../UI/Section';

import useHttpFetch from '../../hooks/use-httpFetch';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const firebaseurl = 'PLACEHOLDER';

  const { isLoading, error, sendRequest: sendTaskRequest } = useHttpFetch();

//javascript binding 
  const applyData = (taskText, data) => {    
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {

    /*
    const applyData = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    }*/

    sendTaskRequest({
      url: firebaseurl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: taskText }),
    }, 
    //applyData(taskText)
    applyData.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );

  /*
  useEffect(() => {
    fetchTasks(requestConfig, transformTasks); // 
  }, [fetchTasks]); 
*/
  /*
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch
        (firebaseurl+'tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
*/
};

export default NewTask;
