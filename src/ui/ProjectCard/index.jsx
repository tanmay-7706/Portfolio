import "./ProjectCard.css";

const ProjectCard = ({ title, category, image, description, stacks, demoLink }) => {
  return (
    <div className="card project__card">
      <div className="project__card-top">
        <div className="picture">
          {demoLink ? (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={title} className="clickable-image" />
            </a>
          ) : (
            <img src={image} alt={title} />
          )}
        </div>
      </div>

      <div className="project__card-bottom">
        <div className="flex project__info">
          <div className="img">
            {demoLink ? (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="clickable-image" />
              </a>
            ) : (
              <img src={image} alt={title} />
            )}
          </div>
          <div>
            <h3 className="title">
              {demoLink ? (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
            <p className="text__muted category">{category}</p>
          </div>
        </div>

        <p className="text__muted description">{description}</p>

        <div className="flex__center stacks">
          {stacks.map((stack, index) => (
            <div className="stack" key={index}>
              <img src={stack.logo} alt={stack.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
