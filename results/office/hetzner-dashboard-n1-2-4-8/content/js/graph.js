/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 65.0, "minX": 0.0, "maxY": 363.0, "series": [{"data": [[0.0, 65.0], [0.1, 66.0], [0.2, 66.0], [0.3, 67.0], [0.4, 67.0], [0.5, 67.0], [0.6, 68.0], [0.7, 68.0], [0.8, 71.0], [0.9, 74.0], [1.0, 74.0], [1.1, 74.0], [1.2, 74.0], [1.3, 75.0], [1.4, 75.0], [1.5, 75.0], [1.6, 75.0], [1.7, 75.0], [1.8, 75.0], [1.9, 75.0], [2.0, 75.0], [2.1, 75.0], [2.2, 75.0], [2.3, 75.0], [2.4, 75.0], [2.5, 75.0], [2.6, 75.0], [2.7, 75.0], [2.8, 75.0], [2.9, 75.0], [3.0, 76.0], [3.1, 76.0], [3.2, 76.0], [3.3, 76.0], [3.4, 76.0], [3.5, 76.0], [3.6, 76.0], [3.7, 76.0], [3.8, 76.0], [3.9, 76.0], [4.0, 76.0], [4.1, 76.0], [4.2, 76.0], [4.3, 76.0], [4.4, 76.0], [4.5, 76.0], [4.6, 76.0], [4.7, 76.0], [4.8, 76.0], [4.9, 77.0], [5.0, 77.0], [5.1, 77.0], [5.2, 77.0], [5.3, 77.0], [5.4, 77.0], [5.5, 77.0], [5.6, 77.0], [5.7, 77.0], [5.8, 77.0], [5.9, 77.0], [6.0, 77.0], [6.1, 77.0], [6.2, 77.0], [6.3, 77.0], [6.4, 78.0], [6.5, 78.0], [6.6, 78.0], [6.7, 78.0], [6.8, 78.0], [6.9, 78.0], [7.0, 78.0], [7.1, 78.0], [7.2, 78.0], [7.3, 79.0], [7.4, 79.0], [7.5, 80.0], [7.6, 81.0], [7.7, 83.0], [7.8, 84.0], [7.9, 84.0], [8.0, 84.0], [8.1, 84.0], [8.2, 84.0], [8.3, 84.0], [8.4, 85.0], [8.5, 85.0], [8.6, 85.0], [8.7, 85.0], [8.8, 85.0], [8.9, 85.0], [9.0, 85.0], [9.1, 85.0], [9.2, 85.0], [9.3, 85.0], [9.4, 85.0], [9.5, 85.0], [9.6, 85.0], [9.7, 85.0], [9.8, 85.0], [9.9, 85.0], [10.0, 85.0], [10.1, 86.0], [10.2, 86.0], [10.3, 86.0], [10.4, 86.0], [10.5, 86.0], [10.6, 86.0], [10.7, 86.0], [10.8, 86.0], [10.9, 86.0], [11.0, 86.0], [11.1, 86.0], [11.2, 86.0], [11.3, 86.0], [11.4, 86.0], [11.5, 86.0], [11.6, 86.0], [11.7, 86.0], [11.8, 86.0], [11.9, 86.0], [12.0, 86.0], [12.1, 86.0], [12.2, 86.0], [12.3, 86.0], [12.4, 86.0], [12.5, 86.0], [12.6, 87.0], [12.7, 87.0], [12.8, 87.0], [12.9, 87.0], [13.0, 87.0], [13.1, 87.0], [13.2, 87.0], [13.3, 87.0], [13.4, 87.0], [13.5, 87.0], [13.6, 87.0], [13.7, 87.0], [13.8, 87.0], [13.9, 87.0], [14.0, 87.0], [14.1, 87.0], [14.2, 87.0], [14.3, 87.0], [14.4, 87.0], [14.5, 87.0], [14.6, 87.0], [14.7, 87.0], [14.8, 87.0], [14.9, 87.0], [15.0, 88.0], [15.1, 88.0], [15.2, 88.0], [15.3, 88.0], [15.4, 88.0], [15.5, 88.0], [15.6, 88.0], [15.7, 88.0], [15.8, 88.0], [15.9, 88.0], [16.0, 88.0], [16.1, 88.0], [16.2, 88.0], [16.3, 88.0], [16.4, 88.0], [16.5, 89.0], [16.6, 89.0], [16.7, 89.0], [16.8, 89.0], [16.9, 89.0], [17.0, 90.0], [17.1, 90.0], [17.2, 90.0], [17.3, 91.0], [17.4, 93.0], [17.5, 94.0], [17.6, 94.0], [17.7, 94.0], [17.8, 94.0], [17.9, 94.0], [18.0, 94.0], [18.1, 95.0], [18.2, 95.0], [18.3, 95.0], [18.4, 95.0], [18.5, 95.0], [18.6, 95.0], [18.7, 95.0], [18.8, 95.0], [18.9, 95.0], [19.0, 95.0], [19.1, 95.0], [19.2, 95.0], [19.3, 95.0], [19.4, 95.0], [19.5, 95.0], [19.6, 95.0], [19.7, 95.0], [19.8, 95.0], [19.9, 96.0], [20.0, 96.0], [20.1, 96.0], [20.2, 96.0], [20.3, 96.0], [20.4, 96.0], [20.5, 96.0], [20.6, 96.0], [20.7, 96.0], [20.8, 96.0], [20.9, 96.0], [21.0, 96.0], [21.1, 96.0], [21.2, 96.0], [21.3, 96.0], [21.4, 96.0], [21.5, 96.0], [21.6, 96.0], [21.7, 96.0], [21.8, 96.0], [21.9, 96.0], [22.0, 96.0], [22.1, 96.0], [22.2, 96.0], [22.3, 96.0], [22.4, 96.0], [22.5, 96.0], [22.6, 97.0], [22.7, 97.0], [22.8, 97.0], [22.9, 97.0], [23.0, 97.0], [23.1, 97.0], [23.2, 97.0], [23.3, 97.0], [23.4, 97.0], [23.5, 97.0], [23.6, 97.0], [23.7, 97.0], [23.8, 97.0], [23.9, 97.0], [24.0, 97.0], [24.1, 97.0], [24.2, 97.0], [24.3, 97.0], [24.4, 97.0], [24.5, 97.0], [24.6, 97.0], [24.7, 97.0], [24.8, 97.0], [24.9, 97.0], [25.0, 97.0], [25.1, 97.0], [25.2, 98.0], [25.3, 98.0], [25.4, 98.0], [25.5, 98.0], [25.6, 98.0], [25.7, 98.0], [25.8, 98.0], [25.9, 98.0], [26.0, 98.0], [26.1, 98.0], [26.2, 98.0], [26.3, 98.0], [26.4, 98.0], [26.5, 98.0], [26.6, 98.0], [26.7, 98.0], [26.8, 99.0], [26.9, 99.0], [27.0, 99.0], [27.1, 99.0], [27.2, 99.0], [27.3, 99.0], [27.4, 99.0], [27.5, 99.0], [27.6, 99.0], [27.7, 100.0], [27.8, 100.0], [27.9, 100.0], [28.0, 100.0], [28.1, 100.0], [28.2, 100.0], [28.3, 101.0], [28.4, 101.0], [28.5, 101.0], [28.6, 101.0], [28.7, 102.0], [28.8, 103.0], [28.9, 103.0], [29.0, 104.0], [29.1, 104.0], [29.2, 104.0], [29.3, 104.0], [29.4, 104.0], [29.5, 104.0], [29.6, 104.0], [29.7, 105.0], [29.8, 105.0], [29.9, 105.0], [30.0, 105.0], [30.1, 105.0], [30.2, 105.0], [30.3, 105.0], [30.4, 105.0], [30.5, 105.0], [30.6, 105.0], [30.7, 105.0], [30.8, 105.0], [30.9, 105.0], [31.0, 105.0], [31.1, 105.0], [31.2, 105.0], [31.3, 105.0], [31.4, 105.0], [31.5, 106.0], [31.6, 106.0], [31.7, 106.0], [31.8, 106.0], [31.9, 106.0], [32.0, 106.0], [32.1, 106.0], [32.2, 106.0], [32.3, 106.0], [32.4, 106.0], [32.5, 106.0], [32.6, 106.0], [32.7, 106.0], [32.8, 106.0], [32.9, 106.0], [33.0, 106.0], [33.1, 106.0], [33.2, 106.0], [33.3, 106.0], [33.4, 106.0], [33.5, 106.0], [33.6, 106.0], [33.7, 106.0], [33.8, 106.0], [33.9, 106.0], [34.0, 106.0], [34.1, 106.0], [34.2, 106.0], [34.3, 106.0], [34.4, 106.0], [34.5, 106.0], [34.6, 106.0], [34.7, 107.0], [34.8, 107.0], [34.9, 107.0], [35.0, 107.0], [35.1, 107.0], [35.2, 107.0], [35.3, 107.0], [35.4, 107.0], [35.5, 107.0], [35.6, 107.0], [35.7, 107.0], [35.8, 107.0], [35.9, 107.0], [36.0, 107.0], [36.1, 107.0], [36.2, 107.0], [36.3, 107.0], [36.4, 107.0], [36.5, 107.0], [36.6, 107.0], [36.7, 107.0], [36.8, 107.0], [36.9, 107.0], [37.0, 107.0], [37.1, 107.0], [37.2, 107.0], [37.3, 107.0], [37.4, 107.0], [37.5, 108.0], [37.6, 108.0], [37.7, 108.0], [37.8, 108.0], [37.9, 108.0], [38.0, 108.0], [38.1, 108.0], [38.2, 108.0], [38.3, 108.0], [38.4, 108.0], [38.5, 108.0], [38.6, 108.0], [38.7, 108.0], [38.8, 108.0], [38.9, 108.0], [39.0, 108.0], [39.1, 108.0], [39.2, 108.0], [39.3, 108.0], [39.4, 108.0], [39.5, 108.0], [39.6, 108.0], [39.7, 108.0], [39.8, 108.0], [39.9, 109.0], [40.0, 109.0], [40.1, 109.0], [40.2, 109.0], [40.3, 109.0], [40.4, 109.0], [40.5, 109.0], [40.6, 109.0], [40.7, 109.0], [40.8, 109.0], [40.9, 109.0], [41.0, 109.0], [41.1, 109.0], [41.2, 109.0], [41.3, 110.0], [41.4, 110.0], [41.5, 110.0], [41.6, 110.0], [41.7, 110.0], [41.8, 110.0], [41.9, 110.0], [42.0, 110.0], [42.1, 111.0], [42.2, 111.0], [42.3, 111.0], [42.4, 111.0], [42.5, 112.0], [42.6, 112.0], [42.7, 112.0], [42.8, 112.0], [42.9, 113.0], [43.0, 113.0], [43.1, 113.0], [43.2, 113.0], [43.3, 114.0], [43.4, 114.0], [43.5, 114.0], [43.6, 114.0], [43.7, 114.0], [43.8, 114.0], [43.9, 114.0], [44.0, 114.0], [44.1, 114.0], [44.2, 115.0], [44.3, 115.0], [44.4, 115.0], [44.5, 115.0], [44.6, 115.0], [44.7, 115.0], [44.8, 115.0], [44.9, 115.0], [45.0, 115.0], [45.1, 115.0], [45.2, 115.0], [45.3, 115.0], [45.4, 115.0], [45.5, 115.0], [45.6, 115.0], [45.7, 115.0], [45.8, 115.0], [45.9, 115.0], [46.0, 115.0], [46.1, 116.0], [46.2, 116.0], [46.3, 116.0], [46.4, 116.0], [46.5, 116.0], [46.6, 116.0], [46.7, 116.0], [46.8, 116.0], [46.9, 116.0], [47.0, 116.0], [47.1, 116.0], [47.2, 116.0], [47.3, 116.0], [47.4, 116.0], [47.5, 116.0], [47.6, 116.0], [47.7, 116.0], [47.8, 116.0], [47.9, 116.0], [48.0, 116.0], [48.1, 116.0], [48.2, 116.0], [48.3, 116.0], [48.4, 116.0], [48.5, 116.0], [48.6, 116.0], [48.7, 116.0], [48.8, 116.0], [48.9, 116.0], [49.0, 117.0], [49.1, 117.0], [49.2, 117.0], [49.3, 117.0], [49.4, 117.0], [49.5, 117.0], [49.6, 117.0], [49.7, 117.0], [49.8, 117.0], [49.9, 117.0], [50.0, 117.0], [50.1, 117.0], [50.2, 117.0], [50.3, 117.0], [50.4, 117.0], [50.5, 117.0], [50.6, 117.0], [50.7, 117.0], [50.8, 117.0], [50.9, 117.0], [51.0, 117.0], [51.1, 117.0], [51.2, 117.0], [51.3, 117.0], [51.4, 117.0], [51.5, 117.0], [51.6, 117.0], [51.7, 117.0], [51.8, 117.0], [51.9, 117.0], [52.0, 117.0], [52.1, 117.0], [52.2, 117.0], [52.3, 117.0], [52.4, 117.0], [52.5, 117.0], [52.6, 117.0], [52.7, 117.0], [52.8, 118.0], [52.9, 118.0], [53.0, 118.0], [53.1, 118.0], [53.2, 118.0], [53.3, 118.0], [53.4, 118.0], [53.5, 118.0], [53.6, 118.0], [53.7, 118.0], [53.8, 118.0], [53.9, 118.0], [54.0, 118.0], [54.1, 118.0], [54.2, 118.0], [54.3, 118.0], [54.4, 118.0], [54.5, 118.0], [54.6, 118.0], [54.7, 118.0], [54.8, 118.0], [54.9, 118.0], [55.0, 118.0], [55.1, 118.0], [55.2, 118.0], [55.3, 118.0], [55.4, 118.0], [55.5, 118.0], [55.6, 118.0], [55.7, 118.0], [55.8, 118.0], [55.9, 118.0], [56.0, 118.0], [56.1, 118.0], [56.2, 119.0], [56.3, 119.0], [56.4, 119.0], [56.5, 119.0], [56.6, 119.0], [56.7, 119.0], [56.8, 119.0], [56.9, 119.0], [57.0, 119.0], [57.1, 119.0], [57.2, 119.0], [57.3, 119.0], [57.4, 119.0], [57.5, 119.0], [57.6, 119.0], [57.7, 119.0], [57.8, 119.0], [57.9, 119.0], [58.0, 119.0], [58.1, 119.0], [58.2, 119.0], [58.3, 119.0], [58.4, 119.0], [58.5, 119.0], [58.6, 119.0], [58.7, 119.0], [58.8, 119.0], [58.9, 119.0], [59.0, 120.0], [59.1, 120.0], [59.2, 120.0], [59.3, 120.0], [59.4, 120.0], [59.5, 120.0], [59.6, 120.0], [59.7, 120.0], [59.8, 120.0], [59.9, 120.0], [60.0, 120.0], [60.1, 120.0], [60.2, 120.0], [60.3, 120.0], [60.4, 121.0], [60.5, 121.0], [60.6, 121.0], [60.7, 121.0], [60.8, 121.0], [60.9, 121.0], [61.0, 121.0], [61.1, 121.0], [61.2, 121.0], [61.3, 121.0], [61.4, 121.0], [61.5, 122.0], [61.6, 122.0], [61.7, 122.0], [61.8, 122.0], [61.9, 122.0], [62.0, 122.0], [62.1, 122.0], [62.2, 123.0], [62.3, 123.0], [62.4, 123.0], [62.5, 123.0], [62.6, 124.0], [62.7, 124.0], [62.8, 124.0], [62.9, 124.0], [63.0, 124.0], [63.1, 124.0], [63.2, 124.0], [63.3, 124.0], [63.4, 124.0], [63.5, 124.0], [63.6, 125.0], [63.7, 125.0], [63.8, 125.0], [63.9, 125.0], [64.0, 125.0], [64.1, 125.0], [64.2, 125.0], [64.3, 125.0], [64.4, 125.0], [64.5, 125.0], [64.6, 125.0], [64.7, 125.0], [64.8, 125.0], [64.9, 125.0], [65.0, 125.0], [65.1, 125.0], [65.2, 125.0], [65.3, 125.0], [65.4, 125.0], [65.5, 125.0], [65.6, 125.0], [65.7, 125.0], [65.8, 126.0], [65.9, 126.0], [66.0, 126.0], [66.1, 126.0], [66.2, 126.0], [66.3, 126.0], [66.4, 126.0], [66.5, 126.0], [66.6, 126.0], [66.7, 126.0], [66.8, 126.0], [66.9, 126.0], [67.0, 126.0], [67.1, 126.0], [67.2, 126.0], [67.3, 126.0], [67.4, 126.0], [67.5, 126.0], [67.6, 126.0], [67.7, 126.0], [67.8, 126.0], [67.9, 126.0], [68.0, 126.0], [68.1, 126.0], [68.2, 126.0], [68.3, 126.0], [68.4, 126.0], [68.5, 126.0], [68.6, 126.0], [68.7, 127.0], [68.8, 127.0], [68.9, 127.0], [69.0, 127.0], [69.1, 127.0], [69.2, 127.0], [69.3, 127.0], [69.4, 127.0], [69.5, 127.0], [69.6, 127.0], [69.7, 127.0], [69.8, 127.0], [69.9, 127.0], [70.0, 127.0], [70.1, 127.0], [70.2, 127.0], [70.3, 127.0], [70.4, 127.0], [70.5, 127.0], [70.6, 127.0], [70.7, 127.0], [70.8, 127.0], [70.9, 127.0], [71.0, 127.0], [71.1, 127.0], [71.2, 127.0], [71.3, 127.0], [71.4, 127.0], [71.5, 127.0], [71.6, 127.0], [71.7, 127.0], [71.8, 127.0], [71.9, 127.0], [72.0, 127.0], [72.1, 127.0], [72.2, 127.0], [72.3, 127.0], [72.4, 127.0], [72.5, 128.0], [72.6, 128.0], [72.7, 128.0], [72.8, 128.0], [72.9, 128.0], [73.0, 128.0], [73.1, 128.0], [73.2, 128.0], [73.3, 128.0], [73.4, 128.0], [73.5, 128.0], [73.6, 128.0], [73.7, 128.0], [73.8, 128.0], [73.9, 128.0], [74.0, 128.0], [74.1, 128.0], [74.2, 128.0], [74.3, 128.0], [74.4, 128.0], [74.5, 128.0], [74.6, 128.0], [74.7, 128.0], [74.8, 128.0], [74.9, 128.0], [75.0, 128.0], [75.1, 128.0], [75.2, 128.0], [75.3, 128.0], [75.4, 128.0], [75.5, 128.0], [75.6, 128.0], [75.7, 128.0], [75.8, 128.0], [75.9, 128.0], [76.0, 129.0], [76.1, 129.0], [76.2, 129.0], [76.3, 129.0], [76.4, 129.0], [76.5, 129.0], [76.6, 129.0], [76.7, 129.0], [76.8, 129.0], [76.9, 129.0], [77.0, 129.0], [77.1, 129.0], [77.2, 129.0], [77.3, 129.0], [77.4, 129.0], [77.5, 129.0], [77.6, 129.0], [77.7, 129.0], [77.8, 129.0], [77.9, 129.0], [78.0, 129.0], [78.1, 129.0], [78.2, 129.0], [78.3, 129.0], [78.4, 129.0], [78.5, 129.0], [78.6, 129.0], [78.7, 130.0], [78.8, 130.0], [78.9, 130.0], [79.0, 130.0], [79.1, 130.0], [79.2, 130.0], [79.3, 130.0], [79.4, 130.0], [79.5, 130.0], [79.6, 130.0], [79.7, 130.0], [79.8, 130.0], [79.9, 130.0], [80.0, 130.0], [80.1, 130.0], [80.2, 130.0], [80.3, 130.0], [80.4, 130.0], [80.5, 130.0], [80.6, 130.0], [80.7, 130.0], [80.8, 130.0], [80.9, 131.0], [81.0, 131.0], [81.1, 131.0], [81.2, 131.0], [81.3, 131.0], [81.4, 131.0], [81.5, 131.0], [81.6, 131.0], [81.7, 131.0], [81.8, 131.0], [81.9, 131.0], [82.0, 131.0], [82.1, 131.0], [82.2, 131.0], [82.3, 131.0], [82.4, 132.0], [82.5, 132.0], [82.6, 132.0], [82.7, 132.0], [82.8, 132.0], [82.9, 132.0], [83.0, 132.0], [83.1, 132.0], [83.2, 132.0], [83.3, 132.0], [83.4, 133.0], [83.5, 133.0], [83.6, 133.0], [83.7, 133.0], [83.8, 133.0], [83.9, 133.0], [84.0, 133.0], [84.1, 133.0], [84.2, 134.0], [84.3, 134.0], [84.4, 134.0], [84.5, 134.0], [84.6, 134.0], [84.7, 134.0], [84.8, 134.0], [84.9, 134.0], [85.0, 135.0], [85.1, 135.0], [85.2, 135.0], [85.3, 135.0], [85.4, 135.0], [85.5, 135.0], [85.6, 135.0], [85.7, 135.0], [85.8, 135.0], [85.9, 135.0], [86.0, 135.0], [86.1, 135.0], [86.2, 135.0], [86.3, 135.0], [86.4, 135.0], [86.5, 136.0], [86.6, 136.0], [86.7, 136.0], [86.8, 136.0], [86.9, 136.0], [87.0, 136.0], [87.1, 136.0], [87.2, 136.0], [87.3, 136.0], [87.4, 136.0], [87.5, 136.0], [87.6, 136.0], [87.7, 136.0], [87.8, 136.0], [87.9, 136.0], [88.0, 136.0], [88.1, 137.0], [88.2, 137.0], [88.3, 137.0], [88.4, 137.0], [88.5, 137.0], [88.6, 137.0], [88.7, 137.0], [88.8, 137.0], [88.9, 137.0], [89.0, 137.0], [89.1, 137.0], [89.2, 137.0], [89.3, 137.0], [89.4, 137.0], [89.5, 137.0], [89.6, 137.0], [89.7, 137.0], [89.8, 137.0], [89.9, 137.0], [90.0, 137.0], [90.1, 137.0], [90.2, 137.0], [90.3, 138.0], [90.4, 138.0], [90.5, 138.0], [90.6, 138.0], [90.7, 138.0], [90.8, 138.0], [90.9, 138.0], [91.0, 138.0], [91.1, 138.0], [91.2, 138.0], [91.3, 138.0], [91.4, 138.0], [91.5, 138.0], [91.6, 138.0], [91.7, 138.0], [91.8, 138.0], [91.9, 138.0], [92.0, 138.0], [92.1, 138.0], [92.2, 138.0], [92.3, 138.0], [92.4, 138.0], [92.5, 139.0], [92.6, 139.0], [92.7, 139.0], [92.8, 139.0], [92.9, 139.0], [93.0, 139.0], [93.1, 139.0], [93.2, 139.0], [93.3, 139.0], [93.4, 139.0], [93.5, 139.0], [93.6, 139.0], [93.7, 139.0], [93.8, 139.0], [93.9, 140.0], [94.0, 140.0], [94.1, 140.0], [94.2, 140.0], [94.3, 140.0], [94.4, 140.0], [94.5, 140.0], [94.6, 140.0], [94.7, 140.0], [94.8, 141.0], [94.9, 141.0], [95.0, 141.0], [95.1, 141.0], [95.2, 141.0], [95.3, 142.0], [95.4, 142.0], [95.5, 142.0], [95.6, 142.0], [95.7, 143.0], [95.8, 143.0], [95.9, 144.0], [96.0, 145.0], [96.1, 145.0], [96.2, 145.0], [96.3, 146.0], [96.4, 146.0], [96.5, 146.0], [96.6, 146.0], [96.7, 147.0], [96.8, 147.0], [96.9, 147.0], [97.0, 147.0], [97.1, 148.0], [97.2, 148.0], [97.3, 148.0], [97.4, 148.0], [97.5, 148.0], [97.6, 149.0], [97.7, 149.0], [97.8, 149.0], [97.9, 149.0], [98.0, 149.0], [98.1, 149.0], [98.2, 150.0], [98.3, 150.0], [98.4, 151.0], [98.5, 152.0], [98.6, 154.0], [98.7, 155.0], [98.8, 156.0], [98.9, 156.0], [99.0, 157.0], [99.1, 158.0], [99.2, 158.0], [99.3, 159.0], [99.4, 160.0], [99.5, 167.0], [99.6, 168.0], [99.7, 176.0], [99.8, 191.0], [99.9, 209.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 3465.0, "series": [{"data": [[0.0, 1329.0], [300.0, 2.0], [100.0, 3465.0], [200.0, 4.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4800.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4800.0, "series": [{"data": [[0.0, 4800.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.7149812E12, "maxY": 7.882409177820269, "series": [{"data": [[1.71498132E12, 1.0], [1.71498126E12, 1.0], [1.7149812E12, 1.0]], "isOverall": false, "label": "1", "isController": false}, {"data": [[1.71498132E12, 1.0], [1.71498144E12, 1.0], [1.71498138E12, 1.0]], "isOverall": false, "label": "2", "isController": false}, {"data": [[1.71498144E12, 3.9587500000000015]], "isOverall": false, "label": "4", "isController": false}, {"data": [[1.7149815E12, 7.882409177820269], [1.71498144E12, 7.864620938628151]], "isOverall": false, "label": "8", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149815E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 107.57692307692307, "minX": 1.0, "maxY": 122.0, "series": [{"data": [[1.0, 116.16417910447767], [2.0, 110.83333333333333], [4.0, 112.02046035805635], [8.0, 112.95460526315803], [5.0, 122.0], [3.0, 109.00000000000001], [6.0, 107.57692307692307], [7.0, 113.92307692307692]], "isOverall": false, "label": "cogtiff", "isController": false}, {"data": [[4.278333333333335, 113.68437500000002]], "isOverall": false, "label": "cogtiff-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.7149812E12, "maxY": 4.0521665666666664E7, "series": [{"data": [[1.71498132E12, 9703691.15], [1.7149815E12, 1.8869441566666666E7], [1.71498144E12, 4.0521665666666664E7], [1.71498126E12, 9542963.1], [1.7149812E12, 36053.23333333333], [1.71498138E12, 9637816.266666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71498132E12, 0.0], [1.7149815E12, 0.0], [1.71498144E12, 0.0], [1.71498126E12, 0.0], [1.7149812E12, 0.0], [1.71498138E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149815E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 112.3865698729583, "minX": 1.7149812E12, "maxY": 246.0, "series": [{"data": [[1.71498132E12, 116.6296296296296], [1.7149815E12, 112.7017208413001], [1.71498144E12, 112.3865698729583], [1.71498126E12, 116.48638132295713], [1.7149812E12, 246.0], [1.71498138E12, 114.9750479846449]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149815E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 34.635208711433755, "minX": 1.7149812E12, "maxY": 159.5, "series": [{"data": [[1.71498132E12, 35.116959064327474], [1.7149815E12, 34.991395793499116], [1.71498144E12, 34.635208711433755], [1.71498126E12, 35.632295719844365], [1.7149812E12, 159.5], [1.71498138E12, 34.975047984644924]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149815E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.7149812E12, "maxY": 4.9E-324, "series": [{"data": [[1.71498132E12, 0.0], [1.7149815E12, 0.0], [1.71498144E12, 0.0], [1.71498126E12, 0.0], [1.7149812E12, 0.0], [1.71498138E12, 0.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149815E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 65.0, "minX": 1.7149812E12, "maxY": 363.0, "series": [{"data": [[1.71498132E12, 220.0], [1.7149815E12, 205.0], [1.71498144E12, 330.0], [1.71498126E12, 198.0], [1.7149812E12, 363.0], [1.71498138E12, 219.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71498132E12, 67.0], [1.7149815E12, 66.0], [1.71498144E12, 65.0], [1.71498126E12, 67.0], [1.7149812E12, 129.0], [1.71498138E12, 66.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71498132E12, 139.60000000000002], [1.7149815E12, 137.0], [1.71498144E12, 135.0], [1.71498126E12, 140.0], [1.7149812E12, 363.0], [1.71498138E12, 138.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71498132E12, 166.0200000000001], [1.7149815E12, 152.52999999999997], [1.71498144E12, 154.94999999999982], [1.71498126E12, 160.85000000000002], [1.7149812E12, 363.0], [1.71498138E12, 157.77999999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71498132E12, 118.0], [1.7149815E12, 116.0], [1.71498144E12, 116.0], [1.71498126E12, 119.0], [1.7149812E12, 246.0], [1.71498138E12, 118.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71498132E12, 148.29999999999995], [1.7149815E12, 141.0], [1.71498144E12, 138.0], [1.71498126E12, 149.0], [1.7149812E12, 363.0], [1.71498138E12, 142.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149815E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 101.0, "minX": 1.0, "maxY": 246.0, "series": [{"data": [[2.0, 246.0], [33.0, 117.0], [34.0, 118.0], [35.0, 117.0], [36.0, 115.0], [37.0, 109.0], [38.0, 111.0], [39.0, 106.0], [51.0, 117.0], [59.0, 108.0], [67.0, 117.0], [70.0, 117.0], [71.0, 116.0], [69.0, 118.0], [68.0, 118.0], [73.0, 113.0], [75.0, 109.5], [7.0, 136.0], [8.0, 126.0], [9.0, 117.0], [10.0, 106.0], [12.0, 101.0], [1.0, 117.0], [27.0, 110.0], [30.0, 115.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 34.0, "minX": 1.0, "maxY": 159.5, "series": [{"data": [[2.0, 159.5], [33.0, 34.0], [34.0, 34.0], [35.0, 34.0], [36.0, 34.0], [37.0, 34.0], [38.0, 34.0], [39.0, 34.0], [51.0, 34.0], [59.0, 34.0], [67.0, 35.0], [70.0, 35.0], [71.0, 35.0], [69.0, 35.0], [68.0, 35.0], [73.0, 35.0], [75.0, 35.0], [7.0, 36.0], [8.0, 35.0], [9.0, 35.0], [10.0, 35.0], [12.0, 35.0], [1.0, 35.0], [27.0, 35.0], [30.0, 34.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.7149812E12, "maxY": 36.85, "series": [{"data": [[1.71498132E12, 8.55], [1.7149815E12, 17.3], [1.71498144E12, 36.85], [1.71498126E12, 8.566666666666666], [1.7149812E12, 0.05], [1.71498138E12, 8.683333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149815E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7149812E12, "maxY": 36.733333333333334, "series": [{"data": [[1.71498132E12, 8.55], [1.7149815E12, 17.433333333333334], [1.71498144E12, 36.733333333333334], [1.71498126E12, 8.566666666666666], [1.7149812E12, 0.03333333333333333], [1.71498138E12, 8.683333333333334]], "isOverall": false, "label": "206", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149815E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7149812E12, "maxY": 36.733333333333334, "series": [{"data": [[1.71498132E12, 8.55], [1.7149815E12, 17.433333333333334], [1.71498144E12, 36.733333333333334], [1.71498126E12, 8.566666666666666], [1.7149812E12, 0.03333333333333333], [1.71498138E12, 8.683333333333334]], "isOverall": false, "label": "cogtiff-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149815E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7149812E12, "maxY": 36.733333333333334, "series": [{"data": [[1.71498132E12, 8.55], [1.7149815E12, 17.433333333333334], [1.71498144E12, 36.733333333333334], [1.71498126E12, 8.566666666666666], [1.7149812E12, 0.03333333333333333], [1.71498138E12, 8.683333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149815E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

