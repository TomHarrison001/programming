from pathlib import Path
from csv import DictWriter, DictReader
from json import dump, load


def json_to_csv(root):
    inpath = root / 'animals.json'
    outpath = root / 'animals.csv'
    with inpath.open('r') as infile, outpath.open('w') as outfile:
        animals = load(infile)
        writer = DictWriter(outfile, fieldnames=['name', 'description'])
        writer.writeheader()
        writer.writerows(animals)


def csv_to_json(root):
    inpath = root / 'animals.csv'
    outpath = root / 'animals.json'
    with inpath.open('r') as infile, outpath.open('w') as outfile:
        animals = list(DictReader(infile))
        dump(animals, outfile, indent=2)


animals = [{'name': 'Bear', 'description': 'Grizzly'},
           {'name': 'Dog', 'description': 'Friend'}]

root = Path('folder')
path = root / 'animals.csv'

print(repr(path))
print(repr(path.absolute()))

if not root.exists():
    root.mkdir(parents=True)
    path.touch()

with path.open('w') as file:
    writer = DictWriter(file, fieldnames=['name', 'description'])
    writer.writeheader()
    writer.writerows(animals)

path = root / 'animals.json'

with path.open('w') as file:
    dump(animals, file, indent=2)

# json_to_csv(root)
# csv_to_json(root)
