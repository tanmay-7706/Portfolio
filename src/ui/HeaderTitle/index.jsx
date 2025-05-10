import "./HeaderTitle.css";
const HeaderTitle = () => {
  return (
    <svg
      width="614"
      height="390"
      viewBox="0 0 614 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header__title"
    >
      <g id="text">
      <text className="header__title" x="50" y="100" fontSize="67" fill="#FFFFFF" fontWeight="500">
        UX/UI Design,
      </text>
      <text className="header__title" x="50" y="180" fontSize="67" fill="#FFFFFF" fontWeight="500">
        Front-End,
      </text>
      <text className="header__title" x="50" y="260" fontSize="67" fill="#FFFFFF" fontWeight="500">
        Web Developer.
      </text>
      </g>

      <g id="cursor">
        <path
          d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
          fill="#373737"
          stroke="white"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default HeaderTitle;
