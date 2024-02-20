# E-Wholesale App Requirments

App requirements specify what the user should be able to do on the app, as well as what they can expect from the system itself, in other words, these are the functional and non-functional requirements:

**Functional requirements**

1. The system should incorporate 2 different types of users: Admin, and Representative (REP).
2. The system has the following entities defined: Inventory (a collection of all the wholesale goods in the system), the users of the system, and the retailers registered with the system.
3. Representative accounts can only be provisioned by the admin, where they will be given an email and password to log in with. Other identity information will be filled out by the admin at the time of account creation.
4. An admin has read and write access on all entities in the system. I.e., an admin can add new items to the inventory, register a new retailer with the system, or provision new representative accounts.
5. A representative can only view the items in the inventory and place orders for retailers on their behalf.
6. An order will consist of: What items have been ordered, the frequency of each item, the retailer ordering this, the REP ID placing the order, the date of the order, the total value of the order.
7. Once an order is placed, the retailer will be notified with an email with the order details.
8. Payments can either be: Cash on delivery, or through the web app.
9. Payments through the app will be through Stripe. 
10. As an admin, they should be able to view a summary of the whole system in the home page of the admin dashboard web app. Summary should include: # of items in inventory, # of users registered, # of retailers registered with the system, # of orders, total revenue generated.
11. As an admin, they should be able to view all REPs on the system through the 'representatives' page with the ability to** create**, **edit**, and **delete** existing REPs.
12. As an admin, they should be able to view the whole inventory through the 'inventory' page. It should show all the items in the system, how many are available of each item, the brand, the category, and the unit price of each item, .
13. An admin should be able add, edit, and delete items from the system database.
14. As an admin, they can bulk add items to the inventory by uploading an excel (.xlsx) file which will contain the name of the item, the quantity, the brand, the category, and the unit price. 
15. As an admin, they should be able to view all registered retailers. The details of each retailer will include: Name, Location, Logo.
16. Clicking on a retailer will show further details such as phone number, email, date registered, and an option to view past orders.
﻿ 



