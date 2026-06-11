// World Cup 2026 - Match Results Functions
// This file contains all the functions needed for the results system

// All 72 matches from the group stage
const ALL_MATCHES = [
    // Group A
    { id: "match_1", group: "A", date: "Jun 11", team1: "Mexico", team2: "South Africa" },
    { id: "match_2", group: "A", date: "Jun 11", team1: "South Korea", team2: "Czechia" },
    { id: "match_3", group: "A", date: "Jun 18", team1: "Czechia", team2: "South Africa" },
    { id: "match_4", group: "A", date: "Jun 18", team1: "Mexico", team2: "South Korea" },
    { id: "match_5", group: "A", date: "Jun 24", team1: "Czechia", team2: "Mexico" },
    { id: "match_6", group: "A", date: "Jun 24", team1: "South Africa", team2: "South Korea" },
    // Group B
    { id: "match_7", group: "B", date: "Jun 12", team1: "Canada", team2: "Bosnia and Herzegovina" },
    { id: "match_8", group: "B", date: "Jun 13", team1: "Qatar", team2: "Switzerland" },
    { id: "match_9", group: "B", date: "Jun 18", team1: "Bosnia and Herzegovina", team2: "Switzerland" },
    { id: "match_10", group: "B", date: "Jun 18", team1: "Canada", team2: "Qatar" },
    { id: "match_11", group: "B", date: "Jun 24", team1: "Switzerland", team2: "Canada" },
    { id: "match_12", group: "B", date: "Jun 24", team1: "Bosnia and Herzegovina", team2: "Qatar" },
    // Group C
    { id: "match_13", group: "C", date: "Jun 13", team1: "Brazil", team2: "Morocco" },
    { id: "match_14", group: "C", date: "Jun 13", team1: "Haiti", team2: "Scotland" },
    { id: "match_15", group: "C", date: "Jun 19", team1: "Scotland", team2: "Morocco" },
    { id: "match_16", group: "C", date: "Jun 19", team1: "Brazil", team2: "Haiti" },
    { id: "match_17", group: "C", date: "Jun 24", team1: "Scotland", team2: "Brazil" },
    { id: "match_18", group: "C", date: "Jun 24", team1: "Morocco", team2: "Haiti" },
    // Group D
    { id: "match_19", group: "D", date: "Jun 12", team1: "USA", team2: "Paraguay" },
    { id: "match_20", group: "D", date: "Jun 13", team1: "Australia", team2: "Turkey" },
    { id: "match_21", group: "D", date: "Jun 19", team1: "Turkey", team2: "Paraguay" },
    { id: "match_22", group: "D", date: "Jun 19", team1: "USA", team2: "Australia" },
    { id: "match_23", group: "D", date: "Jun 25", team1: "Turkey", team2: "USA" },
    { id: "match_24", group: "D", date: "Jun 25", team1: "Paraguay", team2: "Australia" },
    // Group E
    { id: "match_25", group: "E", date: "Jun 14", team1: "Germany", team2: "Curaçao" },
    { id: "match_26", group: "E", date: "Jun 14", team1: "Ivory Coast", team2: "Ecuador" },
    { id: "match_27", group: "E", date: "Jun 20", team1: "Germany", team2: "Ivory Coast" },
    { id: "match_28", group: "E", date: "Jun 20", team1: "Ecuador", team2: "Curaçao" },
    { id: "match_29", group: "E", date: "Jun 25", team1: "Ecuador", team2: "Germany" },
    { id: "match_30", group: "E", date: "Jun 25", team1: "Curaçao", team2: "Ivory Coast" },
    // Group F
    { id: "match_31", group: "F", date: "Jun 14", team1: "Netherlands", team2: "Japan" },
    { id: "match_32", group: "F", date: "Jun 14", team1: "Sweden", team2: "Tunisia" },
    { id: "match_33", group: "F", date: "Jun 20", team1: "Netherlands", team2: "Sweden" },
    { id: "match_34", group: "F", date: "Jun 20", team1: "Tunisia", team2: "Japan" },
    { id: "match_35", group: "F", date: "Jun 25", team1: "Tunisia", team2: "Netherlands" },
    { id: "match_36", group: "F", date: "Jun 25", team1: "Japan", team2: "Sweden" },
    // Group G
    { id: "match_37", group: "G", date: "Jun 15", team1: "Belgium", team2: "Egypt" },
    { id: "match_38", group: "G", date: "Jun 15", team1: "Iran", team2: "New Zealand" },
    { id: "match_39", group: "G", date: "Jun 21", team1: "Belgium", team2: "Iran" },
    { id: "match_40", group: "G", date: "Jun 21", team1: "New Zealand", team2: "Egypt" },
    { id: "match_41", group: "G", date: "Jun 26", team1: "New Zealand", team2: "Belgium" },
    { id: "match_42", group: "G", date: "Jun 26", team1: "Egypt", team2: "Iran" },
    // Group H
    { id: "match_43", group: "H", date: "Jun 15", team1: "Spain", team2: "Cape Verde" },
    { id: "match_44", group: "H", date: "Jun 15", team1: "Saudi Arabia", team2: "Uruguay" },
    { id: "match_45", group: "H", date: "Jun 21", team1: "Spain", team2: "Saudi Arabia" },
    { id: "match_46", group: "H", date: "Jun 21", team1: "Uruguay", team2: "Cape Verde" },
    { id: "match_47", group: "H", date: "Jun 26", team1: "Uruguay", team2: "Spain" },
    { id: "match_48", group: "H", date: "Jun 26", team1: "Cape Verde", team2: "Saudi Arabia" },
    // Group I
    { id: "match_49", group: "I", date: "Jun 16", team1: "France", team2: "Senegal" },
    { id: "match_50", group: "I", date: "Jun 16", team1: "Iraq", team2: "Norway" },
    { id: "match_51", group: "I", date: "Jun 22", team1: "France", team2: "Iraq" },
    { id: "match_52", group: "I", date: "Jun 22", team1: "Norway", team2: "Senegal" },
    { id: "match_53", group: "I", date: "Jun 27", team1: "Norway", team2: "France" },
    { id: "match_54", group: "I", date: "Jun 27", team1: "Senegal", team2: "Iraq" },
    // Group J
    { id: "match_55", group: "J", date: "Jun 16", team1: "Argentina", team2: "Algeria" },
    { id: "match_56", group: "J", date: "Jun 16", team1: "Austria", team2: "Jordan" },
    { id: "match_57", group: "J", date: "Jun 22", team1: "Argentina", team2: "Austria" },
    { id: "match_58", group: "J", date: "Jun 22", team1: "Jordan", team2: "Algeria" },
    { id: "match_59", group: "J", date: "Jun 27", team1: "Jordan", team2: "Argentina" },
    { id: "match_60", group: "J", date: "Jun 27", team1: "Algeria", team2: "Austria" },
    // Group K
    { id: "match_61", group: "K", date: "Jun 17", team1: "Portugal", team2: "Congo DR" },
    { id: "match_62", group: "K", date: "Jun 17", team1: "Uzbekistan", team2: "Colombia" },
    { id: "match_63", group: "K", date: "Jun 23", team1: "Portugal", team2: "Uzbekistan" },
    { id: "match_64", group: "K", date: "Jun 23", team1: "Colombia", team2: "Congo DR" },
    { id: "match_65", group: "K", date: "Jun 27", team1: "Colombia", team2: "Portugal" },
    { id: "match_66", group: "K", date: "Jun 27", team1: "Congo DR", team2: "Uzbekistan" },
    // Group L
    { id: "match_67", group: "L", date: "Jun 17", team1: "England", team2: "Croatia" },
    { id: "match_68", group: "L", date: "Jun 17", team1: "Ghana", team2: "Panama" },
    { id: "match_69", group: "L", date: "Jun 23", team1: "England", team2: "Ghana" },
    { id: "match_70", group: "L", date: "Jun 23", team1: "Panama", team2: "Croatia" },
    { id: "match_71", group: "L", date: "Jun 27", team1: "Panama", team2: "England" },
    { id: "match_72", group: "L", date: "Jun 27", team1: "Croatia", team2: "Ghana" }
];

