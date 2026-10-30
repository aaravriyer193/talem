import markScribble from './markscribble.png'

export default function MarkScribble() {
    return (
        <img 
            src={markScribble} 
            alt="Scribble Icon" 
            className='hidden md:block w-10 lg:w-20 h-auto absolute -top-[0.7rem] -right-[2.3rem] lg:-top-[2.3rem] lg:-right-[4.7rem]'
        />
    )
}