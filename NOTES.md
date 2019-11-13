First and foremost, thank you Humu for the opportunity to do this challenge. I am very humbled for this opportunity and I hope you all enjoy my project today. Here I am laying out the process in making this project and also answer the questions given to me: 

# 1. Are there any questions would you ask to a designer who sent this mockup and spec?
# 2. Did you make any assumptions while developing this page?
# 3. You don’t need to make this responsive but if given more time, how would you make it responsive?
# 4.If given more time, how would you improve readability and accessibility?


PROJECT CREATION: 
1. Command Line "npx create-react-app humu"
2. Enter directory with "cd humu"
3. Run Project: "npm start


PACKAGES INSTALLED: 
1. axios
2. bootstrap/react-bootstrap
3. react-chartjs-2 / chart.js

MY PROCESS: 
1. I first started anaylyzing the mockup to see think in components. How am I going to divide this into its own components. Which components should be class based and which should be functional. 

2. I converted the data into JSON to make it easier on me when it came to fetch and data and using this information to check out the departments available. Became tough for me because there were individuals with similar positions and many duplicates in terms of job title. Nonetheless, I picked up some the the major departments and listed them out for later usage. 

3. Used react-bootstrap for the navbar and grid layout system. Was able to import the brand and make a simple navbar.

4. Then came the custom graph. It was hard for me to identify what type of graph is this. To answer the first question given to me: 

# Are there any questions would you ask to a designer who sent this mockup and spec?

My questions would be: 
    1. What type of graph is this mockup trying to display?
    2. What does each part of this graph repesent? Explain in detail.
    3. Does the width of each department determine the number of employees? 
    4. Is the number of employees on the mockup actually reflecting the data given to me or is the number shown just used as an example and doesn’t reflect the data? 
    5. What lead job title should be represented in the chart? (I see Kaitlyn as VP but Branson is a manager??)
    6. What changes am I allowed to make?
    7. Considering that there are many similar roles, what data does this chart represent ? Is it scoped to a certain lead or is it displaying all the employees in a certain department at once? <-- very important to understand and display the accuracy of the data wanted. 

    Having these questions answered would definitely play a huge role in a potential change in display and perhaps maybe more accuracy on terms of what is needed out of the team. 

--------------------------------------------------------------------------------------

5. Nonetheless, I created this graph using a Divider component and made sure that every section was identical to the mockup. Passed down props such as department, lader, and employees to showcase differently on each Divider component. To gather information on the departments I used axios to get the json file and console logged the information. 

6. Lots of errors made. Made use of the Google/React developer tools to see what I was doing wrong. 


# EXTRAS:

7. Decided to use more data visualization to simulate a real-world report of whats going on in each department. Something more classic and I felt like it would be beneficial to add to give it a more official look. Implemented chart js and added the data necessary to display the three additional charts. 


REMAINING QUESTIONS:

# Did you make any assumptions while developing this page?


I did. I made the assumption that the width of the graph in the mockup meant the total number of employees. When I tell you I spent the majority of my day analyzing this mockup to see what I can do, and what it represents Im not kidding. I also made the assumption that since Kaitlyn is a VP, everyone else should be a VP as well, but I found out that there were different leadership roles that I had to filter out to see who is the lead for a certain company. I assumed that the data would be simple in terms of show how many people belong in a certain deparment but was wrong. The data is hard to read simply because there are many nested individuals and many similar roles. 

Because of my assumptions, I reorganized this graph to display leaders that sit atop of the hierachy and went down from there! I did it to ensure accuracy because Branson Delgado belongs in "Residential Architecture" not in "Industrial"

These are the assumptions I made but again, in a real world scenario, asking questions to my team would allow me to get a better understanding of making this vision (the mockup) come to life.



# 3. You don’t need to make this responsive but if given more time, how would you make it responsive?

To make it responsive I would make use of media queries and css styles. I would test out the application using the Google developer tools to make sure that this web page is looking good on ALL platforms. Taking my time to individually fix some styles and making sure the media queries for each device is fully good to go.


# 4.If given more time, how would you improve readability and accessibility?

Improving readability and accessibility are important. Best practices for those would be improving semantic HTML/JSX. If any additional components need to be made where buttons are necessary, using ARIA-atributes would be helpful in terms of accesibility. Having ARIA labels allows the client to know what certain parts of the app can do. Making use of the keyboard is also a big one. Lets saying for the nav links displayed on the nav bar accessed a different section on the web page. Making use of the keyboard and using the tabindex is a great way to improvie accessibilty. 
It would allow me to control the order of elements focused while tabbing outside of the default order. 

I would increase certain font sizes and change some styling to be better in terms of readability.



# HOW THINGS CAN BE BETTER

Honestly being able to make this project opened my eyes of the importance of what a team can do. Simply because I put myself in a scenario where I can ask questions but still be able to produce at the same time. I know there are many things that I would like to know about the mockup that woulf allow me to be more efficient and honestly repesent the data in a way thats consistent throughout. I appreciated this challenge so much because it allowed me to grow and even step out and learn more than what I was expecting.

Thank you for this opportunity HUMU, I hope that I am the right candidate for this position. Would be a honor to represent the change needed to help enrich people's lives. Thank you!
