function testSync() {
    try {
        const num = getRandomNumber(); // Waiting
        console.log(num);
    }
    catch (err) {
        console.log(err.message);
    }
}

// Sync function: 
function getRandomNumber() {
    const num = Math.floor(Math.random() * 100);
    if (Math.random() < 0.33) throw new Error("Something bad...");
    return num;
}

// --------------------------------------------

function testAsync1() {
    getRandomNumberAfterDelay1(
        100,
        num => console.log(num),
        err => console.log(err.message)
    );

    navigator.geolocation.getCurrentPosition(
        position => console.log(position.coords.latitude + ", " + position.coords.longitude),
        err => console.log(err.message)
    );
}

function getRandomNumberAfterDelay1(limit, successCallback, errorCallback) {
    setTimeout(() => { // Not waiting
        const num = Math.floor(Math.random() * limit);
        if (Math.random() < 0.33) {
            errorCallback(new Error("Something bad...")); // throw
            return;
        }
        successCallback(num); // return
    }, 1000);
}

// --------------------------------------------

function testAsync2() {
    getRandomNumberAfterDelay2(100)
        .then(num => console.log(num))
        .catch(err => console.log(err.message));

}

function getRandomNumberAfterDelay2(limit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Not waiting
            const num = Math.floor(Math.random() * limit);
            if (Math.random() < 0.33) {
                reject(new Error("Something bad...")); // throw
                return;
            }
            resolve(num); // return
        }, 1000);
    });
}


// --------------------------------------------

function testAsync3() {
    getRandomNumberAfterDelay3(100)
        .then(num1 => {

            console.log(num1);

            getRandomNumberAfterDelay3(num1)
                .then(num2 => {

                    console.log(num2);

                    getRandomNumberAfterDelay3(num2)
                        .then(num3 => {

                            console.log(num3);

                        })
                        .catch(err => console.log(err.message));

                })
                .catch(err => console.log(err.message));

        })
        .catch(err => console.log(err.message));

}

function getRandomNumberAfterDelay3(limit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Not waiting
            const num = Math.floor(Math.random() * limit);
            if (Math.random() < 0.33) {
                reject(new Error("Something bad...")); // throw
                return;
            }
            resolve(num); // return
        }, 1000);
    });
}






// --------------------------------------------

async function testAsync4() {

    // getRandomNumberAfterDelay4(100)
    //     .then(num1 => {
    //         console.log(num1);
    //         getRandomNumberAfterDelay4(num1)
    //             .then(num2 => {
    //                 console.log(num2);
    //                 getRandomNumberAfterDelay4(num2)
    //                     .then(num3 => {
    //                         console.log(num3);
    //                     })
    //                     .catch(err => console.log(err.message));
    //             })
    //             .catch(err => console.log(err.message));
    //     })
    //     .catch(err => console.log(err.message));



    try {
        const num1 = await getRandomNumberAfterDelay4(100);
        console.log(num1);
        const num2 = await getRandomNumberAfterDelay4(num1);
        console.log(num2);
        const num3 = await getRandomNumberAfterDelay4(num2);
        console.log(num3);
    }
    catch (err) {
        console.log(err.message);
    }
}


function getRandomNumberAfterDelay4(limit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Not waiting
            const num = Math.floor(Math.random() * limit);
            if (Math.random() < 0.33) {
                reject(new Error("Something bad...")); // throw
                return;
            }
            resolve(num); // return
        }, 1000);
    });
}










