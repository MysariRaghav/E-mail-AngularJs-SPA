# E-mail-AngularJs-SPA

# Requirments:

Angular application

1.	Create a login page
a.	Should be able to enter username / password
b.	Once login is clicked, it should check the validity of the user and login

2.	Sign up page
a.	Option to register as new user
b.	Fields needed for signup
i.	Username
ii.	Password
iii.	Firstname
iv.	Lastname
v.	Email
vi.	Phone
vii.	Location

3.	After successful login the user should land up in the home page.
a.	Links in the home page
i.	Profile
ii.	Messages
iii.	Logout

4.	Profile page
a.	Option for updating the user basic information
i.	Username
ii.	Password
iii.	Firstname
iv.	Lastname
v.	Email
vi.	Phone
vii.	Location

5.	Messages page
a.	List all the messages available for the user
b.	Once the user clicks on a message show the entire message in a different page with an options to 
i.	Reply : once a reply is received it should show below the original message.
ii.	Delete : once deleted need to redirect the user to messages listing page
iii.	Mark as important
iv.	Back to messages

6.	Logout
a.	Once clicked on logout, redirect the user back to login page.

7.	All the data needs to stored in local storage as we haven't discussed any database till now.

8.	Sample message json should look like

a.	[
        {
            "recipient":"Arun",
            "recipient_img":"http://simpleicon.com/wp-content/uploads/user1.png",
            "sender":"Nanda",
            "sender_img":"http://simpleicon.com/wp-content/uploads/user1.png",
            "title":"This is a sample message to Arun.",
            "description":"This is a sample description to the message which has the above title",
            "created_at":"2017-01-19 09:45:00",
            "important":"0"
        }
]

