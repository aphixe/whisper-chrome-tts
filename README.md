# whisper-chrome-tts
a windows batch app for an addon for chrome to make whisper easy for migaku

to run a listener app just open cmd in same folder and run "python runme.py"  
then on youtube click on J, and click execute it will then show up details so you know when subs are done.
then use something like migaku browser addon to see subs on youtube. then you can mine or do whatever you want.


everything you need to run this
python 3.9.13
https://www.python.org/downloads/release/python-3913/
python.exe -m pip install --upgrade pip
https://pytorch.org/get-started/locally/
make sure pytorch sees cuda, if not you need to reinstall drivers and reinstall pytorch

to check pytorch open cmd then type
python
then type
import torch        (WAIT for it to import)
torch.cuda.is_available()

should output TRUE

pip install openai-whisper
pip install websockets
pip install yt-dlp
chrome://extensions/ 

this is what my packages i have installed and it works.
pip list
Package            Version
------------------ ------------
Brotli             1.0.9

certifi            2022.12.7

charset-normalizer 2.1.1

colorama           0.4.6

ffmpeg             1.4

ffmpeg-python      0.2.0

filelock           3.9.0

future             0.18.3

idna               3.4

Jinja2             3.1.2

llvmlite           0.40.1

MarkupSafe         2.1.2

more-itertools     9.1.0

mpmath             1.2.1

mutagen            1.46.0

networkx           3.0

numba              0.57.1

numpy              1.24.1

openai-whisper     20230314

Pillow             9.3.0

pip                23.2

pycryptodomex      3.18.0

regex              2023.6.3

requests           2.28.1

setuptools         58.1.0

six                1.16.0

sympy              1.11.1

tiktoken           0.3.1

torch              2.0.1+cu118

torchaudio         2.0.2+cu118

torchvision        0.15.2+cu118

tqdm               4.65.0

typing_extensions  4.4.0

urllib3            1.26.13

websockets         11.0.3

whisper            1.1.10

yt-dlp             2023.7.6

