from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')

mock_data = {
    'deauthAttacks': [
        {
            'timeOccurred': '1572640710795',
            'attackDuration': '27m 22s',
            'attackerMAC': '00:14:22:01:23:45',
            'clientMAC': '00:99:99:00:99:00'
        },
        {
            'timeOccurred': '1572640710795',
            'attackDuration': '27m 22s',
            'attackerMAC': '00:14:22:01:23:45',
            'clientMAC': '00:99:99:00:99:00'
        },
        {
            'timeOccurred': '1572640710795',
            'attackDuration': '27m 22s',
            'attackerMAC': '00:14:22:01:23:45',
            'clientMAC': '00:99:99:00:99:00'
        },
        {
            'timeOccurred': '1572640710795',
            'attackDuration': '27m 22s',
            'attackerMAC': '00:14:22:01:23:45',
            'clientMAC': '00:99:99:00:99:00'
        },
        {
            'timeOccurred': '1572640710795',
            'attackDuration': '27m 20s',
            'attackerMAC': '00:14:22:01:23:45',
            'clientMAC': '00:99:99:00:99:00'
        }
    ]
}

# Method to drop the deauth_attacks MongoDB database
def reset_db():
    print('Clearing database...')
    client.drop_database('deauth_attacks')


# Method to populate the deauth_attacks MongoDB database with mock data
def populate_db_with_mock_data():
    print('Populating database with mock data...')

    db = client['deauth_attacks']
    attacks = db.attacks
    lastAttack = db.lastAttack

    try:
        attacks.insert_many(mock_data['deauthAttacks'])
    except:
      print('ERROR: Failed to load mock data into the database. Message Cameron Cooper to fix it')
