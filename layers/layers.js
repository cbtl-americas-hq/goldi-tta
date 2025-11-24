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
var format_TTAGeneralLocation_2 = new ol.format.GeoJSON();
var features_TTAGeneralLocation_2 = format_TTAGeneralLocation_2.readFeatures(json_TTAGeneralLocation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TTAGeneralLocation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TTAGeneralLocation_2.addFeatures(features_TTAGeneralLocation_2);
var lyr_TTAGeneralLocation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TTAGeneralLocation_2, 
                style: style_TTAGeneralLocation_2,
                popuplayertitle: 'TTA General Location',
                interactive: true,
                title: '<img src="styles/legend/TTAGeneralLocation_2.png" /> TTA General Location'
            });
var format_CountyBoundary_3 = new ol.format.GeoJSON();
var features_CountyBoundary_3 = format_CountyBoundary_3.readFeatures(json_CountyBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundary_3.addFeatures(features_CountyBoundary_3);
var lyr_CountyBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundary_3, 
                style: style_CountyBoundary_3,
                popuplayertitle: 'County Boundary',
                interactive: false,
                title: '<img src="styles/legend/CountyBoundary_3.png" /> County Boundary'
            });
var format_Sites_4 = new ol.format.GeoJSON();
var features_Sites_4 = format_Sites_4.readFeatures(json_Sites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sites_4.addFeatures(features_Sites_4);
var lyr_Sites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sites_4, 
                style: style_Sites_4,
                popuplayertitle: 'Sites',
                interactive: true,
                title: '<img src="styles/legend/Sites_4.png" /> Sites'
            });
var format_TargetTradeArea_5 = new ol.format.GeoJSON();
var features_TargetTradeArea_5 = format_TargetTradeArea_5.readFeatures(json_TargetTradeArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetTradeArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetTradeArea_5.addFeatures(features_TargetTradeArea_5);
var lyr_TargetTradeArea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TargetTradeArea_5, 
                style: style_TargetTradeArea_5,
                popuplayertitle: 'Target Trade Area',
                interactive: true,
                title: '<img src="styles/legend/TargetTradeArea_5.png" /> Target Trade Area'
            });
var format_CBTLCafes_6 = new ol.format.GeoJSON();
var features_CBTLCafes_6 = format_CBTLCafes_6.readFeatures(json_CBTLCafes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTLCafes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTLCafes_6.addFeatures(features_CBTLCafes_6);
var lyr_CBTLCafes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CBTLCafes_6, 
                style: style_CBTLCafes_6,
                popuplayertitle: 'CBTL Cafes',
                interactive: true,
                title: '<img src="styles/legend/CBTLCafes_6.png" /> CBTL Cafes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GSCTTerritory_1.setVisible(true);lyr_TTAGeneralLocation_2.setVisible(true);lyr_CountyBoundary_3.setVisible(true);lyr_Sites_4.setVisible(true);lyr_TargetTradeArea_5.setVisible(true);lyr_CBTLCafes_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GSCTTerritory_1,lyr_TTAGeneralLocation_2,lyr_CountyBoundary_3,lyr_Sites_4,lyr_TargetTradeArea_5,lyr_CBTLCafes_6];
lyr_GSCTTerritory_1.set('fieldAliases', {'geoid': 'geoid', 'state_fp': 'state_fp', 'name': 'name', });
lyr_TTAGeneralLocation_2.set('fieldAliases', {'seed_id': 'seed_id', 'optimizati': 'optimizati', 'address': 'address', 'city': 'city', 'state': 'state', 'cbsa_class': 'cbsa_class', 'density_cl': 'density_cl', 'county': 'county', 'lat': 'lat', 'lon': 'lon', 'decision': 'decision', 'ID': 'ID', 'ringId': 'ringId', 'distance': 'distance', });
lyr_CountyBoundary_3.set('fieldAliases', {'geoid': 'geoid', 'state_fp': 'state_fp', 'name': 'name', });
lyr_Sites_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'open_date': 'open_date', 'expect_qtr': 'expect_qtr', });
lyr_TargetTradeArea_5.set('fieldAliases', {'seed_id': 'seed_id', 'optimizati': 'optimizati', 'address': 'address', 'city': 'city', 'state': 'state', 'cbsa_class': 'cbsa_class', 'density_cl': 'density_cl', 'county': 'county', 'lat': 'lat', 'lon': 'lon', 'decision': 'decision', 'ID': 'ID', });
lyr_CBTLCafes_6.set('fieldAliases', {'store_id': 'store_id', 'id': 'id', 'store_name': 'store_name', 'desc': 'desc', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontrad': 'trad_nontrad', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', 'last_modified_date': 'last_modified_date', 'last_modified_by': 'last_modified_by', });
lyr_GSCTTerritory_1.set('fieldImages', {'geoid': 'TextEdit', 'state_fp': 'TextEdit', 'name': 'TextEdit', });
lyr_TTAGeneralLocation_2.set('fieldImages', {'seed_id': 'Range', 'optimizati': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'cbsa_class': 'Range', 'density_cl': 'Range', 'county': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'decision': 'TextEdit', 'ID': 'Range', 'ringId': 'Range', 'distance': 'TextEdit', });
lyr_CountyBoundary_3.set('fieldImages', {'geoid': 'TextEdit', 'state_fp': 'TextEdit', 'name': 'TextEdit', });
lyr_Sites_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'open_date': 'DateTime', 'expect_qtr': 'TextEdit', });
lyr_TargetTradeArea_5.set('fieldImages', {'seed_id': 'Hidden', 'optimizati': 'Hidden', 'address': 'Hidden', 'city': 'TextEdit', 'state': 'Hidden', 'cbsa_class': 'Hidden', 'density_cl': 'Hidden', 'county': 'TextEdit', 'lat': 'Hidden', 'lon': 'Hidden', 'decision': 'Hidden', 'ID': 'Range', });
lyr_CBTLCafes_6.set('fieldImages', {'store_id': 'TextEdit', 'id': 'TextEdit', 'store_name': 'TextEdit', 'desc': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontrad': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', 'last_modified_date': 'DateTime', 'last_modified_by': 'TextEdit', });
lyr_GSCTTerritory_1.set('fieldLabels', {'geoid': 'no label', 'state_fp': 'no label', 'name': 'no label', });
lyr_TTAGeneralLocation_2.set('fieldLabels', {'seed_id': 'hidden field', 'optimizati': 'hidden field', 'address': 'hidden field', 'city': 'hidden field', 'state': 'hidden field', 'cbsa_class': 'hidden field', 'density_cl': 'hidden field', 'county': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'decision': 'hidden field', 'ID': 'hidden field', 'ringId': 'hidden field', 'distance': 'hidden field', });
lyr_CountyBoundary_3.set('fieldLabels', {'geoid': 'no label', 'state_fp': 'no label', 'name': 'no label', });
lyr_Sites_4.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', 'open_date': 'hidden field', 'expect_qtr': 'hidden field', });
lyr_TargetTradeArea_5.set('fieldLabels', {'city': 'inline label - always visible', 'county': 'hidden field', 'ID': 'hidden field', });
lyr_CBTLCafes_6.set('fieldLabels', {'store_id': 'hidden field', 'id': 'hidden field', 'store_name': 'inline label - always visible', 'desc': 'hidden field', 'sqft': 'hidden field', 'store_type': 'hidden field', 'trad_nontrad': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'operations': 'hidden field', 'last_modified_date': 'hidden field', 'last_modified_by': 'hidden field', });
lyr_CBTLCafes_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});