import * as LocalStorage from '../LocalStorage';

//Create a stats object (need games, consecutive games played, consecutive games won, max streak)


  
//Download stats object from local storage if it exists
  
//When game is finished, push the new game and result to local storage
//Check for gameOver, and push new game (userGameInfo) to games array


//Calculate if there is a streak (consecutive games with a win)
//Check for gameOver
//Add game to games array

export const updateStats = (userGameInfo) => {
  //add new game to stats
  
  const newStats = {
    games: [],
    gameStreak: '',
    winStreak: '',
    maxWinStreak: ''
  }
  
  const stats = LocalStorage.getStats();
  let updatedGames = [];

  if (stats) {
    updatedGames = [...stats.games, userGameInfo]
    console.log(updatedGames)
  } else {
    updatedGames = [userGameInfo]
    console.log(updatedGames)
  }

  const updatedStats = {
    games: updatedGames,
    gameStreak: '',
    winStreak: '',
    maxWinStreak: ''
  }

  LocalStorage.setStats(updatedStats)
}

