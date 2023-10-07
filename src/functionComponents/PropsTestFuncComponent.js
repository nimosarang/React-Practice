export default function PropsTestFuncComponent({ name, setName }) {
  const changeName = () => {
    setName("메롱");
  };

  return (
    <div>
      <div>{name}</div>
      <button onClick={() => changeName}>change name</button>
    </div>
  );
}
