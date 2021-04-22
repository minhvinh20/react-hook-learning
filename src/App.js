import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox'
import { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import PostList from './components/PostList';

function App() {
  const [todolist, setToDoList] = useState( () => [
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    {id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ])
  function handleTodoClick(todo){
    // console.log(todo)
    const index = todolist.findIndex(x => x.id === todo.id)
    if (index <0 ) return
    const newToDoList = [...todolist]
    newToDoList.splice(index,1)
    setToDoList(newToDoList)
  }
  function handletoDoFormSubmit(formValue){
    console.log(formValue)
    const newToDo = {
      id: todolist.length +1,
      ...formValue,
    }
    const newToDoList = [...todolist]
    newToDoList.push(newToDo)
    setToDoList(newToDoList)
  }
  const [postList,setpostList]  = useState([])
  useEffect( () => {
    async function fetchPostList(){
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        const {data} = responseJSON;
        setpostList(data)
        
      } catch (error) {
        console.log('Fail to fetch data')
      }
    }
    fetchPostList()
  }, [])
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <ToDoList todos={todolist} onToDoClick={handleTodoClick}></ToDoList>
      <ToDoForm onSubmit={handletoDoFormSubmit}></ToDoForm> */}
      <PostList posts={postList}></PostList>
    </div>
  );
}

export default App;
