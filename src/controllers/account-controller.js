export const accountController = {
  
    index: {
      handler: function (request, h) {
        let loggedInUser = null;
          if (request.auth.isAuthenticated) {
            loggedInUser = request.auth.credentials;
          }
        const test = loggedInUser ? true : false; 
        const viewData = {
          title: "Account settings",
          user: loggedInUser,
          test: test,
        };
        return h.view("account-view", viewData);
      },
    },
    update: {
        handler: async function (request, h) {
          try {
            const userId = request.auth.credentials._id;
            const userData = request.payload; // New user data from the request
            
            // Retrieve existing user data
            const existingUserData = await db.getUserById(userId);
    
            // Merge existing user data with new data
            const mergedUserData = {
              ...existingUserData,
              ...userData,
              _id: userId, // Keep the _id same
              password: existingUserData.password, // Keep the password same
            };
    
            // Update the user with the merged data
            await db.updateUser(userId, mergedUserData);
    
            return h.response({ message: "Account updated successfully" }).code(200);
          } catch (error) {
            console.error("Error updating account:", error);
            return Boom.badImplementation("Error updating account");
          }
        }
      }
  };
  