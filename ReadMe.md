# Configure the pgServer

    -setup your env file 
    - run the compose file
 #Sequelize cheat-sheet
 -"<https://gist.github.com/bgoonz/cd6312bfeae2d3f07655cb84e30413e9>"

- chore:
    1. Authentication =>
    using JWT bearer token:
    involves signIn ::
        a. create a user
        --find a user with the given email
        --compare the passwords
        --create a token and return the token
        b. verify the user // /isAuthenticated resource for authorisation
            --verify the token
                => make sure to check the token is valid and the user exists as well
            --return the user's Id

    2. Authorization
        More or less it is like a role based access
        using roles:
            -ADMIN
            -CUSTOMER
            -AUTHORITY
