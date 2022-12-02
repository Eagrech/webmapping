var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Zoneoptimaledadhsion_1 = new ol.format.GeoJSON();
var features_Zoneoptimaledadhsion_1 = format_Zoneoptimaledadhsion_1.readFeatures(json_Zoneoptimaledadhsion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneoptimaledadhsion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneoptimaledadhsion_1.addFeatures(features_Zoneoptimaledadhsion_1);
var lyr_Zoneoptimaledadhsion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zoneoptimaledadhsion_1, 
                style: style_Zoneoptimaledadhsion_1,
                interactive: false,
                title: '<img src="styles/legend/Zoneoptimaledadhsion_1.png" /> Zone optimale d\'adhésion'
            });
var format_Zonedadhsion_2 = new ol.format.GeoJSON();
var features_Zonedadhsion_2 = format_Zonedadhsion_2.readFeatures(json_Zonedadhsion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedadhsion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedadhsion_2.addFeatures(features_Zonedadhsion_2);
var lyr_Zonedadhsion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonedadhsion_2, 
                style: style_Zonedadhsion_2,
                interactive: false,
                title: '<img src="styles/legend/Zonedadhsion_2.png" /> Zone d\'adhésion'
            });
var format_Zonecoeur_3 = new ol.format.GeoJSON();
var features_Zonecoeur_3 = format_Zonecoeur_3.readFeatures(json_Zonecoeur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonecoeur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonecoeur_3.addFeatures(features_Zonecoeur_3);
var lyr_Zonecoeur_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonecoeur_3, 
                style: style_Zonecoeur_3,
                interactive: false,
                title: '<img src="styles/legend/Zonecoeur_3.png" /> Zone coeur'
            });
var format_Secteurs_4 = new ol.format.GeoJSON();
var features_Secteurs_4 = format_Secteurs_4.readFeatures(json_Secteurs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_4.addFeatures(features_Secteurs_4);
var lyr_Secteurs_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Secteurs_4, 
                style: style_Secteurs_4,
                interactive: false,
                title: '<img src="styles/legend/Secteurs_4.png" /> Secteurs'
            });
var format_Sentiers_5 = new ol.format.GeoJSON();
var features_Sentiers_5 = format_Sentiers_5.readFeatures(json_Sentiers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentiers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentiers_5.addFeatures(features_Sentiers_5);
var lyr_Sentiers_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sentiers_5, 
                style: style_Sentiers_5,
                interactive: false,
                title: '<img src="styles/legend/Sentiers_5.png" /> Sentiers'
            });
var format_ParcNationaldesPyrnes_6 = new ol.format.GeoJSON();
var features_ParcNationaldesPyrnes_6 = format_ParcNationaldesPyrnes_6.readFeatures(json_ParcNationaldesPyrnes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcNationaldesPyrnes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcNationaldesPyrnes_6.addFeatures(features_ParcNationaldesPyrnes_6);
var lyr_ParcNationaldesPyrnes_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParcNationaldesPyrnes_6, 
                style: style_ParcNationaldesPyrnes_6,
                interactive: false,
                title: '<img src="styles/legend/ParcNationaldesPyrnes_6.png" /> Parc National des Pyrénées'
            });
var format_Refuges_7 = new ol.format.GeoJSON();
var features_Refuges_7 = format_Refuges_7.readFeatures(json_Refuges_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refuges_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refuges_7.addFeatures(features_Refuges_7);
var lyr_Refuges_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Refuges_7, 
                style: style_Refuges_7,
                interactive: true,
                title: '<img src="styles/legend/Refuges_7.png" /> Refuges'
            });
var format_MaisonsduParc_8 = new ol.format.GeoJSON();
var features_MaisonsduParc_8 = format_MaisonsduParc_8.readFeatures(json_MaisonsduParc_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaisonsduParc_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaisonsduParc_8.addFeatures(features_MaisonsduParc_8);
var lyr_MaisonsduParc_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaisonsduParc_8, 
                style: style_MaisonsduParc_8,
                interactive: true,
                title: '<img src="styles/legend/MaisonsduParc_8.png" /> Maisons du Parc'
            });
