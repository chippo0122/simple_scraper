const axios = require('axios');
const cheerio = require('cheerio');
const {target_url, target_element, target_childs, target_attr} = require('./setup.json');

function scraper () {
    axios.get(target_url)
    .then(res => {
        const html = res.data;
        const $ = cheerio.load(html);
        let dataList = [];
        $(target_element, html).each( function() {
            let item = {};
            target_childs.forEach((el, index) => {
                const data = $(this).find(el.target_class_name).text();
                item[el.data_name] = data.trim();
            });
            target_attr.forEach((el , index) => {
                const data = $(this).find(el.target_class_name).attr(el.attr_type);
                item[el.attr_name] = data.trim();
            })
            dataList.push(item);
        });
        
        console.log(dataList);
    })
}

module.exports = {
    scraper
}