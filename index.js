var map;
var areaData

function mapDraw(num) {
    map = L.map('map', {
        zoomControl: false,
        minZoom: 7, // 最低ズームレベルを4に設定
        maxZoom: 9 // 最大ズームレベルを7に設定
    });

    var initialLatLng = L.latLng("35.39", "139.44");
    map.setView(initialLatLng, 7);

    L.control.scale({
        maxWidth: 150,
        position: 'bottomright',
        imperial: false
    }).addTo(map);
    
        var currentTime = new Date();
        var currentMin = ('0' + currentTime.getMinutes()).slice(-2);
        var currentHour = currentTime.getHours();
        var currentYear = currentTime.getFullYear();
        var currentMonth = ('0' + (currentTime.getMonth() + 1)).slice(-2);
        var currentDay = ('0' + currentTime.getDate()).slice(-2);
        var min = 0
        if(currentMin.slice(0,1) === 0 || currentMin.slice(1,2) <= 7){
            currentHour -= 1
            min = currentMin.slice(0,1)-1
            if(min < 0){
                min = 5
            }
            if(currentHour < 0){
                currentHour += 23
                currentDay -= 1
                if(currentDay <= 0){
                    currentMonth -= 1
                    currentDay = new Date(currentYear, currentMonth, 0).getDate();
                    if(currentMonth <= 0){
                        currentMonth += 12
                        currentYear -= 1
                    }
                }
            }
        }else {
            min = currentMin.slice(0,1)
        }

        // AMeDAS データを読み込み、円を追加
        $.getJSON("https://api.p2pquake.net/v2/history?codes=556&limit=1", function (datas) {
            if(datas[0]){
            var areas = datas[0].areas
            areaData = []
            var areaNum = 0
            for(var i = 0;i < areas.length;i++){
                if("青森" === areas[i].pref){
                    areaNum = 2
                }else if("岩手" === areas[i].pref){
                    areaNum = 3
                }else if("宮城" === areas[i].pref){
                    areaNum = 4
                }else if("秋田" === areas[i].pref){
                    areaNum = 5
                }else if("山形" === areas[i].pref){
                    areaNum = 6
                }else if("福島" === areas[i].pref){
                    areaNum = 7
                }else if("茨城" === areas[i].pref){
                    areaNum = 8
                }else if("栃木" === areas[i].pref){
                    areaNum = 9
                }else if("群馬" === areas[i].pref){
                    areaNum = 10
                }else if("岩手" === areas[i].pref){
                    areaNum = 11
                }else if("埼玉" === areas[i].pref){
                    areaNum = 12
                }else if("千葉" === areas[i].pref){
                    areaNum = 13
                }else if("神奈川" === areas[i].pref){
                    areaNum = 14
                }else if("新潟" === areas[i].pref){
                    areaNum = 15
                }else if("富山" === areas[i].pref){
                    areaNum = 16
                }else if("石川" === areas[i].pref){
                    areaNum = 17
                }else if("福井" === areas[i].pref){
                    areaNum = 18
                }else if("山梨" === areas[i].pref){
                    areaNum = 19
                }else if("長野" === areas[i].pref){
                    areaNum = 20
                }else if("岐阜" === areas[i].pref){
                    areaNum = 21
                }else if("静岡" === areas[i].pref){
                    areaNum = 22
                }else if("愛知" === areas[i].pref){
                    areaNum = 23
                }else if("三重" === areas[i].pref){
                    areaNum = 24
                }else if("滋賀" === areas[i].pref){
                    areaNum = 25
                }else if("京都" === areas[i].pref){
                    areaNum = 26
                }else if("大阪" === areas[i].pref){
                    areaNum = 27
                }else if("兵庫" === areas[i].pref){
                    areaNum = 28
                }else if("奈良" === areas[i].pref){
                    areaNum = 29
                }else if("和歌山" === areas[i].pref){
                    areaNum = 30
                }else if("鳥取" === areas[i].pref){
                    areaNum = 31
                }else if("島根" === areas[i].pref){
                    areaNum = 32
                }else if("岡山" === areas[i].pref){
                    areaNum = 33
                }else if("広島" === areas[i].pref){
                    areaNum = 34
                }else if("山口" === areas[i].pref){
                    areaNum = 35
                }else if("徳島" === areas[i].pref){
                    areaNum = 36
                }else if("香川" === areas[i].pref){
                    areaNum = 37
                }else if("愛媛" === areas[i].pref){
                    areaNum = 38
                }else if("高知" === areas[i].pref){
                    areaNum = 39
                }else if("福岡" === areas[i].pref){
                    areaNum = 40
                }else if("佐賀" === areas[i].pref){
                    areaNum = 41
                }else if("長崎" === areas[i].pref){
                    areaNum = 42
                }else if("熊本" === areas[i].pref){
                    areaNum = 43
                }else if("大分" === areas[i].pref){
                    areaNum = 44
                }else if("宮崎" === areas[i].pref){
                    areaNum = 45
                }else if("北海道道南" === areas[i].pref){
                    areaNum = 101
                }else if("北海道道央" === areas[i].pref){
                    areaNum = 102
                }else if("北海道道北" === areas[i].pref){
                    areaNum = 103
                }else if("北海道道東" === areas[i].pref){
                    areaNum = 104
                }else if("東京" === areas[i].pref){
                    areaNum = 201
                }else if("伊豆諸島" === areas[i].pref){
                    areaNum = 202
                }else if("鹿児島" === areas[i].pref){
                    areaNum = 301
                }else if("奄美群島" === areas[i].pref){
                    areaNum = 302
                }else if("沖縄本島" === areas[i].pref){
                    areaNum = 401
                }else if("八重山" === areas[i].pref){
                    areaNum = 404
                }else if("宮古島" === areas[i].pref){
                    areaNum = 403
                }else if("大東島" === areas[i].pref){
                    areaNum = 402
                }
                areaData.push(areas[i].pref)
            }
            }else {
                areaData = [0,0]
            }
        });
    var areaDataSet = new Set(areaData);
    // GeoJSON データを読み込んで地図に追加
    $.getJSON("./prefectures.geojson", function (data) {
    // areaDataに含まれる値のセットを作成
    
    L.geoJson(data, {
        style: function(feature) {
            console.log(feature.properties.pref + "," + feature.properties.name);
            // 都道府県ごとに異なる色を割り当てる
            // areaData配列に同じ値がある場合、それに対応する都道府県はcase 1:と同じスタイルを適用する
            if (areaDataSet.has(feature.properties.pref)) {
                return {
                    color: "#ffffff",
                    weight: 1.5,
                    opacity: 1,
                    fillColor: "#3a3a3a",
                    fillOpacity: 1
                };
            } else {
                // areaDataに含まれない場合は、デフォルトのスタイルを適用
                return {
                    color: "#ffffff",
                    weight: 1.5,
                    opacity: 1,
                    fillColor: "#3a3a3a",
                    fillOpacity: 1
                };
            }
        }
    }).addTo(map);
});
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9011.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(102)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9012.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(101)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
    
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9013.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(103)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9014.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(104)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9461.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(301)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
    
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9462.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(302)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
    
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9471.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(401)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
    
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9472.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(402)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
    
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9473.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(403)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
    
    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9474.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(404)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });

    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9131.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(201)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });

    // GeoJSON データを読み込んで地図に追加// GeoJSON データを読み込んで地図に追加
    $.getJSON("https://geoshape.ex.nii.ac.jp/jma/resource/AreaForecastLocalEEW/20190125/9132.geojson", function (data) {
        L.geoJson(data, {
            style: function(feature) {
               if(areaDataSet.has(202)){
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "yellow",
                fillOpacity: 1
                }
               }else{
                return{
                color: "#ffffff",
                weight: 1.5,
                opacity: 1,
                fillColor: "#3a3a3a",
                fillOpacity: 1
                }
               }
            }
        }).addTo(map);
    });
}

function changeMap(i) {
    console.log("C,"+i)
    map.remove();
    mapDraw(i);
}

function start() {
    mapDraw(1);
}

start();
