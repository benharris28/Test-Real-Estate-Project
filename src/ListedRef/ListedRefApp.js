import { html, Component } from 'htm/preact';

import { Provider } from 'unistore/full/preact.es.js';

import store from './store';

import { loadUserStats } from './actions';

import * as LocalStorage from './localStorage';

import * as Tracking from './tracking';

import Game from './components/Game';
import AboutModal from './components/AboutModal';
import StatsModal from './components/StatsModal';
import HelpModal from './components/HelpModal';
import ToastStack from './components/ToastStack';

import { HelpIcon, StatsIcon, AboutIcon } from './components/icons';

import Audio from './interfaces/audio';

const firstVisit = LocalStorage.isFirstVisit();

class App extends Component {
  constructor(props) {
    super(props);

    if (props.initQueryParams && props.initQueryParams.reset === '1') {
      LocalStorage.clear();
    }

    this.state = { activeModal: null };

    window.addEventListener('resize', e => {
      this.setState({ height: window.innerHeight + 'px' });
    });
  }

  setupAudio() {
    if (!this.startedAudio) {
      this.startedAudio = true;
      Audio.init();
    }
  }

  componentDidMount() {
    this.setState({ height: window.innerHeight + 'px' });

    if (firstVisit) {
      this.openModal('help');
    }
  }

  openModal(activeModal, e) {
    this.setState({ activeModal });

    if (e) {
      e.preventDefault();
      e.stopPropagation();

      switch (activeModal) {
        case 'about':
          Tracking.openAbout();
          break;
        case 'stats':
          Tracking.openStats();
          break;
        case 'help':
          Tracking.openHelp();
          break;
      }
    }
  }

  closeModal() {
    this.setState({ activeModal: null });
  }

  render({ initQueryParams }, { activeModal, height = '100%' }) {
    return html`
      <div
        id="app"
        class="app"
        onClick=${this.setupAudio.bind(this)}
        style=${`height:${height};`}
      >
        <header class="header">
          <span class="header__logo">🏡</span>
          <button class="header__button" onClick=${e =>
            this.openModal('about', e)}><${AboutIcon}/></button>
          <h1 class="listed-title">Listed</div>
          <button class="header__button" onClick=${e =>
            this.openModal('stats', e)}><${StatsIcon}/></button>
          <button class="header__button" onClick=${e =>
            this.openModal('help', e)}><${HelpIcon}/></button>
        </header>

        <${AboutModal}
          show=${activeModal === 'about'}
          onClose=${() => this.closeModal()} />

        <${StatsModal}
          show=${activeModal === 'stats'}
          onClose=${() => this.closeModal()} />

        <${HelpModal}
          show=${activeModal === 'help'}
          onClose=${() => this.closeModal()} />

        <${Game} initQueryParams=${initQueryParams} />

        <${ToastStack} />
      </div>
    `;
  }
}

loadUserStats().then(() => {
  const userStats = store.getState().userStats;
  const numPlays = userStats.games.filter(game => game.gameOver).length;
  const numWins = userStats.games.filter(game => game.guessed).length;

  Tracking.setGlobalProperties({
    isRepeatUser: !firstVisit,
    numPlays,
    numWins,
  });
});

export default class AppWithStore extends Component {
  render(props) {
    return html`
      <${Provider} store=${store}>
        <${App} ...${props} firstVisit=${firstVisit} />
      </Provider>
    `;
  }
}
