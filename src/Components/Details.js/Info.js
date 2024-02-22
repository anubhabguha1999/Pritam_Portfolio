export const Info = (props) => {
  const { darkMode } = props;
  return (
    <div className="home-content">
      <div className={`text-1 ${darkMode && "text-gray-500"}`}>
        Hello, <span>my name is</span>
      </div>
      <div className={`text-2 ${darkMode && "text-gray-500"}`}>Pritam Guha</div>
      <div className={`text-3 ${darkMode && "text-gray-500"}`}>
        And I'm a <span>Programmar</span>
      </div>
    </div>
  );
};
