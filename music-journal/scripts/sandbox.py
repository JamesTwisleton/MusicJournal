import spotifyFunctions

user = \
spotifyFunctions.getUser(\
    'BQA9aeT63mUfu7Tm-RHT4x3deHanRaIRNZAzLen2g7C_HolUFIBJqwQbCS4P_XpYbXP0SL3AQALYJ80ntp19WTerWM2qtA5E3wR1xYQu7VuuKnCArZQXuzfZQcFe3xgh8J8-0Xk09z8DP-UHSNquxUK8xFRuujbQnOJrtPSxlXDzRuNCH3PLEojGOZWxZh0krFeIbiV40n9cf0zzGqqH')

usersRecentTracks = \
spotifyFunctions.getRecentTracks(\
    'BQA9aeT63mUfu7Tm-RHT4x3deHanRaIRNZAzLen2g7C_HolUFIBJqwQbCS4P_XpYbXP0SL3AQALYJ80ntp19WTerWM2qtA5E3wR1xYQu7VuuKnCArZQXuzfZQcFe3xgh8J8-0Xk09z8DP-UHSNquxUK8xFRuujbQnOJrtPSxlXDzRuNCH3PLEojGOZWxZh0krFeIbiV40n9cf0zzGqqH')

print('%s recently listened to %s by %s' % \
    (user['display_name'], \
    usersRecentTracks['items'][0]['track']['name'], \
    usersRecentTracks['items'][0]['track']['artists'][0]['name']))