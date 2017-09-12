import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../action/categoriesAction'

class Categories extends Component {
  
  componentDidMount() {  
    this.props.getCategories()
  }

  render() {    
    const { categories } = this.props
    const categories = categories.map((item, index) => {
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
          {categories}
        </ul>
      </div>
    )
  }
}

const All = () => {
  return(
    <li key='All'>
      <Link to='/'>All</Link>
    </li>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(getCategories(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)