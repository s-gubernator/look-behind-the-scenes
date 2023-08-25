const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');

  return (
    <p className={props.className}>{props.show ? 'This is new' : ''}</p>
  );
};

export default DemoOutput;
