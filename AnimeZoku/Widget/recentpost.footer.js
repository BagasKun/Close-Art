﻿var _0x760d=["display","inline-block","css","#closeart","Designed by <a href=\"https://facebook.com/closeart.id\">Close Art</a>","html","length","#closeart","href","location","https://facebook.com/closeart.id","ready"];$(document)[_0x760d[11]](function(){$(_0x760d[3])[_0x760d[2]](_0x760d[0],_0x760d[1]),$(_0x760d[3])[_0x760d[5]](_0x760d[4]),setInterval(function(){$(_0x760d[7])[_0x760d[6]]||(window[_0x760d[9]][_0x760d[8]]=_0x760d[10])},3e3)});
// Recent Post
var jumlahposting=5;var standardstyling=true;function recent_footer(json){for(var i=0;i<jumlahposting;i++){var entry=json.feed.entry[i];var posttitle=entry.title.t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}posttitle=posttitle.link(posturl);if(standardstyling)document.write('<li>');document.write(posttitle)}if(standardstyling)document.write('</li>')}