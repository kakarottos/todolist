import React, { Component } from 'react';
import '../../App.css';
import ToDoItem from '../../components/ToDoItem/ToDoItem'
import NewToDoForm from '../../components/NewToDoForm/NewToDoForm'
import styled from 'styled-components'

const Container = styled.div`
background: #2b2e39;
margin: 0 auto;
width: 80%;
max-width:6000px;
padding:14px;
border-radius:14px;
margin-top:14px;
`
const Header = styled.h1`
color:#fff;
text-align: center;
`
const DestroyButton = styled.button`
border-radius:10px;
text-align: center;
background:red;
padding:5px;
color:#fff;
margin-bottom:10px;
`

class ToDoList extends Component
{
  constructor(props){
    super(props)
    console.log('hello from const')
  }

  componentDidMount = () => {
    console.log('mounted')
  }

  componentDidUpdate = ()=>{
    console.log('todolist updateded')
  }

  static defaultProps = 
  {
    tasks:[],
    title: 'My work to this day'
  }

  state= 
  {
    tasks: this.props.tasks,
    draft:''
  }

  updateDraft = event => 
  {
    this.setState({draft: event.target.value})
  }

  addToDo = () => 
  {
    const {tasks,draft}=this.state
    const list = tasks
    list.push({text:draft,done:false})
    this.setState({tasks:list,draft:''})
  }

  removeAll = () => {
    this.setState({tasks:[]})
  }


  render()
  {
    const {title} = this.props
    const {tasks,draft} = this.state

    return(
      <Container>
        <Header>{title}
        <p><DestroyButton onClick={this.removeAll}>Remove all tasks</DestroyButton></p> </Header>
        {tasks.map( task => 
          <ToDoItem text={task.text} done= {task.done}/>)}
          <NewToDoForm 
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft}
          />
      </Container>
    )
  }
}

export default ToDoList