function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    //console.log(data);
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#samples-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    //for (const [key, value] of Object.entries(result)) { 
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  })
}
// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
  var samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
  var resultArray = samples.filter((sampleNumber) => sampleNumber.id == sample);
    //  5. Create a variable that holds the first sample in the array.
  var result = resultArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
  var [otu_ids, otu_labels, sample_values] =

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
  yticks = [
      result.otu_ids.slice(0, 10).map((i) => "OTU " + i.toString()).reverse(),
      result.sample_values.slice(0, 10).reverse(),
      result.otu_labels.slice(0, 10).reverse(),
    ];

    // 8. Create the trace for the bar chart. 
  var trace = {
    x: sample_values,
    y: otu_ids,
    type: "bar",
    ticks: {otu_ids, otu_labels},
    orientation: "h",
  };
    
  var barData = [trace];

    // 9. Create the layout for the bar chart. 
  var barLayout = {
    title: "Top 10 Bacterial Species (OTUs)",
    xaxis: {title: "Sample Values"},
    yaxis: {title: "OTU Ids"},
    hovertext: otu_labels,
    hoverinfo: "text"
  };
  // 10. Use Plotly to plot the data with the layout. 
  Plotly.newPlot("bar", barData, barLayout);
});
}
    
  
// // Bubble chart

//     // 1. Create the trace for the bubble chart.
//     var trace = {
//       x: otu_ids,
//       y: sample_values,
//       text: otu_labels,
//       type: "bubble",
//       mode: "markers",
//       marker: {
//         color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//         opacity: [1, 0.8, 0.6, 0.4],
//         size: [40, 60, 80, 100]
//       },  
//       hovertext: otu_labels,
//     };
      
//     var bubbleData = [trace];

//     // 2. Create the layout for the bubble chart.
//     var bubbleLayout = {
//       title: "Bacteria Cultures per Sample",
//       xaxis: "OTU IDS"
//       text: 'OTU ID',
//       hovermode: "closest",
//     };

//     // 3. Use Plotly to plot the data with the layout.
//     Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

//     // 4. Create the trace for the gauge chart.
//    var trace = {
//     value: washingFrequency,
//     type: "indicator",
//     mode: "gauge+number",
//     title: "Scrubs per Week",
//     gauge: {
//       axis: {range: [null, 10], dtick: 2},
//       bar: {color: "black"},
//       bgcolor: "rainbow",
//     }
//    };
   
//     var gaugeData = [trace];
    
//     // 5. Create the layout for the gauge chart.
//     var gaugeLayout = {
//       title: "Belly Button Washing Frequency",
//       font: {
//         family: "Roboto",
//       },
//       plot_bgcolor: "#F8FAFC",
//       paper_bgcolor: "#F8FAFC",
//       bordercolor: "#000000"
     
//     };

//     // 6. Use Plotly to plot the gauge data and layout.
//     Plotly.newPlot("gauge", gaugeData, gaugeLayout);