var format_Plansdeau_9 = new ol.format.GeoJSON();
var features_Plansdeau_9 = format_Plansdeau_9.readFeatures(json_Plansdeau_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plansdeau_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plansdeau_9.addFeatures(features_Plansdeau_9);
var lyr_Plansdeau_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plansdeau_9, 
                style: style_Plansdeau_9,
                interactive: false,
                title: '<img src="styles/legend/Plansdeau_9.png" /> Plans d\'eau'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Zoneoptimaledadhsion_1.setVisible(true);lyr_Zonedadhsion_2.setVisible(true);lyr_Zonecoeur_3.setVisible(true);lyr_Secteurs_4.setVisible(true);lyr_Sentiers_5.setVisible(true);lyr_ParcNationaldesPyrnes_6.setVisible(true);lyr_Refuges_7.setVisible(true);lyr_MaisonsduParc_8.setVisible(true);lyr_Plansdeau_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Zoneoptimaledadhsion_1,lyr_Zonedadhsion_2,lyr_Zonecoeur_3,lyr_Secteurs_4,lyr_Sentiers_5,lyr_ParcNationaldesPyrnes_6,lyr_Refuges_7,lyr_MaisonsduParc_8,lyr_Plansdeau_9];
lyr_Zoneoptimaledadhsion_1.set('fieldAliases', {'ID': 'ID', 'Libellé': 'Libellé', });
lyr_Zonedadhsion_2.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Zonecoeur_3.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Secteurs_4.set('fieldAliases', {'ID': 'ID', 'Nom': 'Nom', });
lyr_Sentiers_5.set('fieldAliases', {'IDPNP': 'IDPNP', });
lyr_ParcNationaldesPyrnes_6.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Refuges_7.set('fieldAliases', {'Type': 'Type', 'Propriete': 'Propriété', 'Nom': 'Nom ', });
lyr_MaisonsduParc_8.set('fieldAliases', {'Nom': 'Maison du Parc', });
lyr_Plansdeau_9.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'TOPONYME': 'TOPONYME', 'SUPERFICIE': 'SUPERFICIE', 'area_ha': 'area_ha', });
lyr_Zoneoptimaledadhsion_1.set('fieldImages', {'ID': 'TextEdit', 'Libellé': 'TextEdit', });
lyr_Zonedadhsion_2.set('fieldImages', {'id': 'Range', 'nom': 'TextEdit', });
lyr_Zonecoeur_3.set('fieldImages', {'id': 'Range', 'nom': 'TextEdit', });
lyr_Secteurs_4.set('fieldImages', {'ID': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Sentiers_5.set('fieldImages', {'IDPNP': 'TextEdit', });
lyr_ParcNationaldesPyrnes_6.set('fieldImages', {'id': 'Range', 'nom': 'TextEdit', });
lyr_Refuges_7.set('fieldImages', {'Type': 'TextEdit', 'Propriete': 'TextEdit', 'Nom': 'TextEdit', });
lyr_MaisonsduParc_8.set('fieldImages', {'Nom': 'TextEdit', });
lyr_Plansdeau_9.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'TOPONYME': 'TextEdit', 'SUPERFICIE': 'Range', 'area_ha': 'TextEdit', });
lyr_Zoneoptimaledadhsion_1.set('fieldLabels', {'ID': 'no label', 'Libellé': 'no label', });
lyr_Zonedadhsion_2.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Zonecoeur_3.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Secteurs_4.set('fieldLabels', {'ID': 'no label', 'Nom': 'no label', });
lyr_Sentiers_5.set('fieldLabels', {'IDPNP': 'no label', });
lyr_ParcNationaldesPyrnes_6.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Refuges_7.set('fieldLabels', {'Type': 'no label', 'Propriete': 'no label', 'Nom': 'inline label', });
lyr_MaisonsduParc_8.set('fieldLabels', {'Nom': 'inline label', });
lyr_Plansdeau_9.set('fieldLabels', {'ID': 'no label', 'NATURE': 'no label', 'TOPONYME': 'no label', 'SUPERFICIE': 'no label', 'area_ha': 'no label', });
lyr_Plansdeau_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});