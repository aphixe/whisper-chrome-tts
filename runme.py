import os
import asyncio
import websockets
import subprocess

async def receive_url(websocket, path):
    while True:
        url = await websocket.recv()
        print("Received URL:", url)
        
  

        # Run yt-dlp command with the URL
        yt_dlp_command = ["yt-dlp", "-x", "--audio-format", "wav", url]
        subprocess.run(yt_dlp_command)

        batch_file_path = "run.bat"  # Replace with the actual path to run.bat
        subprocess.run(batch_file_path, shell=True)

        run_whisper_srt =["whisper","--output_format","srt", "output.wav"]
        subprocess.run(run_whisper_srt)

        batch_wav = "deletewave.bat"  # Replace with the actual path to run.bat
        subprocess.run(batch_wav, shell=True)


start_server = websockets.serve(receive_url, 'localhost', 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
