import React from 'react'
import Container from '../../components/Container'

const MartCategoryCard = ({ categories }) => {
    return (
        <div>
            <Container className='flex items-center gap-3 overflow-auto no-scrollbar'>
                {categories?.map(category => (
                    <div key={category.id} onClick={() => handleClick(category.id)}>
                        <div className={`w-28 h-24 px-4 py-8 rounded-2xl flex items-center justify-center bg-[#F8F8F8]`}>
                            <img src={category.img} alt="" className='w-[90px] h-[55px] object-contain' />
                        </div>
                        <h1 className='text-[#2F2F3F] text-center mt-1'>{category.name}</h1>
                    </div>
                ))}

            </Container>
        </div>
    )
}

export default MartCategoryCard