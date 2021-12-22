import Image from 'next/image'
import GameHeader from '../img/gameHeader.jpg'

const AboutCategories = ( { category }) => {
    return (
        <div className="w-80 h-auto grid grid-flow-row border-2 border-lightGray shadow-sm rounded">
            <div className="h-20 w-full relative rounded-t" style={{
                overflow : 'hidden',
            }}>
                <Image src={category.header} layout='responsive' alt='' />
            </div>
            <div className="w-full">
                <div className="text-center font-light text-2xl py-3">
                    About {category.tag}
                </div>
                <div className="text-left p-6 pt-0 font-extralight text-sm">
                    {category.description}
                </div>
            </div>
        </div>
    )
}

export default AboutCategories
