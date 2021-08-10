const Button = (props) => {
  const styles = {
    height: props.height,
    width: props.width,
    color: props.color,
  };
  return (
    <div className="button-util">
      <a href={props.link} target="blank" style={{ styles }}>
        {props.content}
      </a>
    </div>
  );
};

export default Button;
