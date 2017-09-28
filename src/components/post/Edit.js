//import React, { PropTypes,Component } from 'react'
//import { getPost } from '../action/postAction'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
//import { default as ReactModal } from 'react-modal'
import {formatPost} from '../../helper/format'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getCategories } from '../../action/categoriesAction'
//import { addPost } from '../../action/postsAction'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from '../../action/modalAction'
import * as postsActionCreators from '../../action/postsAction'
import * as categoriesActionCreators from '../../action/categoriesAction'
import uuidv1 from 'uuid/v1'
import toastr from 'toastr'




class Edit extends Component{



  render() {
    
    return(
     <div className="Edit">
        edit
      
      </div>
    )
  }
}

export default Edit




