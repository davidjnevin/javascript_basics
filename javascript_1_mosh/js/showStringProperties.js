const movie = {
    title: 'a',
    director: 'David',
    year: 2023,
    length: 120
};

function showStringProperties(object) {
    for (let key in object){
        if (typeof object[key] === 'string') console.log(key, object[key])
    }
}

showStringProperties(movie)