import Todo from './components/Todo';

function App() {
  /* the imperative - vanilla JS way 
  const para = document.createElement('p');
  para.textContent = 'This is also Visible';
  document.getElementById('root').append(para);
  */
  return (
    <div>
      <h1>My Todos</h1>
      <h2>this is also visible!</h2>
      <Todo text='Learn React' />
    </div>
  );
}

export default App;
