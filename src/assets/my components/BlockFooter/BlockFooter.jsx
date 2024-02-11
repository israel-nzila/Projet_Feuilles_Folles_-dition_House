

export default function BlockFooter(props){

    return(
        <>
        
        <div className=" w-[210px] h-72 mt-14 ml-2">
            <div className="mb-8">
                <h6>{props.children}</h6>
            </div>
            <div className="text-[#726005]">
                <p>{props.paragraphe}</p>
            </div>
            <div>
                <span>{props.span}</span>
            </div>
            <div>
                <span>{props.span2}</span>
            </div>
        </div>
        </>
    )
}