Belly_Button_Biodiversity

Background:

What do you think is in your belly button? In 2011, a team of scientists from the biology department of NC State and the Nature Research Center at the North Carolina Museum of Natural Sciences launched the Belly Button Biodiversity Project to find out. For this project, people wiped cotton swabs in or on their belly buttons. 
In total, they discovered 2,368 different microbial species (technically operational taxonomic units, OTUs). Each participant’s belly button hosted about 67 different species. Yet not one was common to every person, and only eight were found on at least 70 percent of participants. The researchers learned that the eight most common species were among the most abundant. They will soon have 600 samples from people all over North America. 


Module 12 Challenge - Belly_Button_Biodiversity

Project:

Roza is a biological researcher in a prominent microbiology labratory.  Roza is tasked with identifying bacterial species (technically operational taxonomic units, OTUs), that have the ability to synthesize proteins that taste like beef.  Roza's lab has partnered with a food start up (Improbable Beef), to research candidate species.  Her hypothesis that there is a microorganism that will offer the taste needed for a non-meat alternative from bacteria on the human body, specifically, the human belly button.  To test her hypothesis Roza has sampled the navels of volunteers across the country to identify bacterial species in the belly button.  The volunteers are anonymous and assigned a ID number.  
 
For those volunteers who are interested in selling their bacteria to Improbable Beef, Roza is excited to create a data visualization dashboard to share her findings with her volunteers in a accessible, interactive and attractive way.  


Roza has a partially completed dashboard that with a panel for demographic information and now needs to visualize the bacterial data for each volunteer. Her volunteers should be able to identify the top 10 bacterial species in their belly buttons. 


Assignment Deliverables - Using JavaScript, Plotly, and D3.js:
  1. Create a Horizontal Bar Chart
  2. Create a Bubble Chart
  3. Create a Gauge Chart
  4. Customize the Dashboard

1. Create a Horizontal Bar Chart
   To display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. 

   a) Code is written to create the arrays when a sample is selected from the dropdown menu
   b) Code is written to create the trace object in the buildCharts() function, and it contains the following:
    	- The y values are the otu_ids in descending order
	- The x values are the sample_values in descending order
	- The hover text is the otu_labels in descending order.
   c) Code is written to create the layout array in the buildCharts() function that creates a title for the chart
   d) When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and the bar chart has the   following:
	- The top 10 sample_values are sorted in descending order
	- The top 10 sample_values as values
	- The otu_ids as the labels

2. Create a Bubble Chart
   That will display the individual’s ID that is selected from the dropdown menu webpage.
 
   a) The code for the trace object in the buildCharts(); function does the following:
	- Sets the otu_ids as the x-axis values
	- Sets the sample_values as the y-axis values
	- Sets the otu_labels as the hover-text values
	- Sets the sample_values as the marker size
	- Sets the otu_ids as the marker colors

   b) The code for the layout in the buildCharts(); function does the following:
	- Creates a title
	- Creates a label for the x-axis
	- The text for a bubble is shown when hovered over

   c) When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard. All three charts should reflect the individual volunteers  data sample when selected from the dropdown menu.

3. Create a Gauge Chart
   That displays the weekly washing frequency's value when an individual ID is selected from the dropdown menu.

   a) The code to build the gauge chart does the following:
	- Creates a title for the chart.
	- Creates the ranges for the gauge in increments of two, with a different color for each increment.
	- Adds the washing frequency value on the gauge chart.
	- The indicator shows the level for the washing frequency on the gauge.
	- The gauge is added to the dashboard.
	- The gauge fits in the margin of the <div> element.
   b) When the webpage loads, the bar and bubble chart are working according to the requirements in Deliverable 1 and 2, respectively, and the gauge chart is working according to the requirements listed for this Deliverable.

4). Customize the Dashboard
    Use your knowledge of HTML and Bootstrap to customize the webpage for your dashboard.

   a) The webpage has three customizations.
   b) When the dashboard is first opened in a browser, ID 940’s data should be displayed in the dashboard, and all three charts should be working according to the requirements when a sample is selected from the dropdown menu.

*App deployed on a free static page hosting service, GitHub Pages.

Source Credit:
http://robdunnlab.com/projects/belly-button-biodiversity/



