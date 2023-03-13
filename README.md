# restaurant_reservation_app

A Mock Restaurant Reservation System

- Two categories of users / customers: guest user or registered user. 
- Users should be able to search for a table and reserve.  
   - User doesn’t need to login to the system to reserve a table. If registered users, they can login. 
   - User enters name, phone, email, date and time (date picker), and # of guests for dining and system presents available tables. 
   - Tables have maximum capacity limit i.e., 2, 4, 6, or 8. 
   - Different combinations are allowed, and owner accommodates the seating, for example: someone requests 8 guests and table for 8 is not available but 2 + 6, or 4+4 is     available. System should combine the tables and notify owner they need to combine tables. In this case System reserves both tables.
- If a guest user i.e., not a registered user, system should prompt user to register (Optional) before finalizing the reservation. 
- Registered users will have these fields: 
   - Name, mailing address, billing address (checkbox if same as mailing address), Preferred Diner # (system generated), Earned points (based on $ spent i.e., $1 is 1         point), preferred payment method (cash, credit, check). 
- System should track high traffic days / weekends and a hold fee is required i.e. July 4th will require valid credit card on system to reserve the table. 
	- Notify user no show will have minimum $10 charge. 

![restaurant-system-full](https://user-images.githubusercontent.com/93362798/224846973-4fac4677-aba8-4469-a721-9ea95c70cdea.gif)

## How to use

1. Clone Repository
2. Install NodeJS (https://nodejs.org/en/)
   - RESTART IDE once installed (otherwise computer)
3. Go to terminal and ensure you are in `.../restaurant_reservation_app/frontend/`
4. Run `npm install` in the terminal/command line
   - IGNORE warnings that may appear (you don't need to `npm audit fix --force`)
5. Repeat steps 3 and 4 (but ensure you are in `.../restaurant_reservation_app/backend/` instead)
6. While in `.../restaurant_reservation_app/backend/` you can test if the app 
   - Run `npm run dev` in the terminal/command line to run both front-end and back-end simultaneously
   - Run `npm run client` in the terminal/command line to run the front-end only
   - Run `npm run server` in the terminal/command line to run the back-end only
   - Can also do `npm run client` in 1 terminal and `npm run server` in another terminal to run simultaneously
   - `CTRL+C` in terminal/command line to exit app
