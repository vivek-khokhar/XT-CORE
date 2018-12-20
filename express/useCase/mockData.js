const profile = require('./profile');

class MockData{
    constructor() {
        this.profiles = [
            new profile(
                1,
                'Superman',
                'Metropolis'
            ),
            new profile(
                2,
                'Batman',
                'Gotham'
                )
        ]
    }

}

module.exports = MockData;