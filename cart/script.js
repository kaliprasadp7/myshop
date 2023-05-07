if (!localStorage.getItem('currentUser')) {
    // Redirect user to shop page if accesstoken exists and user is trying to access signup page
    window.location.href = '/';
  }