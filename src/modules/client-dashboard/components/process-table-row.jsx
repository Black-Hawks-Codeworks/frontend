function ProcessTableRow(props) {
  const { process } = props;
  return (
    <div>
      <span>{process.processId}</span>
      <span>{process.cost}</span>
      <span>{process.name}</span>
      <span>{process.description}</span>
      <span>{process.status}</span>
      <span>{process.createdAt}</span>
      <span>{process.updatedAt}</span>
    </div>
  );
}

export default ProcessTableRow;
