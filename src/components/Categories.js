import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../action/categoriesAction'


const modalStyles = {
  content: {
    width: 350,
    margin: '0px auto',
    height: 220,
    borderRadius: 5,
    background: '#EBEBEB',
    padding: 0,
  },
}


class Categories extends Component {


  
  componentDidMount() {  
    this.props.getCategories()
  }

  render() {    
    const { categories } = this.props
    const list = categories.map((item, index) => {
      return (
        <li key={index}>
          <Link to={`/${item.name}`}>{item.name}</Link>
        </li>
      )
    })
    
    return(
      <div className="Categories">
        <ul className="Categories-List">
          <All />
          {list}
        </ul>
      </div>
    )
  }
}

const All = () => {
  return(
    <li key='All'>
      <Link to='/posts'>All Categories</Link>
    </li>
  )
}

const mapStateToProps = (state) => {
  const{categoriesReducer}=state
  return {
    categories: categoriesReducer.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(getCategories(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)