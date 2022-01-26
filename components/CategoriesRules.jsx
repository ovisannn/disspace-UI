const RuleText = ({ rule }) =>{
    return (<>{rule.no} &nbsp; {rule    .text}</>)
}

const CategoriesRules = ({ category }) => {
    return (
    <div className="w-80 h-auto grid grid-flow-row border-2 border-lightGray shadow-sm rounded">
        <div className="h-20 w-full relative rounded-t text-white font-light text-2xl text-center align-middle py-5" style={{backgroundColor: category.color_theme}}>
            Topic&apos;s Rules
        </div>
        <div className="w-full px-5 font-light py-3">
            {
                category.rules.map((item)=>(
                    <div  key={item.no}>
                        <RuleText rule = {item}/>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default CategoriesRules

