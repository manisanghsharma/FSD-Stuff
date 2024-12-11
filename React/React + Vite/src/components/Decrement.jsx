import { useState } from "react"
const Decrement = () => {
    const [val, setVal] = useState(180)
  return (
		<div>
			<h1>Hello React JS</h1>
			<p></p>
			<p>Counter Value is: {val}</p>
				<button onClick={() => setVal(val + 1)}>Increment</button>
				<button onClick={() => setVal(val - 20)}>Decrement</button>
		</div>
	);
}
export default Decrement