document.getElementById('fetchBtn').addEventListener('click', function () {
    const selectedTeam = document.getElementById('team').value;
    const selectedPlayer = document.getElementById('player').value;
  
    const highlightMessage = `Highlights for ${selectedPlayer} of ${selectedTeam}`;
    document.getElementById('highlightResult').innerText = highlightMessage;
  });

  document.getElementById('updateBtn').addEventListener('click', function () {
    const selectedTeam = document.getElementById('team').value;
    const selectedPlayer = document.getElementById('player').value;
    const frequency = document.querySelector('input[name="frequency"]:checked');
  
    if (frequency) {
      const updateMessage = `You will receive ${frequency.value} updates for ${selectedPlayer} of ${selectedTeam}.`;
      document.getElementById('highlightResult').innerText = updateMessage;
    } else {
      document.getElementById('highlightResult').innerText = 'Please select an update frequency.';
    }
  });
  