export const aboutController = {
  
    index: {
      handler: function (request, h) {
        let loggedInUser = null;
          if (request.auth.isAuthenticated) {
            loggedInUser = request.auth.credentials;
          }
        const test = loggedInUser ? true : false; 
        const viewData = {
          title: "About Playtime",
          user: loggedInUser,
          test: test,
        };
        return h.view("about-view", viewData);
      },
    },
  };
  