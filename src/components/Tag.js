function Tag(props) {
  return (
    <div className="tag">
      <span className="word" data-text={props.content}>
        {props.content}
      </span>
    </div>
  );
}

export default Tag;
