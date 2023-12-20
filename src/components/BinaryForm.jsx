import { useState } from 'react'    

const BinaryForm = () => {
    const [number, setNumber] = useState("")
    const [errors, setErrors] = useState({})
    const [convertedNum, setConvertedNum] = useState()

    const convertBinaryToDecimal = (num) => {
        let decimal = 0;
        let start = 1;
        for (let i = num.length - 1; i >= 0; i--) {
            if (num[i] === "1") {
            decimal += start;
            }
            start *= 2;
        }
        return decimal;
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Function executing", number)
        if(/[^01]/.test(number)) {
            console.log("String contains letters, or nums other than 1's and 0's")
            setErrors({
                message: "Input must be a number, and must be only 1's and 0's, please try again" 
            })
        }
        else {
            let decimalNum = convertBinaryToDecimal(number)
            setConvertedNum(decimalNum)
        }
    }

    return (
        <div>
            <h2 className='mb-9 text-2xl'>Please enter a Binary Number below: </h2>
            <form onSubmit={submitHandler}>
                <div>
                    {errors.message ? <p className='text-red-600'>{errors.message}</p> : null}
                    <label>
                        <input type="text" className='w-[300px]' name="number" onChange={(e) => setNumber(e.target.value)}/>
                    </label>
                </div>
                <input type="submit" className='btn bg-purple-700 mt-3' value="Convert to Binary" />
            </form>
            <div className='bg-purple-500 rounded-lg my-11 w-60 h-12 mx-auto flex items-center justify-center'>
                {
                    convertedNum ? <p className='text-yellow-300 text-xl text-center'>{convertedNum}</p> : <p className='text-xs'>Your output will appear here!</p>
                }
            </div>
        </div>
    )
}

export default BinaryForm