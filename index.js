function returnPromise() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Готово')
        }, 2000)
    })

}

returnPromise().then(result =>{console.log(result);
})

