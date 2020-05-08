import React from "react"
import { RichText } from "prismic-reactjs"
import styles from './projects.module.css'
import Collapse from "@kunukn/react-collapse";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: null};
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected(id) {
    this.setState(state => ({ selected: state.selected === id ? null : id }));
  }

  circleClass(project) {
    if ( project.role === "Design") {
      return styles.circleLeft
    } else if ( project.role === "Development") {
      return styles.circleRight
    } else if ( project.role === "Design + Development") {
      return styles.circleFull
    } else {
      return ''
    }
  }

  onToggle = (id) => {
    this.setState(state => ({ selected: state.selected === id ? null : id }));

  };

  projectRow(project) {
    const circleClass = this.circleClass(project)
    return (
      <React.Fragment key={project._meta.id}>
        <div
        onClick={() => this.onToggle(project._meta.id)}
        className='md:text-2xl'>
          {project.title}
        </div>

        <div
        onClick={() => this.onToggle(project._meta.id)}
        className='md:text-2xl'>
          {project.year}
        </div>

        <div
        onClick={() => this.onToggle(project._meta.id)}
        className='text-center md:text-2xl'>
          <div className={`${styles.circle} ${circleClass}`}></div>
        </div>

        {this.dottedDivider()}

        { project.description &&
          <Collapse
          className={styles.collapsable + " font-america col-start-1 col-end-4"}
          isOpen={this.state.selected === project._meta.id }>
            <div className='py-4'>{RichText.asText(project.description)}</div>
            {this.solidDivider()}
          </Collapse>
        }
      </React.Fragment>
    )
  }

  solidDivider() {
    return (<hr className="col-start-1 col-end-4"></hr>)
  }

  dottedDivider() {
    return (<hr className={styles.dottedBorder + " col-start-1 col-end-4"}></hr>)
  }

  render() {
    const projects = this.props.projects
    if (!projects) return ''

    return (
      <div className={styles.projects + ' leading-10'}>
        <div className='font-america'>Title</div>
        <div className='font-america'>Year</div>
        <div className='text-center font-america'>Role</div>
        { this.solidDivider() }
        {
          projects.map(({ node }, index) => {
            return (
              this.projectRow(node)
            )
          })
        }
      </div>
    )
  }
}