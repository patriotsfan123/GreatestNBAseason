// All NBA seasons data
const allSeasons = [
    { rank: 1, score: 154.8, player: "Michael Jordan", season: "1987-88", ppg: 35.0, rpg: 5.5, apg: 5.9, vorp: 12.5, per: 31.7, bpm: 13.0, ws: 21.2, mvp: "MVP" },
    { rank: 2, score: 137.7, player: "Michael Jordan", season: "1988-89", ppg: 32.5, rpg: 8.0, apg: 8.0, vorp: 11.4, per: 31.1, bpm: 11.9, ws: 19.8, mvp: "2nd" },
    { rank: 3, score: 134.6, player: "Shaquille O'Neal", season: "1999-00", ppg: 29.7, rpg: 13.6, apg: 3.8, vorp: 9.0, per: 30.6, bpm: 9.3, ws: 18.6, mvp: "MVP" },
    { rank: 4, score: 134.3, player: "David Robinson", season: "1993-94", ppg: 29.8, rpg: 10.7, apg: 4.8, vorp: 11.4, per: 30.7, bpm: 11.9, ws: 20.0, mvp: "MVP" },
    { rank: 5, score: 133.8, player: "Michael Jordan", season: "1989-90", ppg: 33.6, rpg: 6.9, apg: 6.3, vorp: 10.6, per: 31.2, bpm: 11.2, ws: 19.0, mvp: "3rd" },
    { rank: 6, score: 132.7, player: "Michael Jordan", season: "1990-91", ppg: 31.5, rpg: 6.0, apg: 5.5, vorp: 10.8, per: 31.6, bpm: 12.0, ws: 20.3, mvp: "MVP" },
    { rank: 7, score: 131.4, player: "Michael Jordan", season: "1995-96", ppg: 30.4, rpg: 6.6, apg: 4.3, vorp: 9.8, per: 29.4, bpm: 10.5, ws: 20.4, mvp: "MVP" },
    { rank: 8, score: 130.2, player: "LeBron James", season: "2008-09", ppg: 28.4, rpg: 7.6, apg: 7.2, vorp: 11.8, per: 31.7, bpm: 13.2, ws: 20.3, mvp: "MVP" },
    { rank: 9, score: 129.8, player: "Giannis Antetokounmpo", season: "2019-20", ppg: 29.5, rpg: 13.6, apg: 5.6, vorp: 6.6, per: 31.9, bpm: 11.5, ws: 11.1, mvp: "MVP" },
    { rank: 10, score: 128.1, player: "Michael Jordan", season: "1992-93", ppg: 32.6, rpg: 6.7, apg: 5.5, vorp: 10.2, per: 29.7, bpm: 11.2, ws: 17.2, mvp: "3rd" },
    { rank: 11, score: 127.3, player: "LeBron James", season: "2009-10", ppg: 29.7, rpg: 7.3, apg: 8.6, vorp: 10.3, per: 31.1, bpm: 11.8, ws: 18.5, mvp: "MVP" },
    { rank: 12, score: 126.6, player: "Kareem Abdul-Jabbar", season: "1975-76", ppg: 27.7, rpg: 16.9, apg: 5.0, vorp: 9.0, per: 27.2, bpm: 8.5, ws: 17.0, mvp: "MVP" },
    { rank: 13, score: 126.0, player: "Kevin Garnett", season: "2003-04", ppg: 24.2, rpg: 13.9, apg: 5.0, vorp: 10.0, per: 29.4, bpm: 10.2, ws: 18.3, mvp: "MVP" },
    { rank: 14, score: 124.6, player: "LeBron James", season: "2012-13", ppg: 26.8, rpg: 8.0, apg: 7.3, vorp: 9.9, per: 31.6, bpm: 11.7, ws: 19.3, mvp: "MVP" },
    { rank: 15, score: 124.0, player: "Nikola Jokić", season: "2024-25", ppg: 29.6, rpg: 12.7, apg: 10.2, vorp: 9.8, per: 32.0, bpm: 13.3, ws: 16.4, mvp: "2nd" },
    { rank: 16, score: 123.0, player: "Dwyane Wade", season: "2008-09", ppg: 30.2, rpg: 5.0, apg: 7.5, vorp: 9.6, per: 30.4, bpm: 10.6, ws: 14.7, mvp: "3rd" },
    { rank: 17, score: 121.9, player: "Michael Jordan", season: "1991-92", ppg: 30.1, rpg: 6.4, apg: 6.1, vorp: 9.2, per: 27.7, bpm: 9.7, ws: 17.7, mvp: "MVP" },
    { rank: 18, score: 121.6, player: "Russell Westbrook", season: "2016-17", ppg: 31.6, rpg: 10.7, apg: 10.4, vorp: 9.3, per: 30.6, bpm: 11.1, ws: 13.1, mvp: "MVP" },
    { rank: 19, score: 121.3, player: "James Harden", season: "2018-19", ppg: 36.1, rpg: 6.6, apg: 7.5, vorp: 9.3, per: 30.6, bpm: 11.0, ws: 15.2, mvp: "2nd" },
    { rank: 20, score: 121.0, player: "Hakeem Olajuwon", season: "1992-93", ppg: 26.1, rpg: 13.0, apg: 3.5, vorp: 7.8, per: 27.3, bpm: 7.5, ws: 15.8, mvp: "6th" },
    { rank: 21, score: 120.9, player: "Giannis Antetokounmpo", season: "2021-22", ppg: 29.9, rpg: 11.6, apg: 5.8, vorp: 7.4, per: 32.1, bpm: 11.2, ws: 12.9, mvp: "2nd" },
    { rank: 22, score: 120.3, player: "Nikola Jokić", season: "2021-22", ppg: 27.1, rpg: 13.8, apg: 7.9, vorp: 9.8, per: 32.8, bpm: 13.7, ws: 15.2, mvp: "MVP" },
    { rank: 23, score: 120.2, player: "LeBron James", season: "2007-08", ppg: 30.0, rpg: 7.9, apg: 7.2, vorp: 9.8, per: 29.1, bpm: 10.9, ws: 15.2, mvp: "4th" },
    { rank: 24, score: 120.1, player: "Chris Paul", season: "2008-09", ppg: 22.8, rpg: 5.5, apg: 11.0, vorp: 9.9, per: 30.0, bpm: 11.0, ws: 18.3, mvp: "2nd" },
    { rank: 25, score: 120.0, player: "Michael Jordan", season: "1986-87", ppg: 37.1, rpg: 5.2, apg: 4.6, vorp: 10.6, per: 29.8, bpm: 10.8, ws: 16.9, mvp: "2nd" },
    { rank: 26, score: 119.6, player: "Nikola Jokić", season: "2023-24", ppg: 26.4, rpg: 12.4, apg: 9.0, vorp: 10.6, per: 31.0, bpm: 13.2, ws: 17.0, mvp: "MVP" },
    { rank: 27, score: 119.3, player: "Kevin Garnett", season: "2004-05", ppg: 22.2, rpg: 13.5, apg: 5.7, vorp: 9.1, per: 28.2, bpm: 9.5, ws: 16.1, mvp: "3rd" },
    { rank: 28, score: 119.2, player: "Giannis Antetokounmpo", season: "2018-19", ppg: 27.7, rpg: 12.5, apg: 5.9, vorp: 7.4, per: 30.9, bpm: 10.4, ws: 14.4, mvp: "MVP" },
    { rank: 29, score: 119.1, player: "Kobe Bryant", season: "2005-06", ppg: 35.4, rpg: 5.3, apg: 4.5, vorp: 8.0, per: 28.0, bpm: 7.6, ws: 15.3, mvp: "4th" },
    { rank: 30, score: 118.7, player: "Kevin Durant", season: "2013-14", ppg: 32.0, rpg: 7.4, apg: 5.5, vorp: 9.6, per: 29.8, bpm: 10.2, ws: 19.2, mvp: "MVP" },
    { rank: 31, score: 118.5, player: "Karl Malone", season: "1996-97", ppg: 27.4, rpg: 9.9, apg: 4.5, vorp: 7.8, per: 28.9, bpm: 8.3, ws: 16.7, mvp: "MVP" },
    { rank: 32, score: 118.4, player: "Michael Jordan", season: "1996-97", ppg: 29.6, rpg: 5.9, apg: 4.3, vorp: 8.6, per: 27.8, bpm: 8.9, ws: 18.3, mvp: "2nd" },
    { rank: 33, score: 118.0, player: "Stephen Curry", season: "2015-16", ppg: 30.1, rpg: 5.4, apg: 6.7, vorp: 9.5, per: 31.5, bpm: 11.9, ws: 17.9, mvp: "MVP" },
    { rank: 34, score: 117.9, player: "Shai Gilgeous-Alexander", season: "2024-25", ppg: 32.7, rpg: 5.0, apg: 6.4, vorp: 8.8, per: 30.7, bpm: 11.5, ws: 16.7, mvp: "MVP" },
    { rank: 35, score: 117.5, player: "Chris Paul", season: "2007-08", ppg: 21.1, rpg: 4.0, apg: 11.6, vorp: 9.3, per: 28.3, bpm: 10.4, ws: 17.8, mvp: "2nd" },
    { rank: 36, score: 117.1, player: "Kareem Abdul-Jabbar", season: "1976-77", ppg: 26.2, rpg: 13.3, apg: 3.9, vorp: 8.7, per: 27.8, bpm: 9.4, ws: 17.8, mvp: "MVP" },
    { rank: 37, score: 116.9, player: "LeBron James", season: "2011-12", ppg: 27.1, rpg: 7.9, apg: 6.2, vorp: 7.6, per: 30.7, bpm: 10.9, ws: 14.5, mvp: "MVP" },
    { rank: 38, score: 116.9, player: "Kevin Garnett", season: "2002-03", ppg: 23.0, rpg: 13.4, apg: 6.0, vorp: 8.7, per: 26.4, bpm: 8.4, ws: 15.6, mvp: "2nd" },
    { rank: 39, score: 116.5, player: "Hakeem Olajuwon", season: "1993-94", ppg: 27.3, rpg: 11.9, apg: 3.6, vorp: 7.3, per: 25.3, bpm: 6.8, ws: 14.3, mvp: "MVP" },
    { rank: 40, score: 116.4, player: "David Robinson", season: "1991-92", ppg: 23.2, rpg: 12.2, apg: 2.7, vorp: 7.4, per: 27.5, bpm: 9.4, ws: 13.9, mvp: "6th" },
    { rank: 41, score: 116.3, player: "David Robinson", season: "1994-95", ppg: 27.6, rpg: 10.8, apg: 2.9, vorp: 8.7, per: 29.1, bpm: 9.2, ws: 17.5, mvp: "MVP" },
    { rank: 42, score: 115.9, player: "Luka Dončić", season: "2023-24", ppg: 33.9, rpg: 9.2, apg: 9.8, vorp: 8.0, per: 28.1, bpm: 9.9, ws: 12.0, mvp: "5th" },
    { rank: 43, score: 115.8, player: "Tracy McGrady", season: "2002-03", ppg: 32.1, rpg: 6.5, apg: 5.5, vorp: 9.3, per: 30.3, bpm: 10.5, ws: 16.1, mvp: "4th" },
    { rank: 44, score: 115.3, player: "Kareem Abdul-Jabbar", season: "1973-74", ppg: 27.0, rpg: 14.5, apg: 4.8, vorp: 8.6, per: 24.4, bpm: 7.5, ws: 18.4, mvp: "MVP" },
    { rank: 45, score: 115.2, player: "David Robinson", season: "1995-96", ppg: 25.0, rpg: 12.2, apg: 3.0, vorp: 8.3, per: 29.4, bpm: 8.9, ws: 18.3, mvp: "5th" },
    { rank: 46, score: 115.1, player: "Michael Jordan", season: "1984-85", ppg: 28.2, rpg: 6.5, apg: 5.9, vorp: 7.4, per: 25.8, bpm: 7.3, ws: 14.0, mvp: "2nd" },
    { rank: 47, score: 115.1, player: "Shaquille O'Neal", season: "2000-01", ppg: 28.7, rpg: 12.7, apg: 3.7, vorp: 7.1, per: 30.2, bpm: 7.7, ws: 14.9, mvp: "2nd" },
    { rank: 48, score: 115.0, player: "Giannis Antetokounmpo", season: "2020-21", ppg: 28.1, rpg: 11.0, apg: 5.9, vorp: 5.6, per: 29.2, bpm: 9.0, ws: 10.2, mvp: "3rd" },
    { rank: 49, score: 114.3, player: "Nikola Jokić", season: "2022-23", ppg: 24.5, rpg: 11.8, apg: 9.8, vorp: 8.8, per: 31.5, bpm: 13.0, ws: 14.9, mvp: "4th" },
    { rank: 50, score: 114.0, player: "Kobe Bryant", season: "2006-07", ppg: 31.6, rpg: 5.7, apg: 5.4, vorp: 6.1, per: 26.1, bpm: 5.9, ws: 13.0, mvp: "3rd" },
    { rank: 51, score: 113.8, player: "Nikola Jokić", season: "2020-21", ppg: 26.4, rpg: 10.8, apg: 8.3, vorp: 8.8, per: 31.3, bpm: 12.1, ws: 15.6, mvp: "MVP" },
    { rank: 52, score: 113.0, player: "Michael Jordan", season: "1997-98", ppg: 28.7, rpg: 5.8, apg: 3.5, vorp: 7.1, per: 25.2, bpm: 6.9, ws: 15.8, mvp: "MVP" },
    { rank: 53, score: 112.5, player: "James Harden", season: "2016-17", ppg: 29.1, rpg: 8.1, apg: 11.2, vorp: 8.0, per: 27.4, bpm: 8.7, ws: 15.0, mvp: "2nd" },
    { rank: 54, score: 112.5, player: "James Harden", season: "2019-20", ppg: 34.3, rpg: 6.6, apg: 7.5, vorp: 7.3, per: 29.1, bpm: 9.6, ws: 13.1, mvp: "5th" },
    { rank: 55, score: 112.4, player: "James Harden", season: "2017-18", ppg: 30.4, rpg: 5.4, apg: 8.8, vorp: 7.7, per: 29.8, bpm: 9.9, ws: 15.4, mvp: "MVP" }
];

