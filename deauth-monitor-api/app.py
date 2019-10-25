from flask import Flask, jsonify

app = Flask(__name__)

mock_data = {
  "lastAttackTime": "Oct 12 12:43 MST",
  "lastAttackDuration": "13m 27s",
  "lastAttackAttackerMAC": "00:14:22:01:23:45",
  "lastAttackClientMAC": "00:99:99:00:99:00",
  'deauthAttacks': [
    {
      'id': 1,
      'timeOccurred': 'Oct 12 12:43 MST',
      'attackDuration': '27m 22s',
      'attackerMAC': '00:14:22:01:23:45',
      'clientMAC': '00:99:99:00:99:00'
    },
    {
      'id': 1,
      'timeOccurred': 'Oct 12 12:43 MST',
      'attackDuration': '27m 22s',
      'attackerMAC': '00:14:22:01:23:45',
      'clientMAC': '00:99:99:00:99:00'
    },
    {
      'id': 1,
      'timeOccurred': 'Oct 12 12:43 MST',
      'attackDuration': '27m 22s',
      'attackerMAC': '00:14:22:01:23:45',
      'clientMAC': '00:99:99:00:99:00'
    },
    {
      'id': 1,
      'timeOccurred': 'Oct 12 12:43 MST',
      'attackDuration': '27m 22s',
      'attackerMAC': '00:14:22:01:23:45',
      'clientMAC': '00:99:99:00:99:00'
    },
    {
      'id': 1,
      'timeOccurred': 'Oct 12 12:43 MST',
      'attackDuration': '27m 22s',
      'attackerMAC': '00:14:22:01:23:45',
      'clientMAC': '00:99:99:00:99:00'
    }
  ]
}

@app.route('/')
def index():
  return jsonify(mock_data)

if __name__ == '__main__':
  app.run()