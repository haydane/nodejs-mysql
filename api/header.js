status200 = {
    'status': 200, 
    'error': null, 
}

status500 = err => {
    return {
        'status': 500,
        'error': err
    }
}

module.exports = {
    status200,
    status500,
}