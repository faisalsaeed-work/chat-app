const UserResource = (userData) => {
    return { 
        _id: userData._id,
        name: userData.name,
        email: userData.email,
        createdAt: userData.created_at,
        token: userData.token    
    }
}

module.exports = UserResource