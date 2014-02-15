function infoGrid() {

	var self = this; // for internal d3 functions
	
  
  //create the grid with slickgrid

  var grid;

  var columns = [
    {id: "stock", name: "Stock Name", field: "Stock", width: 120},
    {id: "pe", name: "P/E", field: "pe"},
    {id: "volume", name: "Volume", field: "volume"},
    {id: "ps", name: "P/S", field: "ps"},
    {id: "yearChange", name: "year change %", field: "yearChange"},
    {id: "yearLow", name: "year low($)", field: "yearLow"},
    {id: "yearHigh", name: "year high($)", field: "yearHigh"},

  ];


  var options = {
    enableCellNavigation: true,
    enableColumnReorder: false
  };

//method for selecting features of other components
    function selFeature(value){
     

    }

    this.addGrid = function(data){

    

       var dataPicked = [];
     
	        var length = data.length;

	        for (var i = 0; i < length; i++) {
		      dataPicked[i] = {
			        Stock: data[i]["Name"],
			        pe: data[i]["P/E"],
			        ps: data[i]["P/S"],
			        volume: data[i]["Volume"],
			        yearChange: data[i]["Change from 52-week(%)"],
			        yearLow: data[i]["low($)"],
			        yearHigh: data[i]["high($)"],
            };
        }
        grid = new Slick.Grid("#stockInfo", dataPicked, columns, options);

       
    }
     
     console.log(grid);	 

    function addGrid2(){

    }
   

    //method for selecting the pololyne from other components	
    this.selectLine = function(value){
        


    };


}