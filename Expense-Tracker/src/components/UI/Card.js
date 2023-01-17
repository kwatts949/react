const Card = (props) => {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>;
};

export default Card;

// children is the content between the opening and closing tags of wrapper