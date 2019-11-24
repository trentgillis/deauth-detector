# Start the scapy application
cd deauth-monitor-scapy
pip3 install -r requirements.txt
python3 deauth.py
cd ..

# Start the Flask API
cd deauth-monitor-api
pip3 install -r requirements.txt
python3 app.py reset_db
cd ..

# Start the React application
cd deauth-monitor-web/deauth-web-ui
npm install
npm run build
cd ..
npm install
node index.js