export default function Results({results}: { results:any[] }){
    console.log(results)


    if(!Array.isArray(results)){
        return(
            <div> Error on results</div>
        )
    }
    return(
        <div>
            {results.map(item => (<div key={item.id}>{item.title}</div>))}
        </div>
    )
}