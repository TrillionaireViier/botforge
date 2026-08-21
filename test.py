import urllib.request
import json
import re

url = "https://botforge-blue.vercel.app/build/assets/main-Dv7yD1Eg.js"
req = urllib.request.Request(url)
with urllib.request.urlopen(req) as response:
    js_content = response.read().decode('utf-8')

# Search for any obvious React errors or my sed replacements
print("JS length:", len(js_content))
print("text-black text-black count:", js_content.count("text-black text-black"))
