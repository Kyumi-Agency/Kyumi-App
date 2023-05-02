import React from 'react';
import {Text, View} from "react-native";
const Map = () => {
  //   const htmlContent = `
  //   <html>
  //     <head>
  //       <meta charset="utf-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1">
  //       <script src="https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.js"></script>
  //       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.css" />
  //     </head>
  //     <body>
  //       <div id="mapid" style="height:100%;"></div>
  //       <script>
  //         var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //           attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  //           maxZoom: 19
  //         }).addTo(mymap);
  //       </script>
  //     </body>
  //   </html>
  // `;
    return (
        // <WebView
        //     originWhitelist={['*']}
        //     source={{ html: htmlContent }}
        // />
            <View>
                <Text>Map</Text>
            </View>
    );
};
export default Map;
