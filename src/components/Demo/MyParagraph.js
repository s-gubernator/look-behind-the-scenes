const MyParagraph = (props) => {
  console.log('MyParagraph RUNNING');

  return <p className={props.className}>{props.children}</p>;
};

export default MyParagraph;
