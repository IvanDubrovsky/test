let teamHome = document.querySelector('.teamHome');
let teamHomeMatches = document.querySelector('.teamHomeMatches');
let teamHomeGoalsFor = document.querySelector('.teamHomeGoalsFor')
let teamHomeGoalsAgainst = document.querySelector('.teamHomeGoalsAgainst')
let teamAway = document.querySelector('.teamAway');
let teamAwayMatches = document.querySelector('.teamAwayMatches');
let teamAwayGoalsFor = document.querySelector('.teamAwayGoalsFor')
let teamAwayGoalsAgainst = document.querySelector('.teamAwayGoalsAgainst')
let submit = document.querySelector('.submit');
let resultLine = document.querySelector('.resultLine')
let result = document.querySelector('.result')


submit.onclick = function () {
// console.log(teamHome.value);
// console.log(teamHomeMatches.value);
// console.log(teamHomeGoalsFor.value);
// console.log(teamHomeGoalsAgainst.value);
// console.log(teamAway.value);
// console.log(teamAwayMatches.value);
// console.log(teamAwayGoalsFor.value);
// console.log(teamAwayGoalsAgainst.value);
let resultTeamHome = 
	(((+teamHomeGoalsFor.value / +teamHomeMatches.value) + (+teamAwayGoalsAgainst.value / +teamAwayMatches.value)) / 2);
let resultTeamAway = (((+teamAwayGoalsFor.value / +teamAwayMatches.value) + (+teamHomeGoalsAgainst.value / +teamHomeMatches.value)) / 2)

resultLine.textContent = teamHome.value + ' ' + resultTeamHome.toFixed(2) + ' ' + '-' + ' ' + resultTeamAway.toFixed(2) + ' ' + teamAway.value
	if (resultTeamHome + resultTeamAway >= 3) {
		console.log('STAVKA!')
		resultLine.classList.add('stavka')
	}
}

