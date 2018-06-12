class LoginService {
  login($username, $password) {
    let remoteData = {
      success: true,
      token: 'user token',
      userInfo: {
        username: $username,
        password: $password,
      },
    };

    if (remoteData.success) {
      return true;
    }
  }
}

export default new LoginService();
