ShoppingWeb - An amazing website HitCount Not Maintained
We developed an end to end Ecommerce web Application using Spring MVC with multiple modules

Project is not maintained anymore here #56
Functionalities:
User Registeration Cell.

CRUD Operations like

User can add product to their cart and purchase summary.
Admin can add product to the product list.
Admin can edit the product details.
Admin can delete the product from the list.
Spring Security
User can login into the site.
The entire site will change according to the role, depending on whether the client is User or Admin.
User can logout after completing.
Spring WebFlow
After adding products the cart the User can checkout using spring WebFlow.
Confirming User Details.
Confirming Shipping and Billing Address.
Receipt.
If the user cancels the webflow, it will go to cancel Page.
If the user submits the checkout, it will go to thank you page with the timing of delivery Report.
Tools and Technologies:
Technology : Bootstrap, Java, Spring MVC, Hibernate, JSP, Maven.
Application Servicer: Apache Tomcat Server.
Database : H2 Database (In memory database)
Installation:
Development Platform - Eclipse / IntelliJ Idea

Download Eclipse.
Download IntelliJ Idea.
Server - Apache Tomcat Server

Download Apache Server.
Build Tool - Maven

Download Maven.
Database - H2 Database

Download H2 Database.
Configuring tomcat with Eclipse (windows) - Click Here.

Installation of maven in eclipse - Click Here.

Clone the repository and import it to eclipse.

Run your H2 Database.

Configure your databse configuration in application-context.xml.

Database properties:

   <bean id="dataSource"
     class="org.springframework.jdbc.datasource.DriverManagerDataSource">
     <property name="driverClassName" value=YOUR DB DRIVER CLASS NAME" />
     <property name="url" value="YOUR DB URL" />
     <property name="username" value="YOUR DB USERNAME" />
     <property name="password" value="YOUR DB PASSWORD" />
   </bean>
Database Dialect:

<prop key="hibernate.dialect">YOUR DB DIALECT</prop>
Run the server.

Somethings wrong!!
If you find that something's wrong with this package, you can let me know by raising an issue on the GitHub issue tracker, or take it as a task and 🧑‍💻 resolve it 💪 --> create a PullRequest 🛠.

Contribution
Contributors are most welcome.
