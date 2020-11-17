# music-journal

![music-journal diagram](images/MusicJournal.png)


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
- [ ] Deploy to Firebase
- [ ] ???

Memories - basic functionality
- [ ] Create a memory, a simple text entry
- [ ] View, delete and edit existing memories
- [ ] Associate a memory with a Spotify db element, e.g. song, album, artist
- [ ] Memory view: sort and filter memories by Spotify db criteria
- [ ] Select a recent track and initiate memory creation

Memories - subsequent functionality
- [ ] Search for a Spotify db element and import this into memory
- [ ] Add multiple SDbE to a memory

Tags - extended functionality
- [ ] Add multiple tags to a memory, e.g. mood, age, person,
- [ ] Tag a location
- [ ] Ability to see all tagged tracks on a map
- [ ] Refer to SDbE using @ symbol, e.g. "This is my favourite @Prince album."
- [ ] Refer to tags or memories using # symbol e.g. "This song always makes me #happy. It reminds me of #Holiday2019 with #Boris and #Carrie."
- [ ] Link to a list of posts with @ or # associations.
- [ ] Highlight @ and # elements in the memory.

Sharing - advanced functionality
- [ ] Export a memory to a text file or copy to clipboard
- [ ] Post a memory directly to social media platforms, e.g. Twitter, Facebook, Wordpress
- [ ] Privacy options for memories - public to other MJ users, or private
- [ ] Have "friends" in MJ or import from Spotify friends
- [ ] Privacy options for memories - allow posts to be viewable to individual friends
- [ ] Show when friends and other MJ users also have a memories associated with SDbe (a song, album, artist)
- [ ] Browse tags and see SDbE associated with those

Superadvanced capture the yoof market feature
- [ ] Post a memory to tiktok - needs Tiktok database
