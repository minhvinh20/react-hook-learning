import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox'
import { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFilterForm from './components/PostFilterForm'
import Clock from './components/Clock'
import QueryString from 'query-string'

function App() {
  const [todolist, setToDoList] = useState( () => [
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    {id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ])
  const [postList,setpostList]  = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
    })
  const [filters,setFilter] = useState({
    _limit : 10,
    _page : 1,
  })
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
  
  useEffect( () => {
    async function fetchPostList(){
      try {
        const paramString = QueryString.stringify(filters)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        console.log(responseJSON)
        const {data,pagination} = responseJSON;
        setPagination(pagination)
        setpostList(data)
      } catch (error) {
        console.log('Fail to fetch data')
      }
    }
    fetchPostList()
  }, [filters])

  

  function handlePageChange(newPage){
    console.log('Page Chage :', newPage)
    setFilter({
      ...filters,
      _page: newPage
    })
  }
  function handleFilterChange(newFilter){
    console.log(newFilter)
    setFilter({
      ...filters,
      _page : 1,
      title_like: newFilter.searchTerm,
    })
  }
  
  const [showClock, setShowClock]= useState(true)
  function handleShowClock()
  {
      setShowClock(!showClock)
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      {showClock && <Clock></Clock>}
      <button type='button' onClick={() => setShowClock(!showClock)}>Show/Hide Clock</button>
      {/* <ToDoList todos={todolist} onToDoClick={handleTodoClick}></ToDoList>
      <ToDoForm onSubmit={handletoDoFormSubmit}></ToDoForm> */}
      <PostFilterForm onSubmit={handleFilterChange}></PostFilterForm>
      <PostList posts={postList}></PostList>
      <Pagination pagination={pagination} onPageChange={handlePageChange}></Pagination>
    </div>
  );
}

export default App;
