import { useState } from "react";

const ImageManipulation = () => {
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);
    const [angle, setAngle] = useState(0)
    const [red, setRed] = useState();
    const [green, setGreen] = useState();
    const [blue, setBlue] = useState();

    const enhanceHeight = () => {
        setHeight(height+20)
    }

    const enhanceWidth = () => {
			setWidth(width + 20);
		};

    const rotatePic = () => {
        setAngle(angle+30)
    }

    const changeColor = () => {
        setRed(Math.random()*255)
        setGreen(Math.random()*255)
        setBlue(Math.random()*255)
    }
    return (
		<div className='bg-[antiquewhite] w-[600px] h-[600px] border-4 border-green-600'>
			<div style={{backgroundColor: `rgb(${red}, ${green},${blue})`}}>
				<img
					className='border-red-500 border-2'
                    height= {height}
                    width= {width}
                    style={{transform: `rotate(${angle}deg)`}}
					src='src/assets/cat.png'
					alt='cat image'
				/>
			</div>
			<div className='flex justify-evenly'>
				<button onClick={enhanceHeight} className='border-2 border-black p-1 rounded-md'>
					Enhance Height
				</button>
				<button onClick={enhanceWidth} className='border-2 border-black p-1 rounded-md'>
					Enhance Width
				</button>
				<button onClick={changeColor} className='border-2 border-black p-1 rounded-md'>
					Color Change
				</button>
				<button onClick={rotatePic} className='border-2 border-black p-1 rounded-md'>Rotate</button>
			</div>
		</div>
	);
}
export default ImageManipulation