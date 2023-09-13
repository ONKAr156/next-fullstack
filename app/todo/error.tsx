"use client"
const error = (error: Error) => {
    return <>
        <h3 className='text-4xl font-bold'>Something went wrong </h3>
        <p>{error.message}</p>
    </>
}

export default error