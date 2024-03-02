export default function Upgrade({ title, description, amtNeeded }) {
  return (
    <>
      {title}
      <p>{description}</p>
      <button>{amtNeeded} samosas</button>
    </>
  );
}
