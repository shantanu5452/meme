Cat Meme Cam
As-is Streamlit recreation of the reference video: a compact dark webcam page with a left camera card, right cat meme card, real cropped meme panels from the supplied video, and the same gesture buttons along the bottom.

Run
cd "/Users/yashodip/Documents/New project/CatMemeCam_Streamlit"
python3.11 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
streamlit run streamlit_app.py
Streamlit Cloud WebRTC
The app uses public STUN servers by default. If the camera still stays on Connection is taking longer than expected, add TURN credentials in Streamlit Cloud secrets. Any one of these formats works.

Static TURN server:

[turn]
urls = ["turn:your-turn-host:3478"]
username = "your-username"
credential = "your-password"
Metered TURN API:

[metered]
app_name = "your-metered-app-name"
api_key = "your-metered-api-key"
You can also put the full Metered credentials URL in endpoint instead of app_name.

Twilio Network Traversal:

[twilio]
account_sid = "your-account-sid"
auth_token = "your-auth-token"
To verify that secrets are loaded, open the deployed app with ?debug=1. The page will show whether TURN is active.

Gestures
Gesture	Meme
THUMBS UP	Thumbs Up Cat
FIST	Fist Cat
OK SIGN	OK Sign Cat
NAMASTE	Namaste Cat
SHH	Tongue Cat
Project Structure
CatMemeCam_Streamlit/
├── assets/reference/
├── cat_meme_cam/
│   ├── assets.py
│   ├── config.py
│   ├── hand_tracker.py
│   └── processor.py
├── models/opencv_hand/       # CPU-only OpenCV hand-pose models
├── outputs/
├── requirements.txt
├── streamlit_app.py
└── README.md
