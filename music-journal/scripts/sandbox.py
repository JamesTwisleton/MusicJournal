import spotifyFunctions

# Get this by:
# going to https://developer.spotify.com/console/get-recently-played/
# clicking get token
# ticking user-read-recently-played
# copying the value in OAuth Token field
token = 'BQC1FeHyEpySzMqCPU3la2bfnbqBeYrHfDrOupm1ubFVK9WMAdzKW-NE5VupWIlxRyB24rtC_2gjQdNEDxvlhDQ42TS5RNsprS6dn3E1pij79yJGnXGCd5BDhpaen4vkFlPDSPB32Xg5yo2asB3J5xqxJkg4kLQ36T54KoW-60-HDL_qmtM46cnT3RPdLfwg5oQGGzBL0CxOnGv_2ojv'

user = spotifyFunctions.getUser(token)

usersRecentTracks = spotifyFunctions.getRecentTracks(token)

print('%s recently listened to %s by %s' % \
    (user['display_name'], \
    usersRecentTracks['items'][0]['track']['name'], \
    usersRecentTracks['items'][0]['track']['artists'][0]['name']))