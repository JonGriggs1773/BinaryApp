import { useState } from 'react' 

const DecimalForm = () => {
    const [number, setNumber] = useState("")
    const [errors, setErrors] = useState({})
    const [isCopied, setIsCopied] = useState(false)
    const [convertedNum, setConvertedNum] = useState()

    const convertDecimalToBinary = (num) => {
        let binaryNum = "";
        let numToReverse = "";
        while (num >= 1) {
            if (num % 2 != 0) {
            numToReverse += "1";
            } else {
            numToReverse += "0";
            }
            num = parseInt(num / 2);
        }
        for (let i = numToReverse.length - 1; i >= 0; i--) {
            binaryNum += numToReverse[i];
        }
        return binaryNum;
    }

    //! Finish copy to clipboard functionality
    const copyToClipboard = () => {
        const textToCopy = convertedNum
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Successfully Copied!")
        })
        setIsCopied(true)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(/[^0-9]/.test(number)) {
            console.log("String contains letters, or nums other than 1's and 0's")
            setErrors({
                message: "Input must be a whole number, please try again" 
            })
        }
        else {
            let binaryNum = convertDecimalToBinary(number)
            setConvertedNum(binaryNum)
            setNumber("")
            setIsCopied(false)
        }
    }

    return (
        <div>
            <h2 className='mb-9 text-2xl'>Please enter a Whole Number below: </h2>
            <form onSubmit={submitHandler}>
                <div>
                    {errors.message ? <p className='text-red-600'>{errors.message}</p> : null}
                    <label>
                        <input type="text" className='w-[300px]' name="number" onChange={(e) => setNumber(e.target.value)}/>
                    </label>
                </div>
                <input type="submit" className='btn bg-purple-700 mt-3' value="Convert to Binary" />
            </form>
            <div className='bg-purple-500 rounded-lg my-11 w-60 mx-auto flex flex-col justify-center p-2'>
                {
                    convertedNum ? <p className='text-xl text-center px-3 break-words'>{convertedNum}</p> : <p className='text-xs text-center px-3'>Your output will appear here!</p>
                }
            </div>
            {   
                convertedNum ?
                !isCopied ?
                <button onClick={copyToClipboard} className='w-[70px] h-[40px] text-xs text-center'>Copy!</button> :
                <button onClick={copyToClipboard} className='w-[70px] h-[40px] text-xs text-center'>Copied!</button> :
                null
            }
        </div>
    )
}

export default DecimalForm