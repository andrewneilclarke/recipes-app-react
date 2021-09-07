import uuid from "react-uuid";

const Resultslist = ( { data, testData } ) => {
    const {res} = data.hits
    console.log(testData);
    return (
        <div>
            {/* {testData.map((Data) => (
                <p key={uuid()}>{Data.name}</p>)
            )}

            {res.map((result) => 
               (
                <>
                <h1 key={uuid()}>{result.name}</h1>
                <div key={uuid()}>
                    { result.ingredients.map((ing) =>
                        (<p key={uuid()}>{ing}</p>))}
                
                </div>
                </>
            ))} */}
        </div>
    )
}

export default Resultslist
