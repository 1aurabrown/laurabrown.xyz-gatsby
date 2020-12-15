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

  onKeyPress(e, id) {
    if (e.charCode === 13) {
      this.onToggle(id);
    }
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
    const titleRowClass = 'hover:underline text-sm sm:text-base font-compagnon cursor-pointer py-1'
    return (
      <React.Fragment key={project.id}>
        <div
        tabIndex="0"
        role="link"
        onKeyPress={(e) => this.onKeyPress(e, project.id)}
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
        className={titleRowClass + 'text-center'}>
          <div className={this.circleClass(project) + ' circle'}></div>
        </div>


        { project.data.url.url &&
          <div
          className={titleRowClass + 'text-center'}>
            <a href={project.data.url.url} rel="noopener" target="_blank">↗</a>
          </div>
        }

        {this.dottedDivider()}

        { project.data.description.html &&
          <Collapse
          addState={true}
          className={styles.collapsable + " text-sm col-span-4 underline-links"}
          isOpen={this.state.selected === project.id }>
            <div className={ 'max-w-screen-sm pt-4 pb-6 ' }>
              <div className=''>
                {parse(project.data.description.html)}
              </div>
              {project.data.url.url &&
                <div className="mt-2 font-compagnon text-sm" >
                  <a
                  href={project.data.url.url + '#test'}
                  rel="noopener"
                  target="_blank">
                    {project.data.url.url
                      .replace('https://', '')
                      .replace('http://', '')
                    } ↗
                  </a>
                </div>
              }
            </div>
            {this.solidDivider()}
          </Collapse>
        }
      </React.Fragment>
    )
  }

  solidDivider({ className = '' } = {}) {
    return (<hr className={className + " col-span-4"}></hr>)
  }

  dottedDivider({ className = '' } = {}) {
    return (<hr className={styles.dottedBorder + " col-span-4 " + className}></hr>)
  }

  render() {
    const projects = this.props.projects
    if (!projects) return ''
    const labelsClass = 'py-2 text-xs'
    return (
      <div className="pt-12">
        <h2 className="font-compagnon mb-4 text-lg">Selected Projects</h2>
        <div className={styles.projectsGrid}>
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
      </div>
    )
  }
}