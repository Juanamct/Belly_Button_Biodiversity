function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
  console.log(data);
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
    var metaDataArray = data.metadata.filter((sampleNumber) => sampleNumber.id == sample);
      //  5. Create a variable that holds the first sample in the array.
    var result = resultArray[0];
    var metadata = metaDataArray[0];

      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;
    var washingFrequency = parseFloat(metadata.wfreq);

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    yticks = otu_ids.slice(0, 10).map((i) => "OTU " + i.toString()).reverse();

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: sample_values.slice(0,10),
      y: yticks,
      text: otu_labels.slice(0,10),
      type: "bar",
      orientation: "h",
      marker: {
      color: "FFEE97",
      width: 1
      },
    }];

      // 9. Create the layout for the bar chart. 
    var barLayout = {
      
      xaxis: {title: "Sample Values"},
      yaxis: {title: "OTU Ids"},
        title: {
          text: "<b>Top 10 Bacterial Species (OTUs)</b>",
          font: {
           family: "Calibri",
           size: 28,
           color: "#006666"
        }
      },
        font: {
          family: "Calibri, body",
          size: 14,
          color: "#000000"
        },
    }

  // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

// Bubble chart

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      type: "bubble",
      mode: "markers",
      marker: {
        color: otu_ids,
        colorscale: [[0, "#FFF8D5"], [1, "#DAB600"]],
        size: sample_values
      } 
    }];
      
        // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      xaxis: {title: "OTU IDS"},
      hovermode: "closest",
      title: {
        text: "<b>Bacteria Cultures per Sample</b>",
        font: {
          family: "Calibri",
          size: 28,
          color: "#006666"
        }
        },
      font: {
        family: "Calibri, bold",
        size: 18,
        color: "#006666"
      },
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    // 4. Create the trace for the gauge chart.
   var gaugeData = [{
    value: washingFrequency,
    type: "indicator",
    mode: "gauge+number",
    title: {
      text: "<b>Scrubs per Week</b>",
      font: {
        family: "Calibri",
        size: 24,
        color: "#2034346"
      }
      },
    gauge: {
      axis: {range: [null, 10], dtick: 2},
      steps: [
        {range: [0, 2], color: "#D6E6E6"},
        {range: [2, 4], color: "#C1D9D8"},
        {range: [4, 6], color: "#A2C6C5"},
        {range: [6, 8], color: "#88B6B5"},
        {range: [8, 10], color: "#67A1A0"},
      ],
      bar: {color: "FFEE97"},
      bgcolor: "000000",
    }
   }];
         
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      title: {
        text: "<b>Belly Button Washing Frequency</b>",
        font: {
          family: "Calibri",
          size: 28,
          color: "006666"
        }
      },
    
      font: {
        family: "Calibri, bold",
        size: 18,
        color: "##203434"
      },
      plot_bgcolor: "#F8FAFC",
      paper_bgcolor: "#F8FAFC",
      bordercolor: "#000000"
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);

  });
}