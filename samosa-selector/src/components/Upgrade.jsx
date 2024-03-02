export default function Upgrade({
  title,
  increase,
  multiplier,
  amtNeeded,
  setMultiplier,
  count,
  setCount,
  current
}) {
    function buyUpgrade(){
        if(current < amtNeeded){
            return;
        }
        setMultiplier(multiplier * increase)
        increase = increase + multiplier
        console.log(multiplier)
        setCount(count - amtNeeded)
        
    }
  return (
    <>
      {title}
      <p>{increase}x per click</p>
      <button onClick={buyUpgrade}>{amtNeeded} samosas</button>
    </>
  );
}