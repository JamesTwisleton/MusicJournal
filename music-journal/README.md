# music-journal

![music-journal overall architecture diagram](images/music-journal.png)


## Installation

* Populate .env and service-account.json

* `yarn global add firebase-tools`
* `yarn install`

## Running Locally

* `yarn deploy:local`

* Visit http://localhost:5000 in a browser

* Login with Spotify

* Navigate back to http://localhost:5000/ TODO: fix this, it shouldn't bump you back to the login screen

## Features

- [x] Spotify authentication with Firebase
- [x] Saving data to Firebase
- [x] Pulling data (including Spotify credentials) from Firebase
- [x] Using a users Spotify credentials to glean data from Spotify
- [x] Displaying a users recent Spotify tracks
- [ ] Ability to select a recent track and tag a location
- [ ] Ability to see all tagged tracks on a map
- [ ] Deploy to Firebase
- [ ] ???

## Documentation

### How authentication works

![music-journal authentication diagram](images/authentication.png)