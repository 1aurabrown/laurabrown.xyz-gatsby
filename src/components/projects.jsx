import React from "react"
import { RichText } from "prismic-reactjs"
import styles from './projects.module.css'

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

  projectRow(project) {
    const circleClass = this.circleClass(project)
    return (
      <React.Fragment key={project._meta.id} >
        <tr className={styles.dottedBorder + ' md:text-2xl'} key={project._meta.id} onClick={() => this.toggleSelected(project._meta.id)}>
          <td>{project.title}</td>
          <td>{project.year}</td>
          <td class={styles.role + ' text-center'}>
            <div className={`${styles.circle} ${circleClass}`}></div>
          </td>
        </tr>


        {project.description && this.state.selected === project._meta.id &&(
          <tr key={project._meta.id} class="font-america border-b border-solid">
            <td colspan='3' className='py-4'>{RichText.asText(project.description)}</td>
          </tr>
        )}
      </React.Fragment>
    )
  }

  render() {
    const projects = this.props.projects
    if (!projects) return ''

    return (
      <table className={styles.projects + ' w-full leading-10'}>
        <thead className="font-america">
          <tr className='text-left border-solid border-b'>
            <th>Title</th>
            <th>Year</th>
            <th class={styles.role + ' text-center'}>Role</th>
          </tr>
        </thead>
        <tbody>
          {
            projects.map(({ node }, index) => {
              return (
                this.projectRow(node)
              )
            })
          }
        </tbody>
      </table>
    )
  }
}