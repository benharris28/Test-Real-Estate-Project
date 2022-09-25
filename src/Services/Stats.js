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

  //Update Game History
  
  let updatedGames = [];
  const todaysGame = userGameInfo.id
  const games = stats.games
  const lastGame = games[games.length - 1]
  console.log(lastGame)

  if (stats) {
    updatedGames = [...stats.games, userGameInfo]
    console.log(updatedGames)
  } else {
    updatedGames = [userGameInfo]
    console.log(updatedGames)
  }

  //Update Game Streak
  let gameStreakUpdate;
  
  if (stats) {
  

    if (todaysGame - lastGame.id == 1) {
      gameStreakUpdate = stats.gameStreak + 1
    } else {
      gameStreakUpdate = 1
    }
    
  } else {
    gameStreakUpdate = 1
  }

  // Update win streak
  let winStreakUpdate;
  
  if (todaysGame - lastGame.id == 1) {
    if (lastGame.win && todaysGame.win) {
      winStreakUpdate = stats.winStreak + 1
    } else {
      winStreakUpdate = 1
    }
  }

  //Update max win streak
  

  //Package the update
  const updatedStats = {
    games: updatedGames,
    gameStreak: gameStreakUpdate,
    winStreak: winStreakUpdate,
    maxWinStreak: ''
  }

  

  

  LocalStorage.setStats(updatedStats)
}

