import React from 'react';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: null}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.onTitleChange} />
        <input
          type="submit"
          value="Save"
          onChange={this.onClickSave} />
      </div>
    );
  }
}

export default CoursesPage;
