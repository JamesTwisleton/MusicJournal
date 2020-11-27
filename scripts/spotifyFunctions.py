import requests

def fetchJson(url, token):
    headers = {'Authorization':'Bearer %s' % token}
    return requests.get(url, headers=headers).json()

def getUser(token):
    return fetchJson('https://api.spotify.com/v1/me', token)

def getRecentTracks(token):
    return fetchJson('https://api.spotify.com/v1/me/player/recently-played', token)