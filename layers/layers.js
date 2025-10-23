var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GoldiTerritory_1 = new ol.format.GeoJSON();
var features_GoldiTerritory_1 = format_GoldiTerritory_1.readFeatures(json_GoldiTerritory_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GoldiTerritory_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GoldiTerritory_1.addFeatures(features_GoldiTerritory_1);
var lyr_GoldiTerritory_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GoldiTerritory_1, 
                style: style_GoldiTerritory_1,
                popuplayertitle: 'Goldi Territory',
                interactive: false,
                title: '<img src="styles/legend/GoldiTerritory_1.png" /> Goldi Territory'
            });
var format_TTAInProgress_2 = new ol.format.GeoJSON();
var features_TTAInProgress_2 = format_TTAInProgress_2.readFeatures(json_TTAInProgress_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TTAInProgress_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TTAInProgress_2.addFeatures(features_TTAInProgress_2);
var lyr_TTAInProgress_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TTAInProgress_2, 
                style: style_TTAInProgress_2,
                popuplayertitle: 'TTA- In Progress',
                interactive: true,
    title: 'TTA- In Progress<br />\
    <img src="styles/legend/TTAInProgress_2_0.png" /> N<br />\
    <img src="styles/legend/TTAInProgress_2_1.png" /> Y<br />'
        });
var format_sites_3 = new ol.format.GeoJSON();
var features_sites_3 = format_sites_3.readFeatures(json_sites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sites_3.addFeatures(features_sites_3);
var lyr_sites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sites_3, 
                style: style_sites_3,
                popuplayertitle: 'sites',
                interactive: true,
                title: '<img src="styles/legend/sites_3.png" /> sites'
            });
var format_CBTLCafes_4 = new ol.format.GeoJSON();
var features_CBTLCafes_4 = format_CBTLCafes_4.readFeatures(json_CBTLCafes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTLCafes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTLCafes_4.addFeatures(features_CBTLCafes_4);
var lyr_CBTLCafes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CBTLCafes_4, 
                style: style_CBTLCafes_4,
                popuplayertitle: 'CBTL Cafes',
                interactive: true,
                title: '<img src="styles/legend/CBTLCafes_4.png" /> CBTL Cafes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoldiTerritory_1.setVisible(true);lyr_TTAInProgress_2.setVisible(true);lyr_sites_3.setVisible(true);lyr_CBTLCafes_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoldiTerritory_1,lyr_TTAInProgress_2,lyr_sites_3,lyr_CBTLCafes_4];
lyr_GoldiTerritory_1.set('fieldAliases', {'geoid': 'geoid', 'state_fp': 'state_fp', 'name': 'name', });
lyr_TTAInProgress_2.set('fieldAliases', {'seed_id': 'seed_id', 'optimizati': 'optimizati', 'address': 'address', 'city': 'city', 'state': 'state', 'cbsa_class': 'cbsa_class', 'density_cl': 'density_cl', 'county': 'county', 'lat': 'lat', 'lon': 'lon', 'decision': 'decision', 'ID': 'ID', });
lyr_sites_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'open_date': 'open_date', 'expect_qtr': 'expect_qtr', });
lyr_CBTLCafes_4.set('fieldAliases', {'store_id': 'store_id', 'id': 'id', 'store_name': 'store_name', 'desc': 'desc', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontrad': 'trad_nontrad', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', 'last_modified_date': 'last_modified_date', 'last_modified_by': 'last_modified_by', });
lyr_GoldiTerritory_1.set('fieldImages', {'geoid': 'TextEdit', 'state_fp': 'TextEdit', 'name': 'TextEdit', });
lyr_TTAInProgress_2.set('fieldImages', {'seed_id': 'TextEdit', 'optimizati': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'cbsa_class': 'TextEdit', 'density_cl': 'TextEdit', 'county': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'decision': 'TextEdit', 'ID': 'Range', });
lyr_sites_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'open_date': 'DateTime', 'expect_qtr': 'TextEdit', });
lyr_CBTLCafes_4.set('fieldImages', {'store_id': 'TextEdit', 'id': 'TextEdit', 'store_name': 'TextEdit', 'desc': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontrad': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', 'last_modified_date': 'DateTime', 'last_modified_by': 'TextEdit', });
lyr_GoldiTerritory_1.set('fieldLabels', {'geoid': 'no label', 'state_fp': 'no label', 'name': 'no label', });
lyr_TTAInProgress_2.set('fieldLabels', {'seed_id': 'hidden field', 'optimizati': 'hidden field', 'address': 'hidden field', 'city': 'inline label - always visible', 'state': 'hidden field', 'cbsa_class': 'hidden field', 'density_cl': 'no label', 'county': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'forecast': 'hidden field', 'decision': 'inline label - always visible', 'ID': 'hidden field', });
lyr_sites_3.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', 'open_date': 'hidden field', 'expect_qtr': 'hidden field', });
lyr_CBTLCafes_4.set('fieldLabels', {'store_id': 'hidden field', 'id': 'hidden field', 'store_name': 'inline label - always visible', 'desc': 'hidden field', 'sqft': 'hidden field', 'store_type': 'hidden field', 'trad_nontrad': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'operations': 'hidden field', 'last_modified_date': 'hidden field', 'last_modified_by': 'hidden field', });
lyr_CBTLCafes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});