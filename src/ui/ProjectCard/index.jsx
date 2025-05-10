import "./ProjectCard.css"
const ProjectCard = ({ title, category, image, description, stacks, demoLink }) => {
  return (
    <div className="card project__card">
      <div className="project__card-top">
        <div className="picture">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="project__card-bottom">
        <div className="flex project__info">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div>
            <h3 className="title">{title}</h3>
            <p className="text__muted category">{category}</p>
          </div>
        </div>
          <p className="text__muted description">{description}</p>
          {demoLink && (
            <a
              href={demoLink}
              className="demo__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          )}
        <div className="flex__center stacks">
          {stacks.map((stack,index)=>(
            <div className="stack" key={index}>
              <img src={stack.logo} alt=""/>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
};
export default ProjectCard