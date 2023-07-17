@Echo off


:doerase
For /F "tokens=*" %%G in ('dir /s /b *.wav') do (
    if exist "*.wav" (
        del "*.wav"
   ) else (
        REM echo retain %%~dpnxG
   )
)
