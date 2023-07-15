function returnPromise () {
    const promise = new Promise ((resolve) => {
        setTimeout(function(){
            resolve ('Готово')
        }, 2000)
    })

    promise.then((result) => {
        console.log(result)
    })

    return promise
}

returnPromise()