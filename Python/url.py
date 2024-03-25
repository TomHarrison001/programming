from json import loads, dumps
from urllib.request import urlopen

url = "https://swapi.py4e.com/api"
response = urlopen(url)
data = loads(response.read().decode("utf-8"))

print(dumps(data, indent=2))
