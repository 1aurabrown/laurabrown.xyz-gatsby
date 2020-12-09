import React from "react"
import styles from './projects.module.css'
import Collapse from "@kunukn/react-collapse";
import parse from 'html-react-parser';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: null};
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected(id) {
    this.setState(state => ({ selected: state.selected === id ? null : id }));
  }

  onToggle(id) {
    this.setState(state => ({ selected: state.selected === id ? null : id }));
  }

  circleClass(project) {
    if ( project.data.role === "Design") {
      return 'circle--left'
    } else if ( project.data.role === "Development") {
      return 'circle--right'
    } else if ( project.data.role === "Design + Development") {
      return 'circle--full'
    } else {
      return ''
    }
  }


  projectRow(project) {
    const titleRowClass = 'font-compagnon cursor-pointer py-1 md:text-xl'
    return (
      <React.Fragment key={project.id}>
        <div
        onClick={() => this.onToggle(project.id)}
        className={titleRowClass}>
          <h2>{project.data.title}</h2>
        </div>

        <div
        onClick={() => this.onToggle(project.id)}
        className={titleRowClass}>
          {project.data.year}
        </div>

        <div
        onClick={() => this.onToggle(project.id)}
        className={titleRowClass + ' text-center'}>
          <div className={this.circleClass(project) + ' circle'}></div>
        </div>


        <div
        className={titleRowClass + ' text-center'}>
          <a href={project.data.url.url} target="_blank">↗</a>
        </div>

        {this.dottedDivider()}

        { project.data.description.html &&
          <Collapse
          className={styles.collapsable + " text-sm col-span-4"}
          isOpen={this.state.selected === project.id }>
            <div className={ 'max-w-screen-sm pt-4 pb-6'}>
              <div>
                {parse(project.data.description.html)}
              </div>
              <div className="mt-2 font-compagnon text-base" >
                <a href={project.data.url.url} target="_blank">{project.data.url.url.replace('https://', '').replace('http://', '')} ↗</a>
              </div>
            </div>
            {this.solidDivider()}
          </Collapse>
        }
      </React.Fragment>
    )
  }

  solidDivider() {
    return (<hr className="col-span-4"></hr>)
  }

  dottedDivider() {
    return (<hr className={styles.dottedBorder + " col-span-4"}></hr>)
  }

  render() {
    const projects = this.props.projects
    if (!projects) return ''
    const labelsClass = 'py-2 text-xs md:text-sm'
    return (
      <div className={styles.projects}>
        <div className={labelsClass}>Title</div>
        <div className={labelsClass}>Year</div>
        <div className={labelsClass + ' text-center'}>Role</div>
        <div className={labelsClass + ' text-center'}>View</div>
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