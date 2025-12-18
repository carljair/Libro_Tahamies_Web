var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Hillshade_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hillshade<br />\
    <img src="styles/legend/Hillshade_1_0.png" /> 0<br />\
    <img src="styles/legend/Hillshade_1_1.png" /> 254.975<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hillshade_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8502754.232205, 711864.460255, -8336749.501127, 850115.979150]
        })
    });
var lyr_CapasdelOrigen_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://srvags.sgc.gov.co/arcgis/services/Atlas_Geologico_2015/Atlas_Geologico_Colombiano_2015/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Capas del Origen',
                            popuplayertitle: 'Capas del Origen',
                            opacity: 0.700000,
                            
                            
                          });
              wms_layers.push([lyr_CapasdelOrigen_2, 1]);
var format_Tahamies_3 = new ol.format.GeoJSON();
var features_Tahamies_3 = format_Tahamies_3.readFeatures(json_Tahamies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tahamies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tahamies_3.addFeatures(features_Tahamies_3);
var lyr_Tahamies_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tahamies_3, 
                style: style_Tahamies_3,
                popuplayertitle: 'Tahamies',
                interactive: false,
                title: '<img src="styles/legend/Tahamies_3.png" /> Tahamies'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Hillshade_1.setVisible(true);lyr_CapasdelOrigen_2.setVisible(true);lyr_Tahamies_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Hillshade_1,lyr_CapasdelOrigen_2,lyr_Tahamies_3];
lyr_Tahamies_3.set('fieldAliases', {'TERRIT_CAR': 'TERRIT_CAR', 'SHAPE_AR': 'SHAPE_AR', });
lyr_Tahamies_3.set('fieldImages', {'TERRIT_CAR': 'TextEdit', 'SHAPE_AR': 'TextEdit', });
lyr_Tahamies_3.set('fieldLabels', {'TERRIT_CAR': 'no label', 'SHAPE_AR': 'no label', });
lyr_Tahamies_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});