// State
let filteredSeasons = [...allSeasons];
let selectedSeason = null;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const playerFilter = document.getElementById('playerFilter');
const tableBody = document.getElementById('tableBody');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

// Initialize
function init() {
    populatePlayerFilter();
    renderTable();
    setupEventListeners();
}

// Populate player filter dropdown
function populatePlayerFilter() {
    const uniquePlayers = ['All', ...new Set(allSeasons.map(s => s.player))].sort();
    playerFilter.innerHTML = uniquePlayers.map(player => 
        `<option value="${player}">${player}</option>`
    ).join('');
}

// Get medal icon SVG
function getMedalIcon(rank) {
    const colors = {
        1: 'medal-gold',
        2: 'medal-silver',
        3: 'medal-bronze'
    };
    
    if (rank <= 3) {
        return `<svg class="medal-icon ${colors[rank]}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="8" r="6"></circle>
            <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"></path>
        </svg>`;
    } else if (rank <= 10) {
        return `<svg class="award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>`;
    }
    return '';
}

// Get row class based on MVP status
function getRowClass(mvp) {
    if (mvp === "MVP") return 'mvp-row';
    if (mvp === "2nd") return 'second-row';
    return 'other-row';
}

// Render table
function renderTable() {
    tableBody.innerHTML = filteredSeasons.map(season => `
        <tr class="${getRowClass(season.mvp)}" data-rank="${season.rank}">
            <td>
                <div class="rank-cell">
                    ${getMedalIcon(season.rank)}
                    <span class="rank-number">#${season.rank}</span>
                </div>
            </td>
            <td>
                <span class="score-cell">${season.score}</span>
            </td>
            <td>
                <span class="player-name">${season.player}</span>
            </td>
            <td>
                <div class="season-cell">
                    <span>${season.season}</span>
                    ${season.mvp === "MVP" ? '<span class="mvp-badge">MVP</span>' : ''}
                    ${season.mvp && season.mvp !== "MVP" ? `<span class="voting-badge">${season.mvp}</span>` : ''}
                </div>
            </td>
        </tr>
    `).join('');
}

