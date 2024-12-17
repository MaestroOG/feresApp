import React from 'react'
import Spinner from '../Spinner'

export const CancelOrderSubmitBtn = ({ onClick, isLoading }) => {
    return (
        <div className='fixed bottom-0 left-0 w-full bg-white px-2 py-4'>
            <button className='bg-[#0AB247] rounded-[30px] p-[16px] text-lg font-medium text-white w-full' disabled={isLoading} onClick={onClick}>
                {isLoading ? (
                    <Spinner isWhite={true} />
                ) : (
                    'Submit'
                )}
            </button>
        </div>
    )
}