// Load matches into dropdown
function loadMatchesDropdown() {
    const select = document.getElementById('matchSelect');
    if (!select) return;
    
    select.innerHTML = '<option value="">-- Select a match --</option>';
    
    ALL_MATCHES.forEach(match => {
        const option = document.createElement('option');
        option.value = match.id;
        option.textContent = `${match.date} - Group ${match.group}: ${match.team1} vs ${match.team2}`;
        select.appendChild(option);
    });
}

// Select a match to enter result
function selectMatch() {
    const select = document.getElementById('matchSelect');
    const matchId = select.value;
    
    if (!matchId) {
        document.getElementById('matchResultForm').style.display = 'none';
        return;
    }
    
    const match = ALL_MATCHES.find(m => m.id === matchId);
    if (!match) return;
    
    // Show form
    document.getElementById('matchResultForm').style.display = 'block';
    document.getElementById('selectedMatchTitle').textContent = 
        `${match.date} - Group ${match.group}`;
    document.getElementById('team1Name').textContent = match.team1;
    document.getElementById('team2Name').textContent = match.team2;
    
    // Load existing result if any
    const existingResult = actualResults[matchId];
    if (existingResult) {
        document.getElementById('score1').value = existingResult.score1;
        document.getElementById('score2').value = existingResult.score2;
    } else {
        document.getElementById('score1').value = '';
        document.getElementById('score2').value = '';
    }
    
    document.getElementById('resultsMessage').style.display = 'none';
}