// Filter seasons
function filterSeasons() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedPlayer = playerFilter.value;
    
    filteredSeasons = allSeasons.filter(season => {
        const matchesSearch = season.player.toLowerCase().includes(searchTerm) || 
                             season.season.includes(searchTerm);
        const matchesFilter = selectedPlayer === 'All' || season.player === selectedPlayer;
        return matchesSearch && matchesFilter;
    });
    
    renderTable();
}

// Show modal with season details
function showModal(rank) {
    const season = allSeasons.find(s => s.rank === rank);
    if (!season) return;
    
    selectedSeason = season;
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-player-name">${season.player}</h2>
            <p class="modal-season">${season.season} Season</p>
        </div>

        <div class="ranking-banner">
            <p>Overall Ranking</p>
            <div class="ranking-content">
                <span class="ranking-number">#${season.rank}</span>
                <div class="score-display">
                    <p class="score-value">${season.score}</p>
                    <p class="score-label">Total Score</p>
                </div>
            </div>
        </div>

        <h3 class="stats-title">Season Statistics</h3>
        
        <div class="stats-grid">
            <div class="stat-card ppg">
                <p class="stat-label">Points Per Game</p>
                <p class="stat-value">${season.ppg}</p>
                <p class="stat-abbr">PPG</p>
            </div>
            
            <div class="stat-card rpg">
                <p class="stat-label">Rebounds Per Game</p>
                <p class="stat-value">${season.rpg}</p>
                <p class="stat-abbr">RPG</p>
            </div>
            
            <div class="stat-card apg">
                <p class="stat-label">Assists Per Game</p>
                <p class="stat-value">${season.apg}</p>
                <p class="stat-abbr">APG</p>
            </div>
            
            <div class="stat-card per">
                <p class="stat-label">Player Efficiency</p>
                <p class="stat-value">${season.per}</p>
                <p class="stat-abbr">PER</p>
            </div>
            
            <div class="stat-card ws">
                <p class="stat-label">Win Shares</p>
                <p class="stat-value">${season.ws}</p>
                <p class="stat-abbr">WS</p>
            </div>
            
            <div class="stat-card bpm">
                <p class="stat-label">Box Plus/Minus</p>
                <p class="stat-value">${season.bpm}</p>
                <p class="stat-abbr">BPM</p>
            </div>
            
            <div class="stat-card vorp">
                <p class="stat-label">Value Over Replace</p>
                <p class="stat-value">${season.vorp}</p>
                <p class="stat-abbr">VORP</p>
            </div>
            
            <div class="stat-card mvp">
                <p class="stat-label">MVP Status</p>
                <p class="stat-value">${season.mvp}</p>
                <p class="stat-abbr">Voting</p>
            </div>
        </div>

        <div class="modal-note">
            <p><strong>Note:</strong> Rankings are calculated using advanced metrics including PER, Win Shares, VORP, BPM, and on/off court impact</p>
        </div>
    `;
    
    modal.classList.add('active');
}

// Hide modal
function hideModal() {
    modal.classList.remove('active');
    selectedSeason = null;
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', filterSeasons);
    playerFilter.addEventListener('change', filterSeasons);
    
    tableBody.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        if (row) {
            const rank = parseInt(row.dataset.rank);
            showModal(rank);
        }
    });
    
    closeModal.addEventListener('click', hideModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
}

// Start the app
init();