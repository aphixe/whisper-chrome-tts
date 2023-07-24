# whisper-chrome-tts
a windows batch app for an addon for chrome to make whisper easy for migaku

to run a listener app just open cmd in same folder and run "python runme.py"  
then on youtube click on J, and click execute it will then show up details so you know when subs are done.
then use something like migaku browser addon to see subs on youtube. then you can mine or do whatever you want.


everything you need to run this
python 3.9.13


https://www.python.org/downloads/release/python-3913/

python.exe -m pip install --upgrade pip

--------------------------------------
Install pytorch
---------------------------------------
goto

https://pytorch.org/get-started/locally/

change to latest cuda 11.8 and select the code and paste, run the code in cmd prompt

on mac or non nvidia gpu. select default. maybe roc works on amd? copy command into termial


next make sure pytorch sees cuda, if not you need to reinstall drivers and reinstall pytorch

to check pytorch open cmd then type

---------------------------------------
python

then type

import torch        (WAIT for it to import)

torch.cuda.is_available()

should output TRUE
----------------------------------------

----------------------------------------
Install ffmpeg
----------------------------------------

Google ffmpeg goto site and click on windows then choose, builds by gyan.dev download the full 7zip.
I downloaded 7zip from ninite, so google ninite and search page for 7-zip
install 7zip, then extract ffmpeg, rename the extracted folder to ffmpeg and move to root of your os disk, so for me c:\ffmpeg


press start key and search for path, then look for edit the system enviroments, 

click enviroment variables, then select path, hit edit and click new add. c:\ffmpeg\bin\

on mac use: brew install ffmpeg
------------------------------------------

------------------------------------------
Last packages you should need
------------------------------------------

pip install websockets

pip install openai-whisper

pip install yt-dlp

you may want to test whisper, i used windows 11's voice recorder then located the sound file then typed cmd into address bar of that explorer window and ran the code.

whisper audiofile.m4a or whatever the extension of the file is.
it should output a txt file and a bunch other formats.


how to install extension
---------------------------------------

open
chrome://extensions/

and set mode to developer.


load unpacked, point to this github to where you extracted it

pin the extension if you like
open a command prompt where you have this github package unziped and run the listener with:


python runme.py


this will listen to when you press excute page button. then it will make an output.srt when it finishes the end of the video.


if you want to force japanese if say the auto detect fails run


python runmejapanese.py



then use migaku extension and add output.srt the subtitle and enjoy.


----------------------------------------------------
on mac, maybe linux
also on mac i used brew, google how to install brew, then run 'brew install ffmpeg'
install all the same pip commands above, and pytorch gpu was set to default as my mac does not have nVidia or amd.
run a chmod a+x runmemac.py and on runmejapanesemac.py
the run python runmemac.py or python runmemacjapanese.py


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