// Save match result
function saveMatchResult() {
    const select = document.getElementById('matchSelect');
    const matchId = select.value;
    
    if (!matchId) {
        showResultsMessage('Please select a match first', 'error');
        return;
    }
    
    const score1 = parseInt(document.getElementById('score1').value);
    const score2 = parseInt(document.getElementById('score2').value);
    
    if (isNaN(score1) || isNaN(score2) || score1 < 0 || score2 < 0) {
        showResultsMessage('Please enter valid scores (0 or higher)', 'error');
        return;
    }
    
    const match = ALL_MATCHES.find(m => m.id === matchId);
    
    // Save result
    actualResults[matchId] = {
        score1: score1,
        score2: score2,
        team1: match.team1,
        team2: match.team2,
        group: match.group,
        date: match.date
    };
    
    saveData();
    updateRanking();
    updateSavedResultsList();
    
    showResultsMessage(`✅ Result saved: ${match.team1} ${score1} - ${score2} ${match.team2}`, 'success');
    
    // Clear form
    document.getElementById('score1').value = '';
    document.getElementById('score2').value = '';
    select.value = '';
    document.getElementById('matchResultForm').style.display = 'none';
}

// Clear match result
function clearMatchResult() {
    const select = document.getElementById('matchSelect');
    const matchId = select.value;
    
    if (!matchId) return;
    
    if (confirm('Are you sure you want to delete this result?')) {
        delete actualResults[matchId];
        saveData();
        updateRanking();
        updateSavedResultsList();
        
        document.getElementById('score1').value = '';
        document.getElementById('score2').value = '';
        showResultsMessage('✅ Result deleted', 'success');
    }
}

// Update saved results list
function updateSavedResultsList() {
    const resultsList = document.getElementById('resultsList');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!resultsList || !resultsCount) return;
    
    const savedCount = Object.keys(actualResults).length;
    resultsCount.textContent = savedCount;
    
    if (savedCount === 0) {
        resultsList.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No results saved yet</p>';
        return;
    }
    
    let html = '';
    ALL_MATCHES.forEach(match => {
        const result = actualResults[match.id];
        if (result) {
            html += `
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong>${match.date} - Group ${match.group}</strong><br>
                        <span style="font-size: 1.1em;">${result.team1} <strong>${result.score1} - ${result.score2}</strong> ${result.team2}</span>
                    </div>
                    <button onclick="editResult('${match.id}')" style="padding: 8px 16px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        ✏️ Edit
                    </button>
                </div>
            `;
        }
    });
    
    resultsList.innerHTML = html;
}

// Edit existing result
function editResult(matchId) {
    const select = document.getElementById('matchSelect');
    select.value = matchId;
    selectMatch();
    
    // Scroll to form
    document.getElementById('matchResultForm').scrollIntoView({ behavior: 'smooth' });
}

// Export results to JSON
function exportResults() {
    if (Object.keys(actualResults).length === 0) {
        showMessage('No results to export. Please enter some match results first.', 'error');
        return;
    }
    
    const resultsData = {
        lastUpdated: new Date().toISOString(),
        totalMatches: Object.keys(actualResults).length,
        results: actualResults
    };
    
    const dataStr = JSON.stringify(resultsData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `results_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showMessage('✅ Results JSON downloaded! Upload this file to GitHub Pages as "results.json"', 'success');
}

// Show results message
function showResultsMessage(text, type) {
    const messageDiv = document.getElementById('resultsMessage');
    if (!messageDiv) return;
    
    messageDiv.className = type;
    messageDiv.textContent = text;
    messageDiv.style.display = 'block';
    messageDiv.style.padding = '15px';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.marginTop = '15px';
    
    if (type === 'success') {
        messageDiv.style.background = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
    } else {
        messageDiv.style.background = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '1px solid #f5c6cb';
    }
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Made with Bob
