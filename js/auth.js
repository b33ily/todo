class AuthManager {
  constructor() {
    this.user = {
      name: 'Гость',
      level: 1,
      completedTasks: 0,
      theme: 'light'
    };
    this.loadUserData();
  }

  loadUserData() {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      this.user = JSON.parse(savedData);
      document.documentElement.setAttribute('data-theme', this.user.theme);
    }
  }
}

const authManager = new AuthManager();