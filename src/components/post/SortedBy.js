import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortedAction } from '../../action/sortedAction'

class SortBy extends Component {

  onChangeSort = (e) => {
    this.props.sortedAction(e.target.value)
  }

  render() {
    return(
      <div className="SortBy">
        <select
          onChange={this.onChangeSort}
          name="sort" 
          id="sort">
          <option value="popular">Popular</option>
          <option value="unpopular">UnPopular</option>
          <option value="date">Date</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {sortedReducer}=state
  return {
    sort: sortedReducer.sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortedAction: (value) => dispatch(sortedAction(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)