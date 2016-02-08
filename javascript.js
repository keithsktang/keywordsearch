var example = "The George Washington Bridge in New York City is one of the oldest bridges ever constructed. It is now being remodeled because the bridge is a landmark. City officials say that the landmark bridge effort will create a lot of new jobs in the city.";
var data = example.replace(/\./g,' ').split(" ");
var datafull = example.split(" ");

var search = "Landmark City Bridge";
var keywords = search.split(" ");

var matcharray = [];//final match with the lowest index combination
var comparearray = [];//temp array used to collect full object
var temparray = [];//temp array used to collect word comparison
var finalarray = [];//contains every combinations
var results = [];//words and indexes
var tempindex = 0;
var index = 0;
var runtime = 0;

function matchingSearchwords(data,keywords) {
    for ( x = 0; x < data.length; x++) {
        for ( j = 0; j < keywords.length; j++) {
                var word = data[x].toLowerCase();
                var keyword = new RegExp ( "^" + keywords[j].toLowerCase() + "$" );
                 if ( word.match(keyword) ) {
                    results.push( { word: data[x].toLowerCase(), index: x} );

            }
        }
    }

    return results;
}

var counter = 0;
var ran = matchingSearchwords(data,keywords);

function findmatch(array) {

    var arr2 = array;
    for(i = 0; i < array.length; i++) {
        if(comparearray.length > 2) {
            var phrase = (datafull.slice( (comparearray[0].index-1), (comparearray[comparearray.length-1].index+1)) ).join(" ");
            comparearray.push( { distance: tempindex });
            comparearray.push( { phrase: phrase } );
            finalarray.push(comparearray);
            }
            // console.log(comparearray);


        if( index === 0 ) { index = tempindex } else {
            if( tempindex < index ) {
                index = tempindex;
                matcharray.push(comparearray);
                // console.log(matcharray);
                matchingString = (datafull.slice( (comparearray[0].index-1), (comparearray[comparearray.length-3].index-1))).join(" ");

            }
        }
          comparearray = [];
          temparray = [];
        for(j=counter; j < arr2.length; j++) {

            var currentword = arr2[j].word;
            if (temparray.indexOf(currentword) == -1 ) {
                temparray.push(arr2[j].word);
                comparearray.push(arr2[j]);
                tempindex = comparearray[comparearray.length-1].index - comparearray[0].index;

            }
        }
    counter++;
     }
     return matchingString;
}

alert(findmatch(ran));
