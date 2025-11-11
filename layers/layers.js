var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GSCTTerritory_1 = new ol.format.GeoJSON();
var features_GSCTTerritory_1 = format_GSCTTerritory_1.readFeatures(json_GSCTTerritory_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GSCTTerritory_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GSCTTerritory_1.addFeatures(features_GSCTTerritory_1);
var lyr_GSCTTerritory_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GSCTTerritory_1, 
                style: style_GSCTTerritory_1,
                popuplayertitle: 'GSCT Territory',
                interactive: false,
                title: '<img src="styles/legend/GSCTTerritory_1.png" /> GSCT Territory'
            });
var format_CountyBoundary_2 = new ol.format.GeoJSON();
var features_CountyBoundary_2 = format_CountyBoundary_2.readFeatures(json_CountyBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundary_2.addFeatures(features_CountyBoundary_2);
var lyr_CountyBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundary_2, 
                style: style_CountyBoundary_2,
                popuplayertitle: 'County Boundary',
                interactive: false,
                title: '<img src="styles/legend/CountyBoundary_2.png" /> County Boundary'
            });
var format_Sites_3 = new ol.format.GeoJSON();
var features_Sites_3 = format_Sites_3.readFeatures(json_Sites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sites_3.addFeatures(features_Sites_3);
var lyr_Sites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sites_3, 
                style: style_Sites_3,
                popuplayertitle: 'Sites',
                interactive: true,
                title: '<img src="styles/legend/Sites_3.png" /> Sites'
            });
var format_TargetTradeArea_4 = new ol.format.GeoJSON();
var features_TargetTradeArea_4 = format_TargetTradeArea_4.readFeatures(json_TargetTradeArea_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetTradeArea_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetTradeArea_4.addFeatures(features_TargetTradeArea_4);
var lyr_TargetTradeArea_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TargetTradeArea_4, 
                style: style_TargetTradeArea_4,
                popuplayertitle: 'Target Trade Area',
                interactive: true,
                title: '<img src="styles/legend/TargetTradeArea_4.png" /> Target Trade Area'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GSCTTerritory_1.setVisible(true);lyr_CountyBoundary_2.setVisible(true);lyr_Sites_3.setVisible(true);lyr_TargetTradeArea_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GSCTTerritory_1,lyr_CountyBoundary_2,lyr_Sites_3,lyr_TargetTradeArea_4];
lyr_GSCTTerritory_1.set('fieldAliases', {'geoid': 'geoid', 'state_fp': 'state_fp', 'name': 'name', });
lyr_CountyBoundary_2.set('fieldAliases', {'geoid': 'geoid', 'state_fp': 'state_fp', 'name': 'name', });
lyr_Sites_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'open_date': 'open_date', 'expect_qtr': 'expect_qtr', });
lyr_TargetTradeArea_4.set('fieldAliases', {'seed_id': 'seed_id', 'optimizati': 'optimizati', 'address': 'address', 'city': 'city', 'state': 'state', 'cbsa_class': 'cbsa_class', 'density_cl': 'density_cl', 'county': 'county', 'lat': 'lat', 'lon': 'lon', 'decision': 'decision', 'ID': 'ID', });
lyr_GSCTTerritory_1.set('fieldImages', {'geoid': 'TextEdit', 'state_fp': 'TextEdit', 'name': 'TextEdit', });
lyr_CountyBoundary_2.set('fieldImages', {'geoid': 'TextEdit', 'state_fp': 'TextEdit', 'name': 'TextEdit', });
lyr_Sites_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'open_date': 'DateTime', 'expect_qtr': 'TextEdit', });
lyr_TargetTradeArea_4.set('fieldImages', {'seed_id': 'Hidden', 'optimizati': 'Hidden', 'address': 'Hidden', 'city': 'TextEdit', 'state': 'Hidden', 'cbsa_class': 'Hidden', 'density_cl': 'Hidden', 'county': 'TextEdit', 'lat': 'Hidden', 'lon': 'Hidden', 'decision': 'Hidden', 'ID': 'Range', });
lyr_GSCTTerritory_1.set('fieldLabels', {'geoid': 'no label', 'state_fp': 'no label', 'name': 'no label', });
lyr_CountyBoundary_2.set('fieldLabels', {'geoid': 'no label', 'state_fp': 'no label', 'name': 'no label', });
lyr_Sites_3.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', 'open_date': 'hidden field', 'expect_qtr': 'hidden field', });
lyr_TargetTradeArea_4.set('fieldLabels', {'city': 'inline label - always visible', 'county': 'hidden field', 'ID': 'hidden field', });
lyr_TargetTradeArea_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});