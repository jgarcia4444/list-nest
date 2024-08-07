const firebaseUser = userCredentialsUserInfo => {
    let {email, uid, accessToken, displayName, phoneNumber, emailVerified} = userCredentialsUserInfo;
    return {
        email, 
        uid,
        accessToken,
        displayName,
        phoneNumber, 
        emailVerified,
    }
};

export default firebaseUser;