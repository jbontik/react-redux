import * as React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ''}
    };
    this.onTitleChange = this.onTitleChange.bind(this); // otherwise 'this' in the handler would reference the caller i.e. <input>
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow = (course, index) => {
    return (<div key={index}>
      {course.title}
    </div>);
  };

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        {this.props.courses.map(this.courseRow)}
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.onTitleChange}/>
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: React.PropTypes.array.isRequired
  , dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courseReducer
  };
}

export default connect(mapStateToProps)(CoursesPage);